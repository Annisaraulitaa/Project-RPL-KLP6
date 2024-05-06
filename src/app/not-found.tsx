import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center py-40">
        <h2 className="mb-4 text-4xl font-bold">Not Found</h2>
        <h2 className="mb-4 text-6xl font-bold">404</h2>
        <p className="mb-8 text-lg">Could not find the requested resource</p>
        <Link href="/" className="text-blue-500">
          Return Home
        </Link>
      </div>
    </>
  );
}
