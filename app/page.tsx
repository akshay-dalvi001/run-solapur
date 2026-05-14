import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactEngagement } from "@/components/ContactEngagement";
import {
  Activity,
  ArrowDown,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDot,
  ExternalLink,
  Facebook,
  Flame,
  Flag,
  HeartPulse,
  Instagram,
  Landmark,
  MapPin,
  Medal,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Video,
  Youtube,
} from "lucide-react";
import { primaryEvent, siteUrl, type EventPageData } from "@/lib/events";

const iconMap = {
  Instagram,
  YouTube: Youtube,
  Facebook,
};

const factCardStyles = [
  "border-lime-200 bg-lime-50",
  "border-teal-200 bg-teal-50",
  "border-orange-200 bg-orange-50",
  "border-sky-200 bg-sky-50",
];

export const metadata: Metadata = {
  title: "Run Solapur | Challenger Sports Foundation",
  description:
    "Official website for Challenger Sports Foundation, Solapur marathon initiatives, Run for Nation activities, and upcoming running events.",
  keywords: [...primaryEvent.keywords],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Run Solapur | Challenger Sports Foundation",
    description: primaryEvent.description,
    url: siteUrl,
    siteName: "Run Solapur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: primaryEvent.images.hero.src,
        width: 480,
        height: 360,
        alt: primaryEvent.images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Run Solapur | Challenger Sports Foundation",
    description: primaryEvent.description,
    images: [primaryEvent.images.hero.src],
  },
};

export default function HomePage() {
  const event = primaryEvent;
  const canonical = `${siteUrl}${event.canonicalPath}`;
  const jsonLd = buildJsonLd(event);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header event={event} />
      <main>
        <Hero event={event} />
        <UpcomingEvent event={event} />
        <Foundation event={event} />
        <Milestones event={event} />
        <WorldRecord event={event} />
        <Leadership event={event} />
        <Safety event={event} />
        <Initiatives event={event} />
        <SocialActivity event={event} />
        <MarathonAndSolapur event={event} />
        <Objectives event={event} />
        <Sponsors event={event} />
        <SocialFooter event={event} />
      </main>
      <ContactEngagement
        phone={event.supportPhone}
        whatsappNumber={event.whatsappNumber}
        secondaryPhone={event.secondaryPhone}
        secondaryWhatsappNumber={event.secondaryWhatsappNumber}
        secondaryContactName={event.secondaryContactName}
      />
    </>
  );
}

function Header({ event }: { event: EventPageData }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link
          href={event.canonicalPath}
          className="group flex items-center gap-3 rounded-full py-1 pr-3 transition hover:bg-slate-50"
          aria-label="Run Solapur home"
        >
          <span className="relative grid size-12 place-items-center border border-slate-200 bg-white shadow-sm">
            <Image
              src="/logo.jpg"
              alt="Challenger Runners Group Solapur logo"
              width={44}
              height={44}
              sizes="48px"
              className="object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-2xl sm:text-sm font-bold tracking-tight text-slate-950">
              Run Solapur
            </span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Challenger Sports Foundation
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm md:flex">
          {event.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#sponsors"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-800"
        >
          Sponsor
          <ChevronRight aria-hidden="true" className="size-4" />
        </a>
      </nav>
    </header>
  );
}

