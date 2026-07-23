import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Plane,
  Stamp,
  Hotel,
  Globe2,
  Users,
  Headphones,
  Clock,
  Zap,
  ShieldCheck,
  Wallet,
  Award,
  LifeBuoy,
  MessageCircle,
  Phone,
  MapPin,
  Star,
  Menu,
  X,
  ArrowRight,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import gLounge from "@/assets/gallery-lounge.jpg";
import gPassport from "@/assets/gallery-passport.jpg";
import gDubai from "@/assets/gallery-dubai.jpg";
import gHotel from "@/assets/gallery-hotel.jpg";
import gTravelers from "@/assets/gallery-travelers.jpg";
import gParis from "@/assets/gallery-paris.jpg";
import gSantorini from "@/assets/gallery-santorini.jpg";

const PHONE = "0913326307";
const PHONE_INTL = "+251913326307";
const WHATSAPP = `https://wa.me/251913326307?text=${encodeURIComponent(
  "Hello Raki Travel, I would like to book a trip.",
)}`;
const MAPS_EMBED =
  "https://www.google.com/maps?q=XRW5%2B73V%20Addis%20Ababa%2C%20Ethiopia&output=embed";
const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=XRW5%2B73V%20Addis%20Ababa%20Ethiopia";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Raki Travel Agency",
          image: "/favicon.ico",
          telephone: PHONE_INTL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "XRW5+73V",
            addressLocality: "Addis Ababa",
            addressCountry: "ET",
          },
          openingHours: "Mo-Su 00:00-23:59",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "50",
          },
        }),
      },
    ],
  }),
});

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Destinations" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--midnight)]/95 backdrop-blur-md shadow-[var(--shadow-card)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-[color:var(--midnight)]">
            <Plane className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-wide">
            Raki <span className="text-gold-gradient">Travel</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-[color:var(--gold)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-[color:var(--gold)]"
           target="_top" rel="noopener">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href="#contact"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[color:var(--midnight)]/98 backdrop-blur-md border-t border-white/10">
          <div className="container-luxe flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-white/90 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="rounded-lg px-3 py-3 text-white/90 hover:bg-white/5"
             target="_top" rel="noopener">
              📞 {PHONE}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-gold mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Aerial view of Lalibela rock-hewn churches, Ethiopia at sunrise"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />
      <div className="relative z-10 container-luxe flex min-h-[100svh] flex-col justify-center pt-24 pb-16 text-white">
        <div className="max-w-3xl reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
            5.0 Rated · Addis Ababa's Trusted Travel Concierge
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Travel the World with{" "}
            <span className="text-gold-gradient">Ease &amp; Confidence</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Discover Ethiopia with confidence — flights, visas, hotels, and
            curated tours to Lalibela, Simien Mountains, Gondar, Axum and
            beyond, handled fast and stress-free from Addis Ababa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base"
            >
              Book a Trip <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-light inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base"
            >
              <MessageCircle className="h-4 w-4" /> Contact on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
              5.0 Trusted Agency
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[color:var(--gold)]" />
              Addis Ababa, Ethiopia
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[color:var(--gold)]" />
              Open 24/7 Support
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* ---------- TRUST STRIP ---------- */
function TrustStrip() {
  const items = [
    { k: "5.0★", v: "Google Rating" },
    { k: "24/7", v: "Support Line" },
    { k: "50+", v: "Ethiopian Destinations" },
    { k: "Fast", v: "Booking Process" },
  ];
  return (
    <section className="border-y border-border bg-white">
      <div className="container-luxe grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {items.map((i) => (
          <div key={i.v} className="text-center">
            <div className="font-display text-2xl font-bold text-[color:var(--midnight)] sm:text-3xl">
              {i.k}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {i.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { icon: Plane, title: "Flight Booking", desc: "Fast international & domestic flight reservations at the best available prices." },
    { icon: Stamp, title: "Visa Assistance", desc: "Guidance and support for travel visa applications and documentation." },
    { icon: Hotel, title: "Hotel Reservations", desc: "Affordable to luxury hotel bookings worldwide." },
    { icon: Globe2, title: "Tour Packages", desc: "Curated travel experiences for groups, families, and solo travelers." },
    { icon: Users, title: "Group Travel Deals", desc: "Special offers for family trips, pilgrimages, and group tours." },
    { icon: Headphones, title: "Travel Consultation", desc: "Personal travel planning and expert guidance." },
  ];
  return (
    <section id="services" className="section-pad bg-background">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything for your journey, in one desk"
          sub="A full-service concierge — from the first search to the last boarding pass."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--midnight)] text-[color:var(--gold)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--midnight)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-5 h-px w-10 bg-[image:var(--gradient-gold)] transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="section-pad bg-[color:var(--sky-soft)]/40">
      <div className="container-luxe grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={gLounge}
            alt="Ethiopian coffee ceremony with traditional jebena"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-luxe)]"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-[color:var(--midnight)] p-5 text-white shadow-[var(--shadow-luxe)] sm:block">
            <div className="font-display text-3xl font-bold text-gold-gradient">5.0★</div>
            <div className="text-xs uppercase tracking-widest text-white/70">
              Google Reviews
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">
            About Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[color:var(--midnight)] sm:text-4xl md:text-5xl">
            Your Trusted Travel Partner in Ethiopia
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Raki Travel Agency is a professional travel service based in Addis Ababa,
            dedicated to making travel simple, fast, and reliable. We help
            individuals, families, and groups with every part of the journey.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Flight bookings",
              "Visa assistance",
              "Hotel reservations",
              "International & local tours",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-[color:var(--midnight)]">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic text-muted-foreground">
            Our mission is to remove stress from travel planning and give clients a
            smooth, reliable experience from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: Clock, t: "24/7 Availability" },
    { icon: Zap, t: "Fast Booking Process" },
    { icon: ShieldCheck, t: "Trusted Customer Service" },
    { icon: Wallet, t: "Affordable Travel Options" },
    { icon: Award, t: "Experienced Travel Agents" },
    { icon: LifeBuoy, t: "End-to-End Support" },
    { icon: MessageCircle, t: "Reliable Communication" },
    { icon: Globe2, t: "Global Network Access" },
  ];
  return (
    <section className="section-pad relative overflow-hidden bg-[color:var(--midnight)] text-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, oklch(0.78 0.14 82 / 0.25), transparent 60%), radial-gradient(500px circle at 80% 80%, oklch(0.5 0.12 240 / 0.3), transparent 60%)",
        }}
      />
      <div className="container-luxe relative">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A concierge experience, every time"
          sub="Little details, delivered with the care of a premium travel desk."
          light
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div
              key={i.t}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[color:var(--gold)]/50 hover:bg-white/10"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-gold)] text-[color:var(--midnight)]">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{i.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const items = [
    { src: gDubai, alt: "Addis Ababa skyline at dusk", span: "sm:col-span-2 sm:row-span-2" },
    { src: gPassport, alt: "Ethiopian passport and boarding pass" },
    { src: gHotel, alt: "Simien Mountains at sunset" },
    { src: gParis, alt: "Blue Nile Falls (Tis Abay), Ethiopia" },
    { src: gTravelers, alt: "Ethiopian family travelers at Bole Airport" },
    { src: gSantorini, alt: "Royal Fasil Ghebbi castles, Gondar", span: "sm:col-span-2" },
  ];
  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Ethiopian Destinations"
          title="Where our travelers wake up next"
          sub="From the highlands of Lalibela to the historic castles of Gondar — the places we arrange every week."
        />
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {items.map((i) => (
            <div
              key={i.alt}
              className={`group relative overflow-hidden rounded-2xl ${i.span ?? ""}`}
            >
              <img
                src={i.src}
                alt={i.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--midnight)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {i.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const reviews = [
    { q: "Everything was handled perfectly. My flight booking was fast and stress-free.", n: "Selam T." },
    { q: "The team is very professional and responds quickly. Highly recommended.", n: "Michael A." },
    { q: "I got my visa and flight arranged smoothly without complications.", n: "Hanan M." },
    { q: "The best travel service I've used in Addis Ababa.", n: "Daniel K." },
  ];
  return (
    <section className="section-pad bg-[color:var(--sky-soft)]/40">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Testimonials"
          title="Travelers who came back — and told everyone"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.n}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--gold)]" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-lg leading-relaxed text-[color:var(--midnight)] sm:text-xl">
                “{r.q}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-gold)] font-semibold text-[color:var(--midnight)]">
                  {r.n[0]}
                </span>
                <span className="text-sm font-medium">{r.n}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="section-pad relative overflow-hidden bg-[color:var(--midnight)] text-white">
      <img
        src={gDubai}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="container-luxe relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Start Your <span className="text-gold-gradient">Journey Today</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/80">
          Fast response within minutes. Your ticket, your visa, your itinerary —
          taken care of.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-light inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5"
          >
            <MessageCircle className="h-4 w-4" /> Contact WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT + MAP ---------- */
function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-luxe grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[color:var(--midnight)] sm:text-4xl md:text-5xl">
            Request a Travel Quote
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us where you'd like to go — we'll respond quickly with the best
            available options.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-[color:var(--gold)]/50"
             target="_top" rel="noopener">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[color:var(--midnight)] text-[color:var(--gold)]">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Call Us
                </div>
                <div className="font-semibold text-[color:var(--midnight)]">{PHONE}</div>
              </div>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-[color:var(--gold)]/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[color:var(--whatsapp)] text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </div>
                <div className="font-semibold text-[color:var(--midnight)]">
                  Chat with us instantly
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[color:var(--midnight)] text-[color:var(--gold)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Office
                </div>
                <div className="font-semibold text-[color:var(--midnight)]">
                  XRW5+73V, Addis Ababa, Ethiopia
                </div>
                <a
                  href={MAPS_DIR}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-[color:var(--midnight)] underline decoration-[color:var(--gold)] underline-offset-4"
                >
                  Get Directions <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              src={MAPS_EMBED}
              title="Raki Travel Agency location on Google Maps"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}

function QuoteForm() {
  const [state, handleSubmit] = useForm("mjgnakgg");

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-luxe)] text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-[color:var(--midnight)]">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--midnight)]">
          Quote Request Sent
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you — our team will review your request and reply shortly.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="btn-outline mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
        >
          <MessageCircle className="h-4 w-4" /> Or chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-luxe)] sm:p-8"
    >
      <div className="grid gap-4">
        <Field label="Full Name" name="name" placeholder="Your name" errors={state.errors} required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          errors={state.errors}
          required
        />
        <Field
          label="Destination"
          name="destination"
          placeholder="e.g. Lalibela, Gondar, Axum, Bahir Dar"
          errors={state.errors}
          required
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Travel Date" name="date" type="date" errors={state.errors} required />
          <Field label="Budget (USD)" name="budget" placeholder="e.g. 1500" errors={state.errors} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Additional Notes
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Any special requests, number of travelers, etc."
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
          />
          <ValidationError
            field="message"
            errors={state.errors}
            className="mt-1 text-xs text-red-500"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="btn-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="h-4 w-4" />
          {state.submitting ? "Sending..." : "Request Quote"}
        </button>
        <p className="text-center text-xs text-muted-foreground">
          We will respond quickly with the best available options.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
      />
      <ValidationError
        field={name}
        errors={state.errors}
        className="mt-1 text-xs text-red-500"
      />
    </label>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-[color:var(--midnight)] text-white/80">
      <div className="container-luxe grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-[color:var(--midnight)]">
              <Plane className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold">
              Raki <span className="text-gold-gradient">Travel</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Your trusted travel partner in Addis Ababa — flights, visas, hotels &
            curated tours, handled 24/7.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Explore" links={[
          { l: "About", h: "#about" },
          { l: "Services", h: "#services" },
          { l: "Gallery", h: "#gallery" },
          { l: "Contact", h: "#contact" },
        ]} />

        <FooterCol title="Services" links={[
          { l: "Flight Booking", h: "#services" },
          { l: "Visa Assistance", h: "#services" },
          { l: "Hotel Reservations", h: "#services" },
          { l: "Tour Packages", h: "#services" },
        ]} />

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
              <a href={`tel:${PHONE}`} target="_top" rel="noopener">{PHONE}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
              XRW5+73V, Addis Ababa, Ethiopia
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
              Open 24 Hours
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Raki Travel Agency. All Rights Reserved.</p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.l}>
            <a href={l.h} className="hover:text-[color:var(--gold)]">
              {l.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- SECTION HEADER + FLOATING WHATSAPP ---------- */
function SectionHeader({
  eyebrow,
  title,
  sub,
  light,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`text-xs uppercase tracking-[0.25em] ${
          light ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-[color:var(--midnight)]"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base ${
            light ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] animate-float hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="fixed bottom-5 left-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--midnight)] text-[color:var(--gold)] shadow-[var(--shadow-luxe)] hover:scale-105 transition-transform md:hidden"
       target="_top" rel="noopener">
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
