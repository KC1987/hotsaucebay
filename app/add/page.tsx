"use client";

import { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { collection, getDocs, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Components
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Textarea,
  Selection,
} from "@heroui/react";
import { Button } from "@heroui/button";

// Data & Config
import { countries as countries_list, brands, flavours } from "@/app/lib/data";
import { db, storage } from "@/app/lib/firebase";
import { useAddProduct } from "@/app/lib/hooks";
import { getSelectionSize, getSelectedKeys } from "@/app/lib/utils";

// Types
interface Ingredient {
  key: string;
  label: string;
}

interface Country {
  key: string;
  label: string;
}

interface Product {
  name: string;
  brand: object;
  countries: Country[];
  shu: number;
  bayscore: number;
  url: string;
  affLink: string;
  dateAdded: any;
  categories: Array<{ label: string; key: string }>;
  ingredients: Ingredient[];
  flavours: Array<{ label: string; key: string }>;
  description: string;
  imageUrls: string[];
  slug: string;
}

export default function Add() {
  const { addProduct, loading, error } = useAddProduct();

  // State for data lists
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Selection>(
    new Set([]),
  );
  const [selectedCountries, setSelectedCountries] = useState<Selection>(
    new Set([]),
  );
  const [selectedBrands, setSelectedBrands] = useState<Selection>(new Set([]));
  const [selectedFlavours, setSelectedFlavours] = useState<Selection>(
    new Set([]),
  );

  // Form fields
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [shu, setShu] = useState("");
  const [rating, setRating] = useState("");
  const [url, setUrl] = useState("");
  const [affLink, setAffLink] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");

  // UI states
  const [success, setSuccess] = useState(false);
  const [imgSuccess, setImgSuccess] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const snapshot = await getDocs(collection(db, "ingredients"));
        const ingredientsData = snapshot.docs.map((doc) => ({
          key: doc.data().key,
          label: doc.data().label,
        }));
        setIngredients(ingredientsData);
      } catch (err) {
        console.error("Error fetching ingredients:", err);
      }
    };

    fetchIngredients();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleImageUpload = async () => {
    if (!name) {
      alert("Please enter a product name before uploading images");
      return;
    }

    try {
      const uploadPromises = images.map(async (image) => {
        const compressedImage = await imageCompression(image, {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        });

        const storageRef = ref(
          storage,
          `images/products/${name}/${image.name}`,
        );
        await uploadBytes(storageRef, compressedImage);
        return getDownloadURL(storageRef);
      });

      const urls = await Promise.all(uploadPromises);
      setImageUrls(urls);
      setImgSuccess(true);
    } catch (err) {
      console.error("Error uploading images:", err);
      alert("Error uploading images. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imgSuccess) {
      alert("Please upload images before submitting");
      return;
    }

    try {
      const selectedCountryKeys = getSelectedKeys(selectedCountries);
      const selectedIngredientKeys = getSelectedKeys(selectedIngredients);
      const selectedBrandKey = getSelectedKeys(selectedBrands);
      const selectedFlavourKeys = getSelectedKeys(selectedFlavours);

      const product: Product = {
        name,
        brand: selectedBrandKey.map((key) =>
          brands.find((b) => b.key === key),
        )[0],
        countries: selectedCountryKeys.map(
          (key) => countries_list.find((c) => c.key === key)!,
        ),
        shu: Number(shu),
        bayscore: Number(rating),
        url,
        affLink,
        dateAdded: serverTimestamp(),
        categories: [{ label: "Hot Sauce", key: "hotsauce" }],
        ingredients: selectedIngredientKeys.map(
          (key) => ingredients.find((i) => i.key === key)!,
        ),
        flavours: selectedFlavourKeys.map(
          (key) => flavours.find((f) => f.key === key)!,
        ),
        description,
        imageUrls,
        slug: slug.toLowerCase().replace(/\s+/g, "-"),
      };

      await addProduct(product);
      resetForm();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const resetForm = () => {
    setName("");
    setBrand("");
    setShu("");
    setRating("");
    setUrl("");
    setAffLink("");
    setDescription("");
    setSlug("");
    setImages([]);
    setImageUrls([]);
    setSelectedCountries(new Set([]));
    setSelectedIngredients(new Set([]));
    setSelectedFlavours(new Set([]));
    setImgSuccess(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Add New Hot Sauce</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="w-full">
                    Select Countries ({getSelectionSize(selectedCountries)})
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  items={countries_list}
                  closeOnSelect={false}
                  selectedKeys={selectedCountries}
                  selectionMode="multiple"
                  onSelectionChange={setSelectedCountries}
                >
                  {(country) => (
                    <DropdownItem key={country.key}>
                      {country.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="w-full">
                    Select Brand ({getSelectionSize(selectedBrands)})
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  items={brands}
                  closeOnSelect={true}
                  selectedKeys={selectedBrands}
                  selectionMode="single"
                  onSelectionChange={setSelectedBrands}
                >
                  {(brand) => (
                    <DropdownItem key={brand.key}>{brand.label}</DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="w-full">
                    Select Ingredients ({getSelectionSize(selectedIngredients)})
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  items={ingredients}
                  closeOnSelect={false}
                  selectedKeys={selectedIngredients}
                  selectionMode="multiple"
                  onSelectionChange={setSelectedIngredients}
                >
                  {(item) => (
                    <DropdownItem key={item.key}>{item.label}</DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="w-full">
                    Select Flavours ({getSelectionSize(selectedFlavours)})
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  items={flavours}
                  closeOnSelect={false}
                  selectedKeys={selectedFlavours}
                  selectionMode="multiple"
                  onSelectionChange={setSelectedFlavours}
                >
                  {(flavour) => (
                    <DropdownItem key={flavour.key}>{flavour.label}</DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
                }}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={(e) =>
                  setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Scoville Heat Units"
              value={shu}
              onChange={(e) => setShu(e.target.value)}
              className="p-2 border rounded"
              required
              min="0"
            />
            <input
              type="number"
              placeholder="Bayscore Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="p-2 border rounded"
              required
              min="0"
              max="10"
              step="0.1"
            />
          </div>

          <div className="space-y-4">
            <input
              type="url"
              placeholder="Product URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="url"
              placeholder="Affiliate Link"
              value={affLink}
              onChange={(e) => setAffLink(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-h-[100px]"
            required
          />

          <div className="space-y-2">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
              required
            />
            <Button
              onPress={handleImageUpload}
              disabled={images.length === 0 || !name}
              color="secondary"
              className="w-full"
            >
              Upload Images
            </Button>
            {imgSuccess && (
              <p className="text-green-500">Images uploaded successfully!</p>
            )}
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full"
            disabled={loading || !imgSuccess}
          >
            {loading ? "Adding..." : "Add Hot Sauce"}
          </Button>
        </form>

        {success && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            Product added successfully!
          </div>
        )}

        {error && (
          <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
            Error: {error.message}
          </div>
        )}
      </div>
    </div>
  );
}