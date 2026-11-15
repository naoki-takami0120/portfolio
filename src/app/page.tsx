import Image from "next/image";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { profile, projects, services, testimonials, techStack, history } from "@/data/profile";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Stack" },
  { href: "#history", label: "History" },
];

const contacts = [
  { label: "Email", Icon: Mail, href: `mailto:${profile.email}`, text: profile.email },
  { label: "LinkedIn", Icon: LinkedInIcon, href: profile.linkedin, text: profile.linkedin.replace("https://www.", "") },
  { label: "GitHub", Icon: GitHubIcon, href: profile.github, text: profile.github.replace("https://", "") },
];

const link = "text-harbour underline decoration-1 underline-offset-4 hover:text-harbour-deep hover:decoration-2";

// Entries still marked "(TODO)" in profile.ts stay in the data but are never shown to visitors.
const isDraft = (entry: object) =>
  Object.values(entry).some((v) =>
    typeof v === "string" ? v.includes("TODO") : Array.isArray(v) && v.some((x) => typeof x === "string" && x.includes("TODO")),
  );
// Drafts are visible in `npm run dev` (to preview the layout) but never in a production build.
const showDrafts = process.env.NODE_ENV === "development";
const shownProjects = projects.filter((p) => showDrafts || !isDraft(p));
const shownTestimonials = testimonials.filter((t) => showDrafts || !isDraft(t));

// "Jane van Doe" -> "JD"
const initials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
};

