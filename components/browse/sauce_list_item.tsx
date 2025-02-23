
import { Button } from "@heroui/button"
import { Divider } from "@heroui/react"

export default function ListItem ({ sauce }:any) {


  return (
    <div className="bg-slate-700 flex flex-row p-4 gap-4" >

        <p>{ sauce.name }</p>
        <p>{ sauce.brand }</p>
        <p>{ sauce.shu }</p>
        <p>{ sauce.bayscore }</p>
        { sauce.categories?.map( (c:any) => <p key={c.key} >{ c.label }</p> ) }
        { sauce.countries?.map( (c:any) => <p key={c.key} >{ c.label }</p> ) }
        { sauce.ingredients?.map( (i:any) => <p key={i.key} >{ i.label }</p> ) }

        <Button><a href={`/hotsauce/${sauce.slug}`} >Details</a></Button>
        <Button><a href={sauce.affLink} >Buy</a></Button>

    </div>
  )
}