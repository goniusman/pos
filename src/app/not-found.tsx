import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen space-y-5">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="text-2xl">Page not found</h2>
      <Link href="/">Go back home</Link>
    </section>
  );
}
