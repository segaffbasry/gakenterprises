import type { ReactNode } from "react";
import { ArrowNE, Frame } from "@/components/ui";
import type { Block, Group, Work } from "@/lib/content";
import { kindLabel, portfolioOf } from "@/lib/content";

type Crumb = { name: string; href?: string };

/* Inner-page opening: the hero's dark-to-white fade in miniature, a mono breadcrumb (the live pages
   carry one too) and the page title. Heavy motion stays on the home hero; this only rises in. */
export function PageHead({ title, crumbs, children, accent }: { title: string; crumbs: Crumb[]; children?: ReactNode; accent?: string }) {
  return <section className="page-head" data-tone="dark">
    <div className="wrap">
      <nav className="crumbs mono" aria-label="Breadcrumb" data-rise>
        <a href="/">GAK Enterprises Limited</a>
        {crumbs.map((c) => c.href ? <a key={c.name} href={c.href}>{c.name}</a> : <span key={c.name} aria-current="page">{c.name}</span>)}
      </nav>
      <h1 className={`page-title${title.length > 50 ? " page-title-long" : ""}`} data-rise>{title}{accent && <> <em>{accent}</em></>}</h1>
      {children}
    </div>
  </section>;
}

/* The live pages keep these lists in accordions. Here every group is open, set in Rox's ruled grid so
   the whole capability list can be scanned at once. */
export function GroupGrid({ groups }: { groups: Group[] }) {
  return <div className="groups">
    {groups.map((group, index) => <section key={group.title} className="group" data-rise>
      <header>
        <span className="eyebrow-chip">{String(index + 1).padStart(2, "0")}</span>
        <h3>{group.title}</h3>
      </header>
      {group.body && <p>{group.body}</p>}
      {group.items && <ul className="ticks">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>}
      {group.groups && <div className="subgroups">{group.groups.map((sub) => <div key={sub.title}>
        <h4 className="mono">{sub.title}</h4>
        <ul className="ticks">{sub.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>)}</div>}
    </section>)}
  </div>;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return <div className="blocks">
    {blocks.map((block, index) => {
      if (block.type === "p") return <p key={index} data-rise>{block.text}</p>;
      if (block.type === "label") return <h3 key={index} className="mono block-label" data-rise>{block.text}</h3>;
      if (block.type === "list") return <ul key={index} className="ticks" data-rise>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
      return <div key={index} className="subgroups" data-rise>{block.groups.map((g) => <div key={g.title}>
        <h4 className="mono">{g.title}</h4>
        <ul className="ticks">{g.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>)}</div>;
    })}
  </div>;
}

/* SalesPatriot's bordered tile: the product shot sits contained on white, the name and a mono kind below. */
export function WorkCard({ item, index }: { item: Work; index?: number }) {
  const href = `/${portfolioOf(item).slug}/${item.slug}`;
  return <a className="work-card" href={href}>
    <div className="work-media">
      {item.image
        ? <Frame src={item.image} contain />
        : <div className="work-plate" aria-hidden="true"><span>{item.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}</span></div>}
    </div>
    <div className="work-body">
      <p className="mono">{index !== undefined && <span>{String(index + 1).padStart(2, "0")}</span>}{kindLabel[item.kind]}</p>
      <h3>{item.title}<ArrowNE /></h3>
    </div>
  </a>;
}
