import { countries } from "@/app/lib/data";
import { Link } from "@heroui/link";

export default async function Page() {
  return (
    <div>
      <h1 className="text-xl">Countries</h1>
      {countries.map((c) => (
        <div key={c.key}>
          <Link href={`/hotsauce-country/${c.key}`}>{c.label}</Link>
        </div>
      ))}
    </div>
  );
}
