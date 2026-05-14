import Image from "next/image";

export default function Loading() {
  return (
    <main
      className="grid min-h-screen place-items-center bg-white px-6"
      aria-label="Loading Run Solapur event page"
    >
      <div className="text-center">
        <Image
          src="/loader.gif"
          alt="Loading Run Solapur"
          width={132}
          height={132}
          priority
          unoptimized
          className="mx-auto"
        />
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-700">
          Run Solapur
        </p>
      </div>
    </main>
  );
}
