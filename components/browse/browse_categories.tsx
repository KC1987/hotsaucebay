import { Link } from "@heroui/link"


export default function Categories () {


  return (
    <div className="flex flex-row p-2 gap-4" >
      <Link href={`/browse/hotsauce-countries`} >Countries</Link>
      <Link href={`/browse/hotsauce-brands`} >Brands</Link>
      <Link href={`/browse/hotsauce-bayscore`} >Bayscore</Link>
      <Link href={`/browse/hotsauce-hsu`} >Scoville</Link>
    </div>
  )
}