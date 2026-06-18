import Image from "next/image";

const services = [
  "Shopify Custom Coding",
  "Shopify Theme Customization",
  "Shopify Bug Fixes",
  "Shopify CRO Improvements",
  "Shopify API Integrations",
];

const reasons = [
  {
    title: "Fiverr Experience",
    copy: "Practical delivery experience with real Shopify store owners, tight scopes, and high expectations.",
  },
  {
    title: "Shopify Specialization",
    copy: "Focused on Shopify themes, Liquid, storefront UX, and the details that make commerce work smoothly.",
  },
  {
    title: "Custom Solutions",
    copy: "Purpose-built fixes and enhancements instead of generic patches that slow stores down.",
  },
  {
    title: "Performance And Conversions",
    copy: "Every improvement is shaped around speed, clarity, trust, and more confident buying decisions.",
  },
];

const apps = [
  {
    name: "Vitals",
    use: "All-in-one conversion, marketing, and store enhancement toolkit.",
  },
  {
    name: "Loox",
    use: "Photo reviews and social proof for stronger product confidence.",
  },
  {
    name: "Reputon",
    use: "Review management tools that help build credibility across channels.",
  },
  {
    name: "Swatch King",
    use: "Variant swatches that make product options easier to browse.",
  },
];

const contacts = [
  { label: "Email", value: "hello@AhmadMujtaba.com", href: "mailto:hello@AhmadMujtaba.com" },
  { label: "LinkedIn", value: "Ahmad Mujtaba", href: "https://www.linkedin.com/" },
  { label: "Fiverr", value: "View Profile", href: "https://www.fiverr.com/" },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="section-shell flex items-center justify-between py-5 sm:py-6">
        <a className="focus-ring text-sm font-black tracking-[0.18em]" href="#top">
          AHMADMUJTABA.COM
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
          <a className="transition hover:text-ink" href="#services">Services</a>
          <a className="transition hover:text-ink" href="#why">Why Me</a>
          <a className="transition hover:text-ink" href="#apps">Apps</a>
          <a className="transition hover:text-ink" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="premium-grid relative border-y border-black/10">
        <div className="section-shell grid min-h-[calc(100vh-76px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-muted shadow-sm">
              Shopify Developer
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-normal text-ink sm:text-7xl lg:text-8xl">
              Ahmad Mujtaba
            </h1>
            <h2 className="mt-6 max-w-3xl text-2xl font-bold leading-tight text-ink sm:text-4xl">
              Shopify Developer & CRO-Focused Problem Solver
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              I help Shopify brands fix friction, customize storefronts, integrate smarter workflows, and improve conversion paths with clean, performance-minded code.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-black text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-black"
                href="#contact"
              >
                Hire Me
              </a>
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-black/15 bg-white px-6 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:border-shopify hover:shadow-glow"
                href="#services"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up lg:justify-self-end" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-8 animate-soft-pulse rounded-full bg-shopify/20 blur-3xl" />
            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-premium">
              <Image
                alt="Premium Shopify CRO workspace visual with storefront cards, analytics, code, and checkout flow panels"
                className="aspect-[4/3] w-full rounded-[1.45rem] object-cover"
                height={900}
                priority
                sizes="(min-width: 1024px) 520px, calc(100vw - 32px)"
                src="/shopify-cro-workspace.png"
                width={1200}
              />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 sm:gap-3">
                {["Liquid", "UX", "API"].map((item) => (
                  <div key={item} className="rounded-md border border-white/25 bg-black/70 px-2 py-3 text-center text-xs font-black text-white backdrop-blur sm:text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-shopify">Services</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-5xl">Shopify work that stays sharp after launch.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <article
              className="group min-h-48 rounded-lg border border-black/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-shopify hover:shadow-glow"
              key={service}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md bg-shopify text-sm font-black text-ink">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-black leading-tight text-ink">{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="border-y border-black/10 bg-ink py-20 text-white sm:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-shopify">Why Work With Me</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Specialized help for stores that need momentum.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-shopify/70" key={reason.title}>
                  <h3 className="text-xl font-black">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{reason.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="section-shell py-20 sm:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-shopify">Recommended Shopify Apps</p>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-5xl">Useful tools I often recommend.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Recommendation cards only. No affiliate links included.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <article className="rounded-lg border border-black/10 p-6 transition hover:-translate-y-1 hover:border-shopify hover:shadow-glow" key={app.name}>
              <div className="mb-8 h-2 w-16 rounded-full bg-shopify" />
              <h3 className="text-2xl font-black text-ink">{app.name}</h3>
              <p className="mt-3 leading-7 text-muted">{app.use}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-shopify py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-ink/70">Contact</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-6xl">
              Ready to improve your Shopify store?
            </h2>
          </div>
          <div className="rounded-lg border border-black/15 bg-white p-4 shadow-premium sm:p-5">
            {contacts.map((contact) => (
              <a
                className="focus-ring flex items-center justify-between gap-4 rounded-md px-4 py-4 transition hover:bg-black/[0.04]"
                href={contact.href}
                key={contact.label}
                rel="noreferrer"
                target={contact.href.startsWith("http") ? "_blank" : undefined}
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-muted">{contact.label}</span>
                  <span className="mt-1 block break-all text-lg font-black text-ink">{contact.value}</span>
                </span>
                <span aria-hidden="true" className="text-2xl font-black">+</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="section-shell flex flex-col gap-2 py-8 text-sm font-semibold text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-black text-ink">Ahmad Mujtaba</p>
        <p>Shopify Developer</p>
      </footer>
    </main>
  );
}
