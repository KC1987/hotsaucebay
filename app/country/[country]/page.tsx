import { countries } from "@/app/lib/data";
import { db } from "@/app/lib/firebase";
import ListItem from "@/components/browse/sauce_list_item";
import { collection, getDocs, query, where } from "firebase/firestore";



export default async function Page ({ params }:any) {
  const { country } = await params;
  const countryData = countries.find( c => c.key === country );

  const collectionRef = collection( db, "products" );
  const q = query( collectionRef, where( "countries", "array-contains", countryData ) );

  const saucesData = await getDocs(q);
  const sauces = saucesData.docs.map( doc => doc.data() );

  return (
    <div>
      <h1 className="text-2xl" >{ countryData.label }</h1>
      {
        sauces.map( (sauce, i) => 
          <div key={i} >
            <ListItem sauce={sauce} />
          </div>
        )
      }
    </div>
  )
}