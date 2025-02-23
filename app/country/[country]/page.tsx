


export default async function Page ({ params }:any) {
  const { country } = await params;

  return (
    <div>
      <h1 className="text-2xl" >{ country }</h1>
    </div>
  )
}