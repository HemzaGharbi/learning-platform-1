import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col px-20 py-6 justify-center items-center gap-6">
      <h2 className="text-2xl">Reviews Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="bg-amber-400 border-2" href="/">Return Home</Link>
    </div>
  );
}
