import { brands } from "@/app/lib/data";

import { Link } from "@heroui/link";

export default async function Page() {
  return (
    <div>
      <h1 className="text-2xl">Hotsauce Brands</h1>
      {brands.map((b) => (
        <div key={b.key}>
          <Link href={`/hotsauce-brand/${b.key}`}>{b.label}</Link>
        </div>
      ))}
    </div>
  );
}
