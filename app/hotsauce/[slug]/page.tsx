import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Button } from "@heroui/button";
// import { Image } from "@heroui/react";

// Types
interface Country {
  key: string;
  label: string;
}

interface Category {
  key: string;
  label: string;
}

interface Ingredient {
  key: string;
  label: string;
}

interface Brand {
  label: string;
}

interface HotSauce {
  name: string;
  slug: string;
  brand: Brand;
  description: string;
  shu: number;
  bayscore: number;
  imageUrls: string[];
  countries: Country[];
  categories: Category[];
  ingredients: Ingredient[];
  affLink: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Sauce({ params }: PageProps) {
  const { slug } = params;
  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where("slug", "==", slug), limit(1));
  const sauceData = await getDocs(q);
  const sauce = sauceData.docs.map((doc) => doc.data())[0] as HotSauce;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl p-8 mx-auto">
        {/* Product Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              {sauce.name}
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {sauce.brand.label}
              </p>
              <div className="flex gap-2">
                {sauce.countries?.map((country) => (
                  <span
                    key={country.key}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {country.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
              Heat Level
            </div>
            <div className="text-xl text-orange-600 dark:text-orange-400">
              {sauce.shu?.toLocaleString()} SHU
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Image */}
          <div className="col-span-1">
            {sauce.imageUrls?.[0] && (
              <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <a
                  href={sauce.imageUrls[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={sauce.imageUrls[0]}
                    alt={sauce.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Description
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {sauce.description}
              </p>
            </div>

            {/* Bay Score */}
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Bay Score
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {sauce.bayscore}
                </span>
                <span className="text-gray-600 dark:text-gray-400">/10</span>
              </div>
            </div>

            {/* Categories & Ingredients */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Categories
                </h2>
                <div className="flex flex-wrap gap-2">
                  {sauce.categories?.map((category) => (
                    <span
                      key={category.key}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {category.label}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Ingredients
                </h2>
                <div className="flex flex-wrap gap-2">
                  {sauce.ingredients?.map((ingredient) => (
                    <span
                      key={ingredient.key}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm"
                    >
                      {ingredient.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <div className="pt-4">
              <Button
                href={sauce.affLink}
                color="success"
                className="w-full py-3 text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
