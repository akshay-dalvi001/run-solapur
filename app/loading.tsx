import Image from "next/image";

export default function Loading() {
  return (
    <main
      className="grid min-h-screen place-items-center bg-white px-6"
      aria-label="Loading Run Solapur event page"
    >
      <div className="text-center">
        <div className="relative mx-auto size-20 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
          <Image
            src="/challenger-logo.svg"
            alt="Challenger Runners Group Solapur logo"
            fill
            priority
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="mx-auto mt-6 w-52 text-teal-700">
          <svg
            className="running-vector"
            viewBox="0 0 208 72"
            fill="none"
            role="img"
            aria-label="Lightweight animated runner"
          >
            <path className="track-line" d="M16 58H192" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <g className="runner-mark">
              <circle cx="82" cy="16" r="6" fill="currentColor" />
              <path d="M80 25L74 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path className="runner-arm-front" d="M78 28L62 35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path className="runner-arm-back" d="M83 28L98 34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path className="runner-leg-front" d="M74 40L57 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <path className="runner-leg-back" d="M75 40L98 54" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </g>
          </svg>
        </div>
        <div className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
          Run Solapur
        </div>
        <p className="mt-3 text-sm text-slate-600">Loading the event story...</p>
      </div>
    </main>
  );
}
