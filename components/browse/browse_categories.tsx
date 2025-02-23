import { Link } from "@heroui/link"


export default function Categories () {


  return (
    <div className="flex flex-row gap-4" >
      <Link href={`/browse/countries`} >Countries</Link>
      <Link href={`/browse/brand`} >Brand</Link>
      <Link href={`/browse/bayscore`} >Bayscore</Link>
      <Link href={`/browse/hsu`} >Scoville</Link>
    </div>
  )
}