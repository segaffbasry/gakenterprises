import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GroupGrid, PageHead, WorkCard } from "@/components/Page";
import { ArrowNE, Button, Eyebrow, Frame } from "@/components/ui";
import { designManufacture, portfolios, services, workIn } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

// Every live top-level service and portfolio page, generated at build time.
export const dynamicParams = false;
export function generateStaticParams() {
  return [...services.map((s) => s.slug), ...portfolios.map((p) => p.slug), designManufacture.slug].map((slug) => ({ slug }));
}

const titleOf = (slug: string) =>
  services.find((s) => s.slug === slug)?.title ?? portfolios.find((p) => p.slug === slug)?.title ?? (slug === designManufacture.slug ? designManufacture.title : undefined);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: titleOf(slug) };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (service) {
    const others = services.filter((s) => s !== service);
    return <>
      <PageHead title={service.title} crumbs={[{ name: "Services", href: "/#services" }, { name: service.title }]} />
      <section className="section">
        <div className="wrap split">
          <Frame src={service.image} className="service-image" eager />
          <div className="prose lead-prose"><p data-rise>{service.intro}</p>
            <div data-rise><Button href="/contact-us" arrow>Get In Touch</Button></div>
          </div>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head"><Eyebrow index="01">Capabilities</Eyebrow><h2 className="section-title" data-rise>Area of Expertise</h2></div>
          <GroupGrid groups={service.groups} />
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head"><Eyebrow index="02">Our Services</Eyebrow><h2 className="section-title" data-rise>More services</h2></div>
          <div className="portfolio-links">{others.map((s) => <a key={s.slug} href={`/${s.slug}`} className="portfolio-link" data-rise>
            <span className="mono">Service</span><strong>{s.title}</strong><p>{s.short}</p><ArrowNE />
          </a>)}</div>
        </div>
      </section>
    </>;
  }

  const portfolio = portfolios.find((p) => p.slug === slug);
  if (portfolio) {
    const items = workIn(portfolio);
    const other = portfolios.find((p) => p !== portfolio)!;
    return <>
      <PageHead title={portfolio.title} crumbs={[{ name: "Portfolio" }, { name: portfolio.title }]}>
        <p className="page-lede" data-rise>{portfolio.short} <span className="mono">{items.length} items</span></p>
      </PageHead>
      <section className="section section-tight">
        <div className="wrap">
          <div className="work-grid work-grid-all">{items.map((item, index) => <WorkCard key={item.slug} item={item} index={index} />)}</div>
          <div className="portfolio-links">
            {[{ href: `/${other.slug}`, title: other.title, short: other.short }, { href: `/${designManufacture.slug}`, title: designManufacture.title, short: designManufacture.short }].map((link) =>
              <a key={link.href} href={link.href} className="portfolio-link" data-rise><span className="mono">Portfolio</span><strong>{link.title}</strong><p>{link.short}</p><ArrowNE /></a>)}
          </div>
        </div>
      </section>
    </>;
  }

  if (slug !== designManufacture.slug) notFound();
  return <>
    <PageHead title="Design & Manufacture" accent="– Automotive" crumbs={[{ name: "Portfolio" }, { name: designManufacture.title }]} />
    <section className="section section-tight">
      <div className="wrap">
        <GroupGrid groups={designManufacture.groups} />
      </div>
    </section>
    <section className="section section-tight">
      <div className="wrap split">
        <div><Eyebrow index="04">Fixtures &amp; stations</Eyebrow><h2 className="section-title" data-rise>Design &amp; Manufacture</h2></div>
        <ol className="partner-list">{designManufacture.stations.map((name, index) => <li key={name} data-rise><span className="mono">{String(index + 1).padStart(2, "0")}</span>{name}</li>)}</ol>
      </div>
    </section>
  </>;
}
