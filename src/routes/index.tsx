import { createFileRoute } from "@tanstack/react-router";

import storefront from "@/assets/storefront.png.asset.json";
import showroomFloor from "@/assets/showroom-floor.webp.asset.json";
import wholesaleAisle from "@/assets/wholesale-aisle.webp.asset.json";
import catFaucet from "@/assets/cat-faucet.jpg";
import catMirror from "@/assets/cat-mirror.jpg";
import catHardware from "@/assets/cat-hardware.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Singhal Sanitary & Hardware Store | Faridabad, Haryana" },
      {
        name: "description",
        content:
          "Premium sanitary ware, bathroom taps, LED mirrors and hardware in Faridabad. Wholesale supply for contractors and builders. NH-19, Lakkarpur, Shiv Durga Vihar.",
      },
      {
        property: "og:title",
        content: "Singhal Sanitary & Hardware Store | Faridabad, Haryana",
      },
      {
        property: "og:description",
        content:
          "Trusted sanitary and hardware solutions in Faridabad — premium fittings, taps and plumbing materials at wholesale prices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `https://singhalsanitary.in${storefront.url}` },
      { name: "twitter:image", content: `https://singhalsanitary.in${storefront.url}` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HardwareStore",
          name: "Singhal Sanitary & Hardware Store",
          telephone: "+91-99901-55909",
          address: {
            "@type": "PostalAddress",
            streetAddress: "NH-19, D2/10-11, near Railway Gate, Lakkarpur, Shiv Durga Vihar",
            addressLocality: "Faridabad",
            addressRegion: "Haryana",
            postalCode: "121009",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  {
    code: "A-01",
    image: catFaucet,
    caption: "Faucets & Taps",
    title: "Sanitary Ware",
    text: "Premium ceramic basins, commodes and designer taps.",
  },
  {
    code: "A-02",
    image: catMirror,
    caption: "LED Mirrors",
    title: "Modern Fittings",
    text: "Backlit LED mirrors and vanity solutions.",
  },
  {
    code: "A-03",
    image: catHardware,
    caption: "Plumbing Hardware",
    title: "Trade Hardware",
    text: "Durable plumbing and structural materials.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex flex-col">
            <span className="font-mono text-sm font-medium tracking-tighter">ESTD. FARIDABAD</span>
            <span className="text-lg font-bold uppercase tracking-tight">Singhal Sanitary</span>
          </div>
          <div className="hidden gap-8 font-mono text-[11px] uppercase tracking-widest md:flex">
            <a href="#collections" className="transition-colors hover:text-accent">
              Collections
            </a>
            <a href="#wholesale" className="transition-colors hover:text-accent">
              Wholesale
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>
          <a
            href="tel:+919990155909"
            className="rounded-sm bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Call Store
          </a>
        </div>
      </nav>

      <section className="relative px-6 pt-12 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="animate-fade-up lg:col-span-7">
              <h1 className="mb-8 text-balance text-6xl font-extrabold leading-[0.85] tracking-tighter md:text-8xl">
                PREMIUM <br />
                <span className="text-primary">FITTINGS &</span>
                <br />
                HARDWARE.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                A trusted name in Faridabad for high-quality sanitary solutions. Specializing in
                premium faucets, modern ceramics, and durable hardware for homes and projects.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5">
              <img
                src={showroomFloor.url}
                alt="Singhal Sanitary showroom floor with ceramic commodes and LED mirrors"
                width={1920}
                height={1440}
                className="aspect-[4/5] w-full rounded-sm object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primary px-6 py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-4 md:text-left">
          {[
            ["01 / LOCATION", "Shiv Durga Vihar"],
            ["02 / INVENTORY", "5000+ Products"],
            ["03 / SERVICE", "Wholesale Ready"],
            ["04 / BRANDS", "Jaquar & More"],
          ].map(([label, value]) => (
            <div key={label}>
              <span className="mb-2 block font-mono text-xs text-primary-foreground/50">
                {label}
              </span>
              <span className="text-sm font-bold uppercase tracking-wide">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="collections" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-4xl font-bold uppercase tracking-tighter">Catalogue</h2>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Browse Categories
            </span>
          </div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div
                key={c.code}
                className="group flex aspect-square flex-col justify-between bg-background p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs">{c.code}</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    +
                  </div>
                </div>
                <div>
                  <img
                    src={c.image}
                    alt={c.caption}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="mb-6 aspect-square w-full object-cover"
                  />
                  <h3 className="text-xl font-bold uppercase tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wholesale" className="bg-trade px-6 py-24 text-trade-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block border border-trade-foreground/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
              Contractor Services
            </span>
            <h2 className="mb-8 text-5xl font-extrabold uppercase leading-none tracking-tighter">
              Trade Supply <br />
              <span className="text-accent">Solutions.</span>
            </h2>
            <p className="mb-10 max-w-lg text-lg leading-relaxed opacity-80">
              We partner with builders, interior designers, and contractors across Faridabad to
              provide bulk supply at competitive wholesale rates. Reliable delivery and high-volume
              stock availability.
            </p>
            <ul className="mb-12 space-y-4">
              {[
                "Priority Project Delivery",
                "Wholesale Price Advantage",
                "Technical Specification Support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-sm font-bold uppercase italic tracking-wide"
                >
                  <span className="size-2 bg-accent" /> {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:+919990155909"
              className="inline-block bg-accent px-8 py-4 font-mono text-sm uppercase tracking-widest text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
            >
              Bulk Inquiry
            </a>
          </div>
          <img
            src={wholesaleAisle.url}
            alt="Wholesale aisle of wash basins inside the Singhal Sanitary showroom"
            loading="lazy"
            width={1440}
            height={1920}
            className="aspect-[4/5] w-full rounded-sm border border-white/5 object-cover"
          />
        </div>
      </section>

      <section id="contact" className="bg-card px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-24 lg:grid-cols-2">
          <div>
            <h2 className="mb-12 text-4xl font-extrabold uppercase tracking-tighter">
              Visit Our Showroom
            </h2>
            <div className="space-y-12">
              <div>
                <span className="mb-4 block font-mono text-xs uppercase text-muted-foreground">
                  Address
                </span>
                <p className="text-2xl font-bold leading-tight">
                  NH-19, D2/10-11, near Railway Gate,
                  <br /> Lakkarpur, Shiv Durga Vihar,
                  <br /> Faridabad, Haryana 121009
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Singhal+Sanitary+%26+Hardware+Store+Lakkarpur+Faridabad"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border-b border-accent pb-0.5 font-mono text-[11px] uppercase tracking-widest text-accent"
                >
                  Open in Maps
                </a>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <span className="mb-4 block font-mono text-xs uppercase text-muted-foreground">
                    Call Sales
                  </span>
                  <a
                    href="tel:+919990155909"
                    className="text-xl font-bold tracking-tight text-primary"
                  >
                    099901 55909
                  </a>
                </div>
                <div>
                  <span className="mb-4 block font-mono text-xs uppercase text-muted-foreground">
                    Wholesale Desk
                  </span>
                  <a
                    href="tel:+919821393283"
                    className="text-xl font-bold tracking-tight text-primary"
                  >
                    098213 93283
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-border bg-secondary p-4">
            <img
              src={storefront.url}
              alt="Singhal Sanitary & Hardware storefront near Railway Gate, Lakkarpur"
              loading="lazy"
              width={1920}
              height={912}
              className="aspect-video w-full object-cover grayscale"
            />
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase leading-relaxed text-muted-foreground">
                Open Daily: 09:00 AM — 08:30 PM
                <br />
                Serving Faridabad & NCR Regions
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-mono text-xs font-medium tracking-tighter text-muted-foreground">
              © {new Date().getFullYear()} SINGHAL SANITARY & HARDWARE
            </span>
            <span className="font-mono text-[10px] uppercase text-muted-foreground/60">
              Quality Assured in Haryana
            </span>
          </div>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <a href="#collections" className="transition-colors hover:text-primary">
              Collections
            </a>
            <a href="#wholesale" className="transition-colors hover:text-primary">
              Wholesale
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
