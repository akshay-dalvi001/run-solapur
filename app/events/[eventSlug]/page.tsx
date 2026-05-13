import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ContactEngagement } from "@/components/ContactEngagement";
import { akkalkotEvent, allEvents, siteUrl, type AkkalkotEventData } from "@/lib/events";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  HeartPulse,
  IndianRupee,
  MapPin,
  Medal,
  MessageCircle,
  Music,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

type PageProps = {
  params: Promise<{ eventSlug: string }>;
};

function getEvent(slug: string) {
  return allEvents.find((event) => event.slug === slug);
}

export function generateStaticParams() {
  return allEvents.map((event) => ({ eventSlug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { eventSlug } = await params;
  const event = getEvent(eventSlug) ?? akkalkotEvent;
  const canonical = `${siteUrl}${event.canonicalPath}`;

  return {
    title: `${event.name} | Register Now`,
    description: event.description,
    keywords: [...event.keywords],
    alternates: { canonical },
    openGraph: {
      title: event.name,
      description: event.description,
      url: canonical,
      siteName: "Run Solapur",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: event.banner.src,
          width: 1200,
          height: 630,
          alt: event.banner.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.name,
      description: event.description,
      images: [event.banner.src],
    },
  };
}

export default async function EventPage({ params }: PageProps) {
  const { eventSlug } = await params;
  const event = getEvent(eventSlug);

  if (!event) {
    redirect("/");
  }

  const jsonLd = buildJsonLd(event);

  return (
    <>
      <div className="page-wipe" aria-hidden="true" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventHeader event={event} />
      <main>
        <EventHero event={event} />
        <RaceCategories event={event} />
        <Entitlements event={event} />
        <WhyRegister event={event} />
        <TrustAndContact event={event} />
      </main>
      <ContactEngagement phone={event.supportPhone} whatsappNumber={event.whatsappNumber} />
    </>
  );
}

function EventHeader({ event }: { event: AkkalkotEventData }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-800 shadow-sm transition hover:border-teal-300 hover:bg-teal-50"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Foundation
        </Link>
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-teal-800"
        >
          Register Now
          <ChevronRight aria-hidden="true" className="size-4" />
        </a>
      </nav>
    </header>
  );
}

function EventHero({ event }: { event: AkkalkotEventData }) {
  return (
    <section id="top" className="hero-parallax relative min-h-[88vh] overflow-hidden bg-slate-950 text-white">
      <Image
        src={event.banner.src}
        alt={event.banner.alt}
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/65 to-slate-950/10" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 py-14 sm:px-6 lg:px-8">
        <div className="hero-copy max-w-3xl pb-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-sm font-bold backdrop-blur">
            <Sparkles aria-hidden="true" className="size-4 text-orange-200" />
            {event.theme}
          </p>
          <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">
            {event.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86">
            This is not just a run – it’s a Bhakti Run connecting fitness with spirituality.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-orange-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Register for Event
              <Medal aria-hidden="true" className="size-4" />
            </a>
            <a
              href={`https://wa.me/${event.whatsappNumber}?text=${encodeURIComponent(
                `Hello Challenger Sports Foundation, I need details for ${event.name}.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-6 py-3 text-sm font-bold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/18"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp Support
            </a>
          </div>
          <dl className="mt-9 grid gap-3 sm:grid-cols-3">
            <HeroFact icon={CalendarDays} label="Date" value={event.date} />
            <HeroFact icon={Clock} label="Time" value={event.time} />
            <HeroFact icon={MapPin} label="Location" value="Akkalkot" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function HeroFact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/14 bg-white/12 p-4 backdrop-blur">
      <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/62">
        <Icon aria-hidden="true" className="size-4" />
        {label}
      </dt>
      <dd className="mt-2 text-sm font-bold text-white">{value}</dd>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function RaceCategories({ event }: { event: AkkalkotEventData }) {
  return (
    <Section eyebrow="Race Categories" title="Choose your distance and report one hour early.">
      <div className="grid gap-4 lg:grid-cols-3">
        {event.categories.map((category) => (
          <article key={category.distance} className="clay-card rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-900/10">
            <p className="text-5xl font-black tracking-tight text-slate-950">{category.distance}</p>
            <dl className="mt-6 space-y-4">
              <InfoRow icon={Clock} label="Flag-off" value={category.flagOff} />
              <InfoRow icon={IndianRupee} label="Registration" value={category.fee} />
              <InfoRow icon={Users} label="Age" value={category.age} />
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm font-bold text-orange-800">
        Important: All runners must report at least 1 hour before their race start time. GST & payment gateway charges extra.
      </p>
    </Section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-full bg-teal-50 text-teal-700">
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <div>
        <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</dt>
        <dd className="text-sm font-bold text-slate-950">{value}</dd>
      </div>
    </div>
  );
}

function Entitlements({ event }: { event: AkkalkotEventData }) {
  return (
    <Section eyebrow="Runner Entitlements" title="Every registered participant receives a complete event experience.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {event.entitlements.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-teal-700" />
            <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhyRegister({ event }: { event: AkkalkotEventData }) {
  return (
    <section className="border-y border-slate-200 bg-white py-14 sm:py-18">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="rounded-[2rem] border border-teal-200 bg-teal-50 p-7">
          <HeartPulse aria-hidden="true" className="size-9 text-teal-700" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
            Why register for Akkalkot 10K?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Fitness, spirituality, darshan, village surroundings, wide roads, and a professional race setup close to Solapur.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {event.whyRegister.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-teal-700" />
                <span>{item}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustAndContact({ event }: { event: AkkalkotEventData }) {
  return (
    <Section eyebrow="Race Trust" title="Organised with experience, safety, and clear runner support.">
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <ShieldCheck aria-hidden="true" className="size-8 text-teal-700" />
          <h3 className="mt-5 text-2xl font-bold text-slate-950">What we provide</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {event.provisions.map((item) => (
              <p key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                <Check aria-hidden="true" className="size-4 shrink-0 text-teal-700" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="flex items-center gap-2 font-bold text-slate-950">
              <Trophy aria-hidden="true" className="size-5 text-orange-700" />
              Prizes & Felicitation
            </h4>
            <ul className="mt-3 space-y-2">
              {event.prizes.map((item) => (
                <li key={item} className="text-sm font-semibold text-slate-700">{item}</li>
              ))}
            </ul>
          </div>
        </article>
        <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <Music aria-hidden="true" className="size-8 text-orange-300" />
          <h3 className="mt-5 text-2xl font-bold">About the organisers</h3>
          <p className="mt-4 text-sm leading-7 text-slate-200">{event.organiserNote}</p>
          <p className="mt-5 text-sm font-semibold text-slate-300">Title Sponsor</p>
          <p className="mt-1 text-lg font-bold text-white">{event.titleSponsor}</p>
          <div className="mt-6 grid gap-3">
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-slate-950 transition duration-200 hover:bg-orange-400"
            >
              Register Now
              <Medal aria-hidden="true" className="size-4" />
            </a>
            <a
              href={`tel:${event.supportPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-white/12"
            >
              <Phone aria-hidden="true" className="size-4" />
              {event.supportPhone}
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function buildJsonLd(event: AkkalkotEventData) {
  const canonical = `${siteUrl}${event.canonicalPath}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      name: event.name,
      description: event.description,
      url: canonical,
      startDate: "2026-07-26T05:30:00+05:30",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      image: `${siteUrl}${event.banner.src}`,
      location: {
        "@type": "Place",
        name: "Akkalkot",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Akkalkot",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      organizer: {
        "@type": "Organization",
        name: event.organization,
        url: siteUrl,
      },
      offers: {
        "@type": "Offer",
        url: event.registrationUrl,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: event.name, item: canonical },
      ],
    },
  ];
}
