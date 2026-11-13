import Image from "next/image";
import { profile, projects, services, testimonials, techStack, history } from "@/data/profile";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-200 z-10">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-bold">{profile.name}</a>
          <div className="flex gap-6 text-sm">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#history">History</a>
            <a href="#contact" className="bg-gray-900 text-white px-3 py-1 rounded">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <section className="py-24">
          <p className="text-gray-500 mb-4">{profile.name} — {profile.location}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{profile.headline}</h1>
          <p className="text-lg text-gray-700 mb-4">{profile.summary}</p>
          <p className="text-gray-700 mb-8">{profile.status}</p>
          <a href="#contact" className="inline-block bg-gray-900 text-white px-6 py-3 rounded">
            Get in touch
          </a>
        </section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="space-y-12">
            {projects.map((p, i) => (
              <article key={i}>
                <div className="aspect-video bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400">
                  {p.image ? <Image src={p.image} alt={p.title} width={1280} height={720} className="w-full h-full object-cover rounded" /> : "Screenshot placeholder"}
                </div>
                <h3 className="text-xl font-bold">
                  {p.title} <span className="font-normal text-gray-500">— {p.subtitle}</span>
                </h3>
                <p className="mt-2 text-gray-700">{p.description}</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  {p.highlights.map((h) => <li key={h}><strong>{h}</strong></li>)}
                </ul>
                <p className="mt-2 text-sm text-gray-500">Skills: {p.skills.join(", ")}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* What I can do */}
        <Section id="services" title="What I Can Do">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded p-5">
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700">{s.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" title="Testimonials">
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 shrink-0" />
                <div>
                  <blockquote className="italic text-gray-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-2 text-sm">
                    <strong>{t.name}</strong>, {t.role} at {t.company}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </Section>

        {/* Tech stack */}
        <Section id="skills" title="Languages & Technologies">
          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((c) => (
              <div key={c.category}>
                <h3 className="font-bold mb-2">{c.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((item) => (
                    <span key={item} className="text-sm bg-gray-100 px-2 py-1 rounded">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* History */}
        <Section id="history" title="History">
          <ol className="space-y-6">
            {history.map((h) => (
              <li key={h.period + h.org} className="grid md:grid-cols-[140px_1fr] gap-2">
                <span className="text-gray-500">{h.period}</span>
                <div>
                  <p className="font-bold">{h.title}</p>
                  <p className="text-gray-600 text-sm">{h.org} · {h.place}</p>
                  {h.points.map((pt) => <p key={pt} className="text-gray-700 mt-1">{pt}</p>)}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="mb-4 text-gray-700">I&apos;m looking for a backend engineer role in Vancouver. Feel free to reach out.</p>
          <ul className="space-y-1">
            <li>Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>LinkedIn: <a className="underline" href={profile.linkedin}>{profile.linkedin.replace("https://www.", "")}</a></li>
            <li>GitHub: <a className="underline" href={profile.github}>{profile.github.replace("https://", "")}</a></li>
          </ul>
        </Section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8 border-t border-gray-200">
        © 2026 {profile.name}
      </footer>
    </>
  );
}
