import { Button } from "@heroui/button";
import Link from "next/link";

export default function ListItem({ sauce }) {
  return (
    <div className="my-2 bg-[#FFFFFF] dark:bg-[#1E1E1E] rounded-lg shadow-sm border border-[#99823d] dark:border-[#bbae66] p-4 transition-all hover:shadow-md">
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
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#FFF8F0] dark:bg-[#121212] rounded-md flex items-center justify-center">
              <span className="text-[#457B9D] dark:text-[#B0BEC5] text-xs">No image</span>
            </div>
          )}
        </div>

        {/* Sauce details */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-[#1D3557] dark:text-[#F5F5F5]">{sauce.name}</h3>
              <p className="text-sm text-[#457B9D] dark:text-[#B0BEC5]">{sauce.brand.label}</p>
            </div>
            <div className="flex flex-col sm:items-end">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-[#457B9D] dark:text-[#B0BEC5]">Heat:</span>
                <span className="text-sm font-bold text-[#E63946] dark:text-[#FF5252]">
                  {sauce.shu?.toLocaleString()} SHU
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-[#457B9D] dark:text-[#B0BEC5]">Score:</span>
                <span className="text-sm font-bold text-[#F9A03F] dark:text-[#FFB74D]">
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
                  className="px-2 py-0.5 bg-[#3D9970] dark:bg-[#66BB6A] text-white dark:text-[#1E1E1E] rounded-full text-xs"
                >
                  {country.label}
                </span>
              ))}
              {sauce.categories?.map((category) => (
                <span
                  key={category.key}
                  className="px-2 py-0.5 bg-[#F9A03F] dark:bg-[#FFB74D] text-[#1D3557] dark:text-[#1E1E1E] rounded-full text-xs"
                >
                  {category.label}
                </span>
              ))}
              {sauce.ingredients?.slice(0, 3).map((ingredient) => (
                <span
                  key={ingredient.key}
                  className="px-2 py-0.5 bg-[#2ECC40] dark:bg-[#00E676] text-white dark:text-[#1E1E1E] rounded-full text-xs"
                >
                  {ingredient.label}
                </span>
              ))}
              {sauce.ingredients?.length > 3 && (
                <span className="px-2 py-0.5 bg-[#2ECC40] dark:bg-[#00E676] text-white dark:text-[#1E1E1E] rounded-full text-xs">
                  +{sauce.ingredients.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-row sm:flex-col gap-2 mt-3 sm:mt-0 justify-end sm:justify-center">
          <Button
            className="px-3 py-1.5 text-sm bg-[#3D9970] hover:bg-[#2ECC40] dark:bg-[#66BB6A] dark:hover:bg-[#00E676] text-white dark:text-[#1E1E1E] rounded-md transition-colors"
          >
            <Link href={`/hotsauce/${sauce.slug}`}>Details</Link>
          </Button>
          <Button
            className="px-3 py-1.5 text-sm bg-[#E63946] hover:bg-[#FF4136] dark:bg-[#FF5252] dark:hover:bg-[#FF1744] text-white rounded-md transition-colors"
          >
            <Link href={sauce.affLink}>Buy Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}