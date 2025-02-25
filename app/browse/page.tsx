import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import Sauce_list_item from "@/components/browse/sauce_list_item";
import Categories from "@/components/browse/browse_categories";

export default async function Browse() {
  const collectionRef = collection(db, "products");

  const productData = await getDocs(collectionRef);
  const products = productData.docs.map((doc) => doc.data());

  return (
    <div className="bg-slate-800 p-2">
      <Categories />
      {products.map((sauce, i) => (
        <Sauce_list_item sauce={sauce} key={i} />
      ))}
    </div>
  );
}
