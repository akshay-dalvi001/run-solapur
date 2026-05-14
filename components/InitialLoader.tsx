"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] grid place-items-center bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading Run Solapur"
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
    </div>
  );
}