function Hero({ event }: { event: EventPageData }) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="pointer-events-none absolute -right-20 top-24 z-0 opacity-20 grayscale mix-blend-multiply sm:-right-24 md:-top-10 lg:-right-10">
        <Image
          src="/logo.jpg"
          alt=""
          width={800}
          height={800}
          className="h-auto w-[300px] object-contain sm:w-[500px] lg:w-[800px]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="relative z-10 reveal">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-200 bg-gradient-to-r from-teal-50 to-white px-4 py-2 text-sm font-bold text-teal-900 shadow-sm ring-1 ring-inset ring-teal-500/10">
            <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-inner">
              <Flag aria-hidden="true" className="size-3" />
            </div>
            <span className="tracking-wide">{event.hero.eyebrow}</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {event.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            {event.hero.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {event.hero.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#milestones"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-800 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-900/30"
            >
              Explore Event Story
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
            <a
              href={`https://wa.me/${event.whatsappNumber}?text=${encodeURIComponent(
                "Hello Challenger Sports Foundation, I am interested in sponsorship for Run Solapur.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white/80 px-8 py-4 text-sm font-bold text-slate-900 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md"
            >
              Become a Sponsor
              <Medal aria-hidden="true" className="size-4" />
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {event.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`rounded-2xl border p-3 shadow-sm sm:p-4 ${factCardStyles[index % factCardStyles.length]}`}
              >
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-600 sm:text-xs sm:tracking-[0.16em]">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-base font-black text-slate-950 sm:text-lg">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroVisual event={event} />
      </div>
    </section>
  );
}

function UpcomingEvent({ event }: { event: EventPageData }) {
  const featured = event.featuredEvent;

  return (
    <section className="relative overflow-hidden border-y border-orange-200 bg-gradient-to-br from-orange-50 via-lime-50 to-teal-50 py-12">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href={featured.href}
          className="clay-card group relative grid overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-xl shadow-orange-900/8 ring-1 ring-white/70 transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-900/10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-72 overflow-hidden bg-slate-100">
            <Image
              src={featured.image}
              alt={`${featured.title} banner`}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="relative p-6 sm:p-8">
            <div className="mb-4 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white shadow-sm">
              Registration Open
            </div>
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-bold text-teal-800">
              <Flag aria-hidden="true" className="size-4" />
              Upcoming Event
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-base font-semibold text-orange-700">{featured.theme}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{featured.summary}</p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Date
                </dt>
                <dd className="mt-1 font-bold text-slate-950">{featured.date}</dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Time
                </dt>
                <dd className="mt-1 font-bold text-slate-950">{featured.time}</dd>
              </div>
            </dl>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-orange-900/15 transition group-hover:bg-teal-700 group-hover:text-white">
              Register / View Details
              <ChevronRight aria-hidden="true" className="size-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function SocialActivity({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="activity"
      eyebrow="Social Activity"
      title="Watch the foundation’s running activity across social media."
      intro="A compact media section gives visitors a quicker feel for the foundation’s real-world activity, while keeping Instagram, YouTube, and Facebook easy to open."
    >
      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="aspect-video bg-slate-950">
            <iframe
              className="size-full"
              src={event.socialPosts[0].embedUrl}
              title="Challenger Sports Foundation activity video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                Featured Video
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-950">
                {event.socialPosts[0].title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {event.socialPosts[0].body}
              </p>
            </div>
            <a
              href={event.socialPosts[0].href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
            >
              Watch on YouTube
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          </div>
        </article>
        <div className="grid gap-4">
          {event.socialPosts.slice(1).map((post) => {
            const Icon = iconMap[post.platform as keyof typeof iconMap] ?? Video;
            return (
              <article
                key={post.platform}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-full bg-teal-50 text-teal-700">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open Challenger Sports Foundation on ${post.platform}`}
                    className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                  >
                    <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {post.platform}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-950">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.body}</p>
              </article>
            );
          })}
          <article className="rounded-[1.5rem] border border-teal-200 bg-teal-50 p-5 shadow-sm">
            <MessageCircle aria-hidden="true" className="size-6 text-teal-700" />
            <h3 className="mt-4 text-lg font-bold text-slate-950">Need event support?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Contact or WhatsApp the foundation at{" "}
              <a className="font-bold text-teal-800 hover:underline" href={`tel:${event.supportPhone.replace(/\s/g, "")}`}>
                {event.supportPhone}
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}

