'use client'
import imageCompression from "browser-image-compression";

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
  const [ images, setImages ] = useState([]);
  const [ imageUrls, setImageUrls ] = useState([]);


  const [ name, setName ] = useState('');
  const [ brand, setBrand ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ shu, setShu ] = useState('');
  const [ rating, setRating ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ affLink, setAffLink ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ releaseDate, setReleaseDate ] = useState('');
  const [ color, setColor ] = useState('');
  const [ listPrice, setListPrice ] = useState('');
  const [ selectedIngredients, setSelectedIngredients ] = useState( new Set([]) );

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
      country,
      shu: Number(shu),
      bayscore: Number(rating),
      url,
      affLink,
      dateAdded: serverTimestamp(),
      category: 'hotsauce',
      ingredients: Array.from(selectedIngredients),
      description,
      imageUrls,
    };

    useAddProduct(product);

    setName('');
    setBrand('');
    setCountry('');
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

    setSuccess(true);
    setImgSuccess(false);

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };


  return (
    <div>
      <div className="flex flex-col">
        
      <h1 className="text-2xl" >Add</h1>

      <p>Selected ingredients: { JSON.stringify( Array.from(selectedIngredients) ) }</p>
      <Divider orientation="horizontal" />
      <form onSubmit={handleSubmit} >
        <ul>
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
            <label htmlFor="maker">Brand</label>
            <input type="text" value={brand} onChange={ e => setBrand(e.target.value) } />
          </li>
          <li className="my-2" >
            <label htmlFor="country">Country</label>
            <input type="text" value={country} onChange={ e => setCountry(e.target.value) } />
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