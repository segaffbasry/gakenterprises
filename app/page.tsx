import { Hero } from "@/components/Hero";
import type { Industry } from "@/components/Interactive";
import { CursorLink, IndustryList, LogoMarquee } from "@/components/Interactive";
import { WorkCard } from "@/components/Page";
import { ArrowNE, Button, Eyebrow, Frame } from "@/components/ui";
import { about, clients, company, designManufacture, portfolios, services, work, workIn } from "@/lib/content";

// The industries named in the live About copy, highlighted inside the sentence the way SalesPatriot
// lights "Supply Chain" in blue.
const [aboutLead, aboutRest] = company.about.split(" Founded");
const highlight = "automotive, aerospace, defence, medical, instrumental, IT and manufacturing and production";
const [before, after] = aboutLead.split(highlight);

// Each industry from the live About copy, paired with GAK's own work in it (or the service that covers it).
const industries: Industry[] = [
  { name: "Automotive", work: "UK Sports Car OEM", href: "/e-e-hardware-based/e-e-architecture-testing-uk-sports-car-oem", image: "/media/uk-sports-car-oem.webp" },
  { name: "Aerospace", work: "Product Design & Support", href: "/product-design-support", image: "/media/service-1.webp" },
  { name: "Defence", work: "Mobile Man Surveillance", href: "/e-e-hardware-based/mobile-man-surveillance-system", image: "/media/mobile-man-surveillance-system.webp" },
  { name: "Medical", work: "Wearable Sensor", href: "/e-e-hardware-based/wearable-sensor", image: "/media/14.webp" },
  { name: "Instrumental", work: "Miniature Data Logger", href: "/e-e-hardware-based/miniature-data-logger", image: "/media/miniature-data-logger.webp" },
  { name: "IT", work: "Information & Technology", href: "/information-technology", image: "/media/service-3.webp" },
  { name: "Manufacturing & Production", work: "Manufacturing Support", href: "/manufacturing-support", image: "/media/service-2.webp" },
];

const featured = ["vehicle-immobilizer", "battery-management-system", "helmet-mounted-display", "smart-lock", "2-din-car-infotainment-system", "hscan", "miniature-data-logger", "wearable-sensor"]
  .map((slug) => work.find((item) => item.slug === slug)!);

export default function Home() {
  return <>
    <Hero />

    {/* Our Clients, straight after the opening: the live logo strip as a moving marquee. */}
    <section className="clients-band" id="clients" aria-labelledby="clients-title">
      <div className="wrap clients-head">
        <div>
          <Eyebrow index="01">Our Clients</Eyebrow>
          <h2 id="clients-title" className="clients-title" data-rise>Our Clients</h2>
        </div>
        <p className="mono clients-count" data-rise>{String(clients.length).padStart(2, "0")} clients</p>
      </div>
      <LogoMarquee logos={clients} />
    </section>

    {/* About GAK: SalesPatriot's big statement, a short column of context, and its stacked "layer" cards,
        here the three inputs of GAK's own business-model infographic. */}
    <section className="section statement" id="about">
      <div className="wrap">
        <Eyebrow index="02">About GAK</Eyebrow>
        <h2 className="statement-title" data-rise>{before}<span className="hl">{highlight}</span>{after}</h2>
        <div className="statement-grid">
          <div className="statement-copy">
            <p data-rise>Founded{aboutRest}</p>
            <p data-rise>{about.body[1].split(". ").slice(-1)[0]}</p>
            <div data-rise><Button href="/about-us" tone="black" arrow>About Us</Button></div>
          </div>
          <CursorLink href="/about-us" label="About Us" className="layers-link"><ol className="layers">
            {about.model.map((name, index) => <li key={name} className="layer" data-rise>
              <span className="mono"><b>0{index + 1}</b> Feeds the model</span>
              <strong>{name}</strong>
            </li>)}
            <li className="layer layer-hub" data-rise>
              <span className="mono"><b>04</b> Delivers to clients</span>
              <strong>GAK Enterprises Limited</strong>
            </li>
          </ol></CursorLink>
        </div>
      </div>
    </section>

    {/* Industries We Serve: large ruled rows, each linked to GAK's work in that industry. */}
    <section className="section" id="industries">
      <div className="wrap">
        <div className="section-head section-head-row">
          <div>
            <Eyebrow index="03">Industries We Serve</Eyebrow>
            <h2 className="section-title" data-rise>Industries <em>We Serve</em></h2>
          </div>
          <p className="section-aside mono" data-rise>Since {company.founded}<br />Milton Keynes, United Kingdom</p>
        </div>
        <IndustryList items={industries} />
      </div>
    </section>

    {/* Our Services: SalesPatriot's three-up sector cards, four here. */}
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <Eyebrow index="04">Our Services</Eyebrow>
          <h2 className="section-title" data-rise>Our Services</h2>
        </div>
        <div className="service-cards">
          {services.map((service, index) => <a key={service.slug} className="service-card" href={`/${service.slug}`}>
            <Frame src={service.image} />
            <span className="eyebrow-chip">{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <span className="more mono">Explore<ArrowNE /></span>
          </a>)}
        </div>
      </div>
    </section>

    {/* How We Work: the live About page's operating model, vision and mission. */}
    <section className="section how" id="how-we-work" data-tone="dark">
      <div className="wrap how-grid">
        <div className="how-head">
          <Eyebrow index="05">How We Work</Eyebrow>
          <h2 className="section-title" data-rise>{about.results.title.split(". ")[0]}. <em>{about.results.title.split(". ")[1]}</em></h2>
          <Frame src="/media/369.webp" className="how-image" />
        </div>
        <ol className="how-steps">
          <li data-rise><span className="mono">01</span><h3>Our Business Model</h3><p>{about.results.body}</p></li>
          <li data-rise><span className="mono">02</span><h3>Vision</h3><p>{about.vision}</p></li>
          <li data-rise><span className="mono">03</span><h3>Mission</h3><p>{about.mission}</p></li>
        </ol>
      </div>
    </section>

    {/* Portfolio: SalesPatriot's bordered tile wall, filled with GAK's own products. */}
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="section-head section-head-row">
          <div>
            <Eyebrow index="06">Portfolio</Eyebrow>
            <h2 className="section-title" data-rise>E/E Hardware <em>&amp; Software</em></h2>
          </div>
          <Button href="/e-e-hardware-based" tone="black" arrow>View all {workIn(portfolios[0]).length}</Button>
        </div>
        <div className="work-grid">{featured.map((item, index) => <WorkCard key={item.slug} item={item} index={index} />)}</div>
        <div className="portfolio-links">
          {[...portfolios.map((p) => ({ href: `/${p.slug}`, title: p.title, short: p.short, count: workIn(p).length })), { href: `/${designManufacture.slug}`, title: designManufacture.title, short: designManufacture.short, count: 0 }].map((link) =>
            <a key={link.href} href={link.href} className="portfolio-link" data-rise>
              <span className="mono">{link.count ? `${String(link.count).padStart(2, "0")} items` : "Capabilities"}</span>
              <strong>{link.title}</strong>
              <p>{link.short}</p>
              <ArrowNE />
            </a>)}
        </div>
      </div>
    </section>
  </>;
}
