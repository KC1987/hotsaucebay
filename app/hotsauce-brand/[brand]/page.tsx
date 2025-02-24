import { brands } from "@/app/lib/data";
import { db } from "@/app/lib/firebase";
import ListItem from "@/components/browse/sauce_list_item";
import { collection, getDocs, query, where } from "firebase/firestore";

import type { Props } from "@/app/lib/types";
import type { Metadata } from "next";


export async function generateMetadata( { params }:Props ):Promise<Metadata> {
  const { brand } = await params;
  const brandData = brands.find( b => b.key === brand );

  return {
    title: `Hot sauces from ${brandData?.label}`,
    description: `Find the best hotsauces from ${brandData?.label}`
  }
};



export default async function Page ({ params }:any) {
  const { brand } = await params;
  const brandData = brands.find( b => b.key === brand );

  const collectionRef = collection( db, "products" );
  const q = query( collectionRef, where( "brand", "==", brandData ) );

  const saucesData = await getDocs( q );
  const sauces = saucesData.docs.map( doc => doc.data() );

  return (
    <div>
      <h1 className="text-xl" >Hotsauces by { brandData?.label }</h1>
      {
        sauces.map( ( sauce, i ) =>
          < ListItem sauce={sauce} key={i} />
        )
      }
    </div>
  )
}