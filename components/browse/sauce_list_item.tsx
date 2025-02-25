import { Button } from "@heroui/button";

export default function ListItem({ sauce }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-all hover:shadow-md">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image and basic details */}
        <div className="flex-shrink-0">
          {sauce.imageUrls?.[0] ? (
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden">
              <img
                src={sauce.imageUrls[0]}
                alt={sauce.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500 text-xs">No image</span>
            </div>
          )}
        </div>

        {/* Sauce details */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{sauce.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{sauce.brand.label}</p>
            </div>
            <div className="flex flex-col sm:items-end">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Heat:</span>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                  {sauce.shu?.toLocaleString()} SHU
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Score:</span>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                  {sauce.bayscore}/10
                </span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-2">
            <div className="flex flex-wrap gap-1.5">
              {sauce.countries?.map((country) => (
                <span
                  key={country.key}
                  className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                >
                  {country.label}
                </span>
              ))}
              {sauce.categories?.map((category) => (
                <span
                  key={category.key}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                >
                  {category.label}
                </span>
              ))}
              {sauce.ingredients?.slice(0, 3).map((ingredient) => (
                <span
                  key={ingredient.key}
                  className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-xs"
                >
                  {ingredient.label}
                </span>
              ))}
              {sauce.ingredients?.length > 3 && (
                <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-xs">
                  +{sauce.ingredients.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-row sm:flex-col gap-2 mt-3 sm:mt-0 justify-end sm:justify-center">
          <Button
            href={`/hotsauce/${sauce.slug}`}
            className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Details
          </Button>
          <Button
            href={sauce.affLink}
            className="px-3 py-1.5 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}