'use client'
import imageCompression from "browser-image-compression";
import { countries as countries_list } from "@/app/lib/data";
import Ingredients from "@/components/ingredients";

import { useEffect, useState } from "react"
import { useAddProduct, useGetIngredients } from "@/app/lib/hooks";


import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Textarea } from "@heroui/react";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { serverTimestamp } from "firebase/firestore";
import { storage } from "@/app/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";



export default function Add () {
  const [ ingredients, setIngredients ] = useState([]);
  const [ countries, setCountries ] = useState([]);
  const [ images, setImages ] = useState([]);
  const [ imageUrls, setImageUrls ] = useState([]);


  const [ name, setName ] = useState('');
  const [ brand, setBrand ] = useState('');
  const [ shu, setShu ] = useState('');
  const [ rating, setRating ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ affLink, setAffLink ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ releaseDate, setReleaseDate ] = useState('');
  const [ color, setColor ] = useState('');
  const [ listPrice, setListPrice ] = useState('');
  const [ selectedIngredients, setSelectedIngredients ] = useState( new Set([]) );
  const [ selectedCountries, setSelectedCountries ] = useState( new Set([]) );
  const [ slug, setSlug ] = useState('');

  const [ success, setSuccess ] = useState(false);
  const [ imgSuccess, setImgSuccess ] = useState(false);

  useEffect( () => {
    async function fetchIngredients () {
      const ingredientsData = await useGetIngredients();
      setIngredients(ingredientsData);
    }
    fetchIngredients();
  }, [] );

  function handleImageChange ( e:React.ChangeEvent<HTMLInputElement> ) {
    if ( e.target.files && e.target.files[0] ) {
      setImages( Array.from( e.target.files ) )
    }
  };

  function addIngredients () {
    // Array of selected ingredients
    const ings = Array.from(selectedIngredients);

    // New array of objects with keys and labels
    let ingData:any = [];

    // Go through ingredients and search for right key, add object to ingData
    ings.map( ing => {
      const match = ingredients.find( i => i.key === ing );
      ingData.push( match );
    });

    return ingData
  };

  function addCountries () {
    const cnts = Array.from(selectedCountries);

    let cntData:any = [];

    cnts.map( cnt => {
      const match = countries_list.find( c => c.key === cnt );
      cntData.push( match );
    });

    return cntData
  };

  const handleImageUpload = async () => {
    const uploadPromises = images.map(async (image) => {
        const convertedImage = await imageCompression(
          image,
          {
            maxSizeMB: 0.5,
            maxWidthOrHeight: 800,
            useWebWorker: false,
            // onProgress: pro => console.log(`Compression progress: `, pro),
          }
        );
        console.log(`${convertedImage.name} converted`);
          
        const storageRef = ref(storage, `images/products/${name}/${image.name}`);
        await uploadBytes(storageRef, convertedImage);
        // console.log(`${convertedImage.name} uploaded`);
  
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    });

    const urls = await Promise.all(uploadPromises);
    setImageUrls(urls);

    setImgSuccess(true);
  };

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
  function handleSubmit ( e:any ) {
    e.preventDefault();

    const product = {
      name,
      brand,
      countries: addCountries(),
      shu: Number(shu),
      bayscore: Number(rating),
      url,
      affLink,
      dateAdded: serverTimestamp(),
      categories: [{ label: 'Hotsauce', key: 'hotsauce' }],
      ingredients: addIngredients(),
      description,
      imageUrls,
      slug,
    };

    try {
      useAddProduct(product);
      
      setName('');
      setBrand('');
      setIngredients([]);
      setCountries([]);
      setShu('');
      setRating('');
      setUrl('');
      setAffLink('');
      setImageUrls([]);
      setImages([]);
      setColor('');
      setListPrice('');
      setReleaseDate('');
      setDescription('');
      setSlug('');
      setSelectedCountries( new Set([]) );
      setSelectedIngredients( new Set([]) );
  
      setSuccess(true);
      setImgSuccess(false);
  
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      return
    }

  };


  return (
    <div>
      <div className="flex flex-col">
        
      <h1 className="text-2xl" >Add</h1>
      <p>Selected countries: { JSON.stringify( Array.from(selectedCountries) ) }</p>
      <p>Selected ingredients: { JSON.stringify( Array.from(selectedIngredients) ) }</p>
      <Divider orientation="horizontal" />
      <form onSubmit={handleSubmit} >
        <ul>
          <li>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" >Country</Button>
              </DropdownTrigger>
              <DropdownMenu
                // disallowEmptySelection
                items={countries_list}
                closeOnSelect={false}
                selectedKeys={selectedCountries}
                selectionMode="multiple"
                variant="flat"
                onSelectionChange={setSelectedCountries}
                >
                { (country):any => 
                  <DropdownItem
                  key={country.key}
                  >
                    {country.label}
                  </DropdownItem>
                  }
              </DropdownMenu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" >Ingredients</Button>
              </DropdownTrigger>
              <DropdownMenu
                // disallowEmptySelection
                items={ingredients}
                closeOnSelect={false}
                selectedKeys={selectedIngredients}
                selectionMode="multiple"
                variant="flat"
                onSelectionChange={setSelectedIngredients}
                >
                { (item):any => 
                  <DropdownItem
                  key={item.key}
                  >
                    {item.label}
                  </DropdownItem>
                  }
              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="my-2" >
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={ e => setName(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="slug">Slug</label>
            <input type="text" value={slug} onChange={ e => setSlug(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="maker">Brand</label>
            <input type="text" value={brand} onChange={ e => setBrand(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="shu">Scoville Heat Units</label>
            <input type="number" value={shu} onChange={ e => setShu(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="rating">Bayscore</label>
            <input type="number" value={rating} onChange={ e => setRating(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="color">Color</label>
            <input type="text" value={color} onChange={ e => setColor(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="listPrice">List Price</label>
            <input type="number" value={listPrice} onChange={ e => setListPrice(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="rel-date">Release Date</label>
            <input type="text" value={releaseDate} onChange={ e => setReleaseDate(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="url">URL</label>
            <input type="text" value={url} onChange={ e => setUrl(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="affLink">Affiliate Link</label>
            <input type="text" value={affLink} onChange={ e => setAffLink(e.target.value) } />
          </li>
          <li>
            <Textarea className="max-w-lg" label="Description" onChange={ e => setDescription(e.target.value) } />
          </li>
          <li className="my-2" >
            <input type="file" onChange={handleImageChange} multiple />
            <Button onPress={handleImageUpload} >Upload</Button>
            { imgSuccess && <p className="text-green-500" >Images uploaded!</p> }
          </li>
        </ul>


        <Button color="primary" type="submit">Submit</Button>
      </form >
      
      { success && <h1 className="text-xl text-green-500" >Product added sccessfuly !</h1> }
      </div>
      <Ingredients />
    </div>
  )
}