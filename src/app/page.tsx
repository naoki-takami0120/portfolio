import Image from "next/image";
import { profile, projects, services, testimonials, techStack, history } from "@/data/profile";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Stack" },
  { href: "#history", label: "History" },
];

const contacts = [
  { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
  { label: "LinkedIn", href: profile.linkedin, text: profile.linkedin.replace("https://www.", "") },
  { label: "GitHub", href: profile.github, text: profile.github.replace("https://", "") },
];

const link = "text-harbour underline decoration-1 underline-offset-4 hover:text-harbour-deep hover:decoration-2";

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
      className="grid scroll-mt-6 gap-6 border-t border-line py-16 md:grid-cols-4 md:gap-10 md:py-24"
    >
      <h2 id={`${id}-title`} className="font-display text-2xl font-bold leading-tight font-stretch-expanded text-balance md:text-xl">
        {title}
      </h2>
      <div className="min-w-0 md:col-span-3">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only rounded-sm bg-cedar px-4 py-3 font-display font-semibold text-mist focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4"
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
            {profile.headline}
          </h1>

          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-16">
            <div className="max-w-prose md:col-span-2">
              <p className="text-xl leading-relaxed text-pretty">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block rounded-sm bg-harbour px-5 py-3 font-display font-semibold text-mist hover:bg-harbour-deep active:bg-cedar"
                >
                  Email Naoki
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
        <Section id="projects" title="Projects" isEmpty={projects.length === 0}>
          <div className="grid gap-16">
            {projects.map((p, i) => (
              <article key={p.title} aria-labelledby={`project-${i}`} className="grid gap-6">
                <div className="max-w-prose">
                  <h3 id={`project-${i}`} className="font-display text-2xl font-bold leading-tight font-stretch-semi-expanded text-balance">{p.title}</h3>
                  <p className="mt-1 text-lg italic text-slate text-pretty">{p.subtitle}</p>
                  <p className="mt-4 text-lg leading-relaxed text-pretty">{p.description}</p>
                  {p.image && (
                    <ul className="mt-4 list-disc pl-5 text-lg">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-4 text-slate text-pretty">
                    Built with <span translate="no">{p.skills.join(", ")}</span>
                  </p>
                </div>
                {/* Visually first; after the heading in the DOM so screen readers hear the title first. */}
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    width={1280}
                    height={720}
                    className="order-first aspect-video w-full rounded-sm bg-mist object-cover"
                  />
                ) : (
                  <ul aria-label={`${p.title} highlights`} className="order-first grid gap-1 rounded-sm bg-mist p-6 md:p-8">
                    {p.highlights.map((h) => (
                      <li key={h} className="font-display text-xl font-bold leading-snug font-stretch-semi-expanded text-balance md:text-2xl">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* What I can do */}
        <Section id="services" title="What I Can Do" isEmpty={services.length === 0}>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.title} className="border-t-2 border-cedar pt-4">
                <h3 className="font-display text-lg font-bold leading-snug text-balance">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-pretty">{s.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" title="Testimonials" isEmpty={testimonials.length === 0}>
          <div className="grid gap-12">
            {testimonials.map((t, i) => (
              <figure key={i} className="max-w-prose">
                <blockquote className="text-xl italic leading-relaxed text-pretty md:text-2xl">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-4">
                  <span aria-hidden="true" className="size-12 shrink-0 rounded-full bg-line" />
                  <span>
                    <span className="block font-display font-bold">{t.name}</span>
                    <span className="block text-slate">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
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
                      {pt}
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
              <li key={c.label}>
                <span className="block font-display text-sm text-slate">{c.label}</span>
                <a href={c.href} className={`break-all font-display text-xl font-bold md:text-2xl ${link}`}>
                  {c.text}
                </a>
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
