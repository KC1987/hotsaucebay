import { db } from "@/app/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";

export function useAddProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addProduct = async (product: any) => {
    setLoading(true);
    setError(null);
    try {
      await addDoc(collection(db, "products"), product);
    } catch (err) {
      console.error("Error adding product:", err);
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return { addProduct, loading, error };
}

export async function useGetIngredients() {
  const collectionRef = collection(db, "ingredients");
  const ingredientsData = await getDocs(collectionRef);
  const ingredients = ingredientsData.docs.map((doc) => doc.data());

  return ingredients;
}
