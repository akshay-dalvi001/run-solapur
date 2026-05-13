"use client";

import { useEffect, useId, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

type ContactEngagementProps = {
  phone: string;
  whatsappNumber: string;
};

export function ContactEngagement({ phone, whatsappNumber }: ContactEngagementProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const message =
    "Hello Challenger Sports Foundation, I would like to know more about Run Solapur.";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const telHref = `tel:${phone.replace(/\s/g, "")}`;

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat on WhatsApp at ${phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-teal-800"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50"
        >
          <Phone aria-hidden="true" className="size-4" />
          Contact
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/45 px-4 py-4 backdrop-blur-sm sm:items-center"
          role="presentation"
          onMouseDown={() => setIsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="w-full max-w-lg rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                  Support
                </p>
                <h2 id={titleId} className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  Contact Challenger Sports Foundation
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close contact dialog"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <p id={descriptionId} className="mt-4 text-sm leading-7 text-slate-600">
              For runner support, sponsor interest, media queries, or event information,
              contact the foundation directly.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Phone / WhatsApp
              </p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-slate-950">{phone}</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Message on WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <Phone aria-hidden="true" className="size-4" />
                Call Now
              </a>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
