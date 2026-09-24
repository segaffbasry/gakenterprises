import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks, PageHead, WorkCard } from "@/components/Page";
import { Button, Eyebrow, Frame } from "@/components/ui";
import { kindLabel, portfolioOf, work, workIn } from "@/lib/content";

type Props = { params: Promise<{ slug: string; item: string }> };

// One statically generated page per product, programme and software project on the live portfolio pages.
export const dynamicParams = false;
export function generateStaticParams() {
  return work.map((item) => ({ slug: portfolioOf(item).slug, item: item.slug }));
}

const find = (slug: string, itemSlug: string) => work.find((item) => item.slug === itemSlug && portfolioOf(item).slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, item } = await params;
  return { title: find(slug, item)?.title };
}

export default async function WorkPage({ params }: Props) {
  const { slug, item: itemSlug } = await params;
  const item = find(slug, itemSlug);
  if (!item) notFound();
  const portfolio = portfolioOf(item);
  const siblings = workIn(portfolio);
  const at = siblings.indexOf(item);
  const next = [1, 2, 3].map((step) => siblings[(at + step) % siblings.length]).filter((s) => s !== item);

  return <>
    <PageHead title={item.title} crumbs={[{ name: portfolio.title, href: `/${portfolio.slug}` }, { name: item.title }]}>
      <p className="page-lede mono" data-rise>{kindLabel[item.kind]} · {String(at + 1).padStart(2, "0")} / {String(siblings.length).padStart(2, "0")}</p>
    </PageHead>
    <section className="section section-tight">
      <div className="wrap item-grid">
        <div className="item-media">
          {item.image ? <Frame src={item.image} alt={item.title} contain eager /> : <div className="work-plate item-plate" aria-hidden="true"><span>{item.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}</span></div>}
        </div>
        <div className="item-body">
          <Eyebrow index="01">{kindLabel[item.kind]}</Eyebrow>
          <Blocks blocks={item.blocks} />
          <div className="item-actions" data-rise>
            <Button href="/contact-us" arrow>Get In Touch</Button>
            <Button href={`/${portfolio.slug}`} tone="white">All {portfolio.title}</Button>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-tight">
      <div className="wrap">
        <div className="section-head"><Eyebrow index="02">{portfolio.title}</Eyebrow><h2 className="section-title" data-rise>Next in the portfolio</h2></div>
        <div className="work-grid work-grid-3">{next.map((s) => <WorkCard key={s.slug} item={s} />)}</div>
      </div>
    </section>
  </>;
}