function HeroVisual({ event }: { event: EventPageData }) {
  return (
    <div
      className="relative z-10 reveal reveal-delay overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-xl shadow-slate-200/80"
      aria-label="Featured social media image from Challenger Sports Foundation"
    >
      <div className="relative aspect-[4/5] min-h-[32rem] lg:aspect-auto lg:h-full">
        <Image
          src={event.images.hero.src}
          alt={event.images.hero.alt}
          fill
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-white/92 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-900 shadow-sm">
              Challenger Video
          </span>
          <a
            href="https://youtu.be/qwz0QXOUV2w?si=iuZkeh77KxuB-8gr"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch Challenger Sports Foundation video on YouTube"
            className="grid size-11 place-items-center rounded-full bg-white text-slate-950 shadow-sm transition hover:scale-105"
          >
            <Play aria-hidden="true" className="size-5 fill-current" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <div className="rounded-[1.5rem] border border-white/18 bg-white/92 p-5 text-slate-950 shadow-lg backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                  Freedom Route
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight">75 → 76</p>
              </div>
              <span className="grid size-13 place-items-center rounded-2xl bg-orange-50 text-orange-700">
                <Flame aria-hidden="true" className="size-7" />
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Watch the foundation’s shared running story and follow the energy of
              Solapur’s growing endurance community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  const sectionBackgrounds: Record<string, string> = {
    story: "bg-white",
    milestones: "bg-gradient-to-br from-sky-50 via-white to-lime-50",
    leadership: "bg-gradient-to-br from-white via-teal-50 to-white",
    safety: "bg-gradient-to-br from-lime-50 via-white to-orange-50",
    initiatives: "bg-gradient-to-br from-orange-50 via-white to-sky-50",
    activity: "bg-gradient-to-br from-slate-50 via-white to-teal-50",
    solapur: "bg-gradient-to-br from-teal-50 via-white to-lime-50",
    objectives: "bg-gradient-to-br from-white via-sky-50 to-orange-50",
  };

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-y border-white/70 py-12 ${sectionBackgrounds[id] ?? "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {intro ? <p className="mt-4 text-base leading-7 text-slate-600">{intro}</p> : null}
        </div>
        <div className="reveal reveal-delay mt-8">{children}</div>
      </div>
    </section>
  );
}

function Foundation({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="story"
      eyebrow="Foundation Introduction"
      title="A sports foundation built from a national tribute."
    >
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-teal-700 p-6 text-white shadow-sm">
          <Landmark aria-hidden="true" className="size-9" />
          <h3 className="mt-8 text-2xl font-bold">Challenger Sports Foundation</h3>
          <p className="mt-3 text-sm leading-6 text-teal-50">
            Promoting health, discipline, fitness and endurance sports through organized
            running culture in Solapur.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {event.intro.map((paragraph, index) => (
            <article
              key={paragraph}
              className={`rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm ${
                index === 0
                  ? "col-span-2 flex flex-col items-center text-center sm:col-span-1 sm:items-start sm:text-left"
                  : "col-span-1"
              }`}
            >
              <span className="grid size-9 place-items-center rounded-full bg-slate-100 text-sm font-bold text-slate-800">
                {index + 1}
              </span>
              <p className="mt-5 text-sm leading-7 text-slate-600">{paragraph}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Milestones({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="milestones"
      eyebrow="Flagship Timeline"
      title="The annual freedom-number running initiative."
      intro="Major activities are organized chronologically so sponsors, runners, media, and civic partners can understand the foundation’s progression quickly."
    >
      <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {event.milestones.map((milestone) => (
          <article
            key={milestone.year}
            className={`w-[42vw] min-w-[160px] shrink-0 rounded-[1.5rem] border p-5 shadow-sm sm:w-[240px] lg:w-auto lg:shrink-0 ${
              "featured" in milestone && milestone.featured
                ? "border-teal-300 bg-teal-50 shadow-teal-100/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-3xl font-bold tracking-tight text-slate-950">
                {milestone.year}
              </span>
              {"featured" in milestone && milestone.featured ? (
                <BadgeCheck aria-label="Featured world record milestone" className="size-6 text-teal-700" />
              ) : (
                <CircleDot aria-hidden="true" className="size-5 text-slate-400" />
              )}
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              {milestone.date}
            </p>
            <h3 className="mt-2 text-lg font-bold text-slate-950">{milestone.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{milestone.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function WorldRecord({ event }: { event: EventPageData }) {
  return (
    <section className="border-y border-orange-200 bg-gradient-to-br from-orange-50 via-white to-lime-50 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="reveal rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-orange-800 shadow-sm">
            <Trophy aria-hidden="true" className="size-4" />
            {event.worldRecord.label}
          </p>
          <p className="mt-8 text-7xl font-black tracking-tight text-orange-700 sm:text-8xl">
            76
          </p>
          <p className="mt-2 text-lg font-bold text-slate-950">Kilometer tribute run</p>
        </div>
        <div className="reveal reveal-delay flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {event.worldRecord.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">{event.worldRecord.body}</p>
          <p className="mt-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-base leading-8 text-slate-700">
            {event.worldRecord.note}
          </p>
        </div>
      </div>
    </section>
  );
}

function Leadership({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="leadership"
      eyebrow="Leadership & Recognition"
      title="Experienced runners guiding a growing running community."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {event.leaders.map((leader) => (
          <article
            key={leader.name}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <Users aria-hidden="true" className="size-7 text-teal-700" />
            <h3 className="mt-5 text-xl font-bold text-slate-950">{leader.name}</h3>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
              {leader.role}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{leader.body}</p>
          </article>
        ))}
        <article className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <Medal aria-hidden="true" className="size-7 text-orange-300" />
          <h3 className="mt-5 text-xl font-bold">10 years of consistent running</h3>
          <p className="mt-4 text-sm leading-7 text-slate-200">{event.leadershipNote}</p>
        </article>
      </div>
      <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
          <ShieldCheck aria-hidden="true" className="size-5 text-teal-700" />
          Participation of IPS & IAS Officers
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{event.officers}</p>
      </div>
    </SectionShell>
  );
}

function Safety({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="safety"
      eyebrow="Safety & Regulations"
      title="A disciplined event ecosystem for runner confidence."
      intro="The event is conducted as per standard guidelines and safety protocols, with practical support systems planned around runner safety and smooth race completion."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {event.safety.map((item) => (
          <div
            key={item}
            className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
              <Check aria-hidden="true" className="size-4" />
            </span>
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Initiatives({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="initiatives"
      eyebrow="Other Initiatives"
      title="More than a race: a continuing health and awareness platform."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {event.initiatives.map((item) => (
          <article
            key={item}
            className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange-50 text-orange-700">
              <Sparkles aria-hidden="true" className="size-5" />
            </span>
            <h3 className="mt-2 text-base font-bold leading-6 text-slate-950">{item}</h3>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function MarathonAndSolapur({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="solapur"
      eyebrow="Why Marathon, Why Solapur"
      title="A growing endurance movement with a strong city advantage."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {event.whyMarathon.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <HeartPulse aria-hidden="true" className="size-7 text-teal-700" />
            <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
        <article className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-950">
            <Activity aria-hidden="true" className="size-5 text-orange-700" />
            Marathon trend in India
          </h3>
          <ul className="mt-5 space-y-3">
            {event.indiaTrend.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-teal-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-950">
            <MapPin aria-hidden="true" className="size-5 text-teal-700" />
            Solapur supportive environment
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {event.solapur.map((item) => (
              <p key={item} className="flex gap-4 rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 text-sm font-semibold text-slate-700">
                <Check aria-hidden="true" className="size-5 shrink-0 text-teal-700" />
                {item}
              </p>
            ))}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}

function Objectives({ event }: { event: EventPageData }) {
  return (
    <SectionShell
      id="objectives"
      eyebrow="Objectives"
      title="Clear goals for event standards, youth guidance, and community participation."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {event.objectives.map((objective) => (
          <div
            key={objective}
            className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
              <Check aria-hidden="true" className="size-4" />
            </span>
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{objective}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Sponsors({ event }: { event: EventPageData }) {
  return (
    <section id="sponsors" className="scroll-mt-24 bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300">
              Sponsor Benefits
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Brand value with community goodwill and civic visibility.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A premium sponsor section built for businesses, civic partners, and media
              stakeholders evaluating the value of supporting a running event in Solapur.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`https://wa.me/${event.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Challenger Sports Foundation, I am interested in sponsoring Run Solapur.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-400"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Discuss Sponsorship
              </a>
              <a
                href={`tel:${event.supportPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/12"
              >
                <Phone aria-hidden="true" className="size-4" />
                {event.supportPhone}
              </a>
              <a
                href={`tel:${event.secondaryPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/12"
              >
                <Phone aria-hidden="true" className="size-4" />
                {event.secondaryPhone}
              </a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {event.sponsorBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-sm"
              >
                <p className="flex gap-3 text-sm font-semibold leading-6 text-slate-100">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-teal-300" />
                  <span>{benefit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialFooter({ event }: { event: EventPageData }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative grid size-14 place-items-center border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/logo.jpg"
                  alt="Challenger Runners Group Solapur logo"
                  width={52}
                  height={52}
                  sizes="56px"
                  className="object-contain"
                />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">
                Run Solapur
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Building Solapur as a recognized Marathon City.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Follow Challenger Sports Foundation for running initiatives, guidance
              programs, fitness awareness, and community updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {event.socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open Challenger Sports Foundation on ${link.label}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 grid gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
          <a
            href={`tel:${event.supportPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:border-teal-300 hover:bg-teal-50"
          >
            <Phone aria-hidden="true" className="size-4" />
            Call {event.supportPhone}
          </a>
          <a
            href={`https://wa.me/${event.whatsappNumber}?text=${encodeURIComponent(
              "Hello Challenger Sports Foundation, I would like support for Run Solapur.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp Support
          </a>
          <a
            href={`https://wa.me/${event.secondaryWhatsappNumber}?text=${encodeURIComponent(
              "Hello Chandrashekhar Gaikwad, I would like support for Run Solapur.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-300 bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-50 sm:col-span-2"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            {event.secondaryContactName}: {event.secondaryPhone}
          </a>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Challenger Sports Foundation. All rights reserved.</p>
          <a href="#top" className="font-semibold text-slate-700 hover:text-teal-700">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function buildJsonLd(event: EventPageData) {
  const canonical = `${siteUrl}${event.canonicalPath}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: event.organization,
      url: siteUrl,
      sameAs: event.socialLinks.map((link) => link.href),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Solapur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.name,
      description: event.description,
      url: canonical,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Solapur",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Solapur",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      organizer: {
        "@type": "Organization",
        name: event.organization,
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: event.name,
          item: canonical,
        },
      ],
    },
  ];
}
