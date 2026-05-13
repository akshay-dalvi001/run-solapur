import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <section className="max-w-lg rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          Run Solapur
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
          Event page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The requested page is not live yet. You can continue to the Challenger
          Sports Foundation website.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          Go to homepage
        </Link>
      </section>
    </main>
  );
}
