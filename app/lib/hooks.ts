import { db } from "@/app/lib/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"


export async function useAddProduct ( product:any ) {
  await addDoc(collection( db, "products" ), product );
  // console.log('Product added');
};

export async function useGetIngredients () {
  const collectionRef = collection( db, "ingredients" );
  const ingredientsData = await getDocs( collectionRef );
  const ingredients = ingredientsData.docs.map( doc => doc.data() );
  
  return ingredients;
};