// Text wrapped in *asterisks* renders as <em>.
function withEmphasis(text: string) {
  return text.split(/\*([^*]+)\*/).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

// Shown on a project card until it has an image: two overlapping blocks in the site palette.
function ImagePlaceholder() {
  return (
    <svg viewBox="0 0 160 100" aria-hidden="true" className="absolute inset-0 size-full">
      <rect x="66" y="20" width="36" height="62" rx="2" className="fill-harbour/30" />
      <rect x="52" y="48" width="36" height="34" rx="2" className="fill-harbour/60" />
    </svg>
  );
}

// Keep hyphenated compounds ("high-traffic", "20-engineer") on one line.
function keepCompounds(text: string) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function Section({
  id,
  title,
  isEmpty = false,
  children,
}: {
  id: string;
  title: string;
  isEmpty?: boolean;
  children: React.ReactNode;
}) {
  // Don't render a heading with nothing under it if the data list is empty.
  if (isEmpty) return null;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-6 border-t border-line py-16 md:py-24"
    >
      <h2 id={`${id}-title`} className="mb-8 font-display text-2xl font-bold leading-tight font-stretch-expanded text-balance md:mb-10 md:text-3xl">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="absolute left-4 top-4 z-10 rounded-sm bg-cedar px-4 py-3 font-display font-semibold text-mist not-focus-visible:sr-only"
      >
        Skip to Content
      </a>
      <header id="top" className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-4 md:px-8">
          <a href="#top" translate="no" className="py-1 font-display text-lg font-bold font-stretch-semi-expanded hover:text-harbour">
            {profile.name}
          </a>
          <nav aria-label="Sections">
            <ul className="-mx-2 flex flex-wrap items-center font-display text-sm sm:text-base">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-block px-2 py-2 text-slate hover:text-cedar hover:underline hover:underline-offset-4">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className={`inline-block px-2 py-2 ${link}`}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Hero */}
        <section aria-labelledby="hero-title" className="pb-16 pt-12 md:pb-24 md:pt-24">
          <h1
            id="hero-title"
            className="max-w-5xl font-display text-4xl font-extrabold leading-none font-stretch-expanded text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {keepCompounds(profile.headline)}
          </h1>

          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-16">
            <div className="max-w-prose md:col-span-2">
              <p className="text-xl leading-relaxed text-pretty">{keepCompounds(profile.summary)}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block rounded-sm bg-harbour px-5 py-3 font-display font-semibold text-mist hover:bg-harbour-deep active:bg-cedar"
                >
                  Email Me
                </a>
                <a href="#projects" className={`py-3 font-display font-semibold ${link}`}>
                  See Projects
                </a>
              </div>
            </div>

            <dl className="grid content-start gap-5 border-l-2 border-cedar pl-5">
              {[
                ["Role", profile.role],
                ["Based in", profile.location],
                ["Work status", profile.status],
              ].map(([term, value]) => (
                <div key={term}>
                  <dt className="font-display text-sm text-slate">{term}</dt>
                  <dd className="mt-1 text-pretty">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Projects */}
        <Section id="projects" title="Projects" isEmpty={shownProjects.length === 0}>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shownProjects.map((p, i) => (
              <li key={p.title}>
                <article
                  aria-labelledby={`project-${i}`}
                  className="flex h-full flex-col overflow-hidden rounded-sm border border-line bg-mist"
                >
                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-2 text-sm text-slate">{p.period}</p>
                    <h3 id={`project-${i}`} className="font-display text-lg font-bold leading-snug text-balance">
                      {p.title}
                    </h3>
                    <p className="mt-1 italic text-slate text-pretty">{p.subtitle}</p>
                    <p className="mt-3 leading-relaxed text-pretty">{p.description}</p>
                    <ul aria-label="Skills" translate="no" className="mt-auto flex flex-wrap gap-2 pt-4">
                      {p.skills.map((s) => (
                        <li key={s} className="rounded-sm border border-line bg-fog px-2 py-0.5 font-display text-xs text-slate">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Visually first; after the heading in the DOM so screen readers hear the title first. */}
                  <div className="relative order-first aspect-16/10 border-b border-line bg-fog">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.imageAlt ?? ""}
                        fill
                        sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <ImagePlaceholder />
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Section>

        {/* What I can do */}
        <Section id="services" title="What I Can Do" isEmpty={services.length === 0}>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.title} className="border-t-2 border-cedar pt-4">
                <s.icon aria-hidden="true" strokeWidth={1.5} className="mb-3 size-7 text-cedar" />
                <h3 className="font-display text-lg font-bold leading-snug text-balance">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-pretty">{s.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" title="Testimonials" isEmpty={shownTestimonials.length === 0}>
          {/* Below lg: a row of cards you swipe through (CSS scroll-snap, no JavaScript, never moves on its own).
              From lg: a 3-column grid like Projects. */}
          <ul
            tabIndex={0}
            aria-label="Testimonials"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 md:-mx-8 md:scroll-px-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {shownTestimonials.map((t, i) => (
              <li key={i} className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-[45%] lg:w-auto">
                <figure className="flex h-full flex-col rounded-sm border border-line bg-mist p-6">
                  <blockquote className="text-lg leading-relaxed text-pretty">
                    <p>“{withEmphasis(t.quote)}”</p>
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-4 pt-6">
                    {t.photo ? (
                      <Image src={t.photo} alt="" width={48} height={48} className="size-12 shrink-0 rounded-full object-cover" />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cedar font-display text-sm font-bold text-mist"
                      >
                        {initials(t.name)}
                      </span>
                    )}
                    <span>
                      <span className="block font-display font-bold">
                        {t.linkedin ? (
                          <a href={t.linkedin} className={`${link} inline-flex items-center gap-1.5 py-1`}>
                            {t.name}
                            <LinkedInIcon className="size-4 shrink-0" />
                            <span className="sr-only"> on LinkedIn</span>
                          </a>
                        ) : (
                          t.name
                        )}
                      </span>
                      <span className="block text-slate">
                        {t.role} · Worked with me at {t.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>

        {/* Tech stack */}
        <Section id="skills" title="Languages & Technologies" isEmpty={techStack.length === 0}>
          <dl className="grid gap-8 sm:grid-cols-2">
            {techStack.map((c) => (
              <div key={c.category}>
                <dt className="font-display font-bold">{c.category}</dt>
                <dd translate="no" className="mt-2 text-lg leading-relaxed text-pretty">{c.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* History */}
        <Section id="history" title="History" isEmpty={history.length === 0}>
          <ol className="grid gap-10 border-l-2 border-line">
            {history.map((h) => (
              <li key={h.period + h.org} className="relative pl-6 md:flex md:gap-6">
                <span aria-hidden="true" className="absolute -left-1.5 top-2 size-3 rounded-full bg-cedar" />
                <p className="font-display text-sm font-semibold tabular-nums text-slate md:w-32 md:shrink-0 md:pt-1">{h.period}</p>
                <div className="mt-1 min-w-0 max-w-prose md:mt-0">
                  <h3 className="font-display text-lg font-bold leading-snug text-balance">{h.title}</h3>
                  <p className="text-slate text-pretty">
                    {h.org}, {h.place}
                  </p>
                  {h.points.map((pt) => (
                    <p key={pt} className="mt-2 leading-relaxed text-pretty">
                      {keepCompounds(pt)}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="max-w-prose text-xl leading-relaxed text-pretty">
            I’m looking for a backend engineer role in Vancouver. Feel free to reach out.
          </p>
          <ul className="mt-8 grid gap-6">
            {contacts.map((c) => (
              <li key={c.label} className="flex gap-3">
                <c.Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-cedar" />
                <div className="min-w-0">
                  <span className="block font-display text-sm text-slate">{c.label}</span>
                  <a href={c.href} className={`break-all font-display text-base font-semibold ${link}`}>
                    {c.text}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-8 text-slate md:px-8">
          © 2026 <span translate="no">{profile.name}</span>
        </p>
      </footer>
    </>
  );
}
