import BrowseCard from "@/components/browse/browse_card";
import Link from "next/link";

export default async function Browse() {

  return (
      <div className="bg-gray-600 flex flex-col p-2 gap-4">

        <Link className="text-2xl" href={`/browse/hotsauce-countries`}>Countries</Link>

        <Link href={`/browse/hotsauce-countries`}>All countries...</Link>

        <Link href={`/browse/hotsauce-brands`}>Brands</Link>
        <Link href={`/browse/hotsauce-ingredients`}>Ingredients</Link>
        <Link href={`/browse/hotsauce-flavors`}>Flavors</Link>
        <Link href={`/browse/hotsauce-bayscore`}>Bayscore</Link>
        <Link href={`/browse/hotsauce-hsu`}>Scoville</Link>
      </div>
  );
}
