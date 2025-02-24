import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";



export default async function Sauce ( { params }:any ) {
  const { slug } = await params;

  const collectionRef = collection( db, "products" );
  const q = query( collectionRef, where( "slug", "==", slug ), limit(1) );

  const sauceData = await getDocs(q);
  const sauce = sauceData.docs.map( doc => doc.data() )[0];

  return (
    <div>
      <h1>{ sauce.name }</h1>
      
      <h1>{ sauce.brand.label }</h1>
      <h1>{ sauce.url }</h1>
      <h1>{ sauce.affLink }</h1>
      <h1>{ sauce.bayscore }</h1>
      <h1>{ sauce.description }</h1>
      <h1>{ sauce.imageUrls }</h1>

      { sauce.categories?.map( (c:any) => <p key={c.key} >{ c.label }</p> ) }
      { sauce.countries?.map( (c:any) => <p key={c.key} >{ c.label }</p> ) }
      { sauce.ingredients?.map( (i:any) => <p key={i.key} >{ i.label }</p> ) }
      <h1>{ sauce.shu }</h1>

      
    </div>
  )
}