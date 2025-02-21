import { Link } from "@heroui/link";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase";



export default async function Page() {

  const collectionRef = collection(db, 'products');

  const products = await getDocs( collectionRef );
  const products_data = products.docs.map(doc => doc.data());


  return (
    <div>
      <h1>HotSauceBay</h1>
      { products_data.map ( (product, index) =>
      <div key={index} >
        <Link href={`/products/${product.name}`} >
          <div className="border-solid border-2 border-gray-500 p-2" >
            <img src={product.imageUrls[0]} width={300} height={200} />
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p>{product.country}</p>
            <p>{product.rating}</p>
            <p>{product.hl}</p>
            <p>{product.url}</p>
            <p>{product.affLink}</p>
          </div>
        </Link>
      </div>
      ) }
        
    </div>
  );
}