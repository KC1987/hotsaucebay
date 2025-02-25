import { db } from "@/app/lib/firebase";
import ListItem from "@/components/browse/sauce_list_item";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

export default async function Page() {
  const collectionRef = collection(db, "products");

  const q = query(collectionRef, orderBy("shu", "desc"));

  const snapshot = await getDocs(q);
  const sauces = snapshot.docs.map((doc) => doc.data());

  return (
    <div>
      <h1 className="text-xl">Scoville Heat Units</h1>
      {sauces.map((sauce, i) => (
        <ListItem sauce={sauce} key={i} />
      ))}
    </div>
  );
}
