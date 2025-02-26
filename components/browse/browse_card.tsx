import Link from "next/link"

export default function BrowseCard(title, icon, url) {


  return(
    <div className="border-2 border-gray-500">
      <Link className="text-2xl" href={url} >{title}</Link>
    </div>
  )
}