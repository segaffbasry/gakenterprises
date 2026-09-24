import type { Metadata } from "next";
import { PageHead } from "@/components/Page";
import { Eyebrow, Frame } from "@/components/ui";
import { about } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return <>
    <PageHead title="About Us" crumbs={[{ name: "About Us" }]} />

    <section className="section">
      <div className="wrap split">
        <div>
          <Eyebrow index="01">Who we are</Eyebrow>
          <h2 className="section-title" data-rise>{about.title}</h2>
        </div>
        <div className="prose">{about.body.map((text) => <p key={text} data-rise>{text}</p>)}</div>
      </div>
      <div className="wrap"><Frame src={about.image} className="wide-frame" /></div>
    </section>

    <section className="section how" data-tone="dark">
      <div className="wrap split">
        <div>
          <Eyebrow index="02">How we work</Eyebrow>
          <h2 className="section-title" data-rise>Driven By Results. <em>Motivated By Success</em></h2>
        </div>
        <div className="prose"><p data-rise>{about.results.body}</p></div>
      </div>
      {/* The live infographic, redrawn: people, product partners and service partners feed GAK. */}
      <div className="wrap model" data-rise>
        {about.model.map((name, index) => <div key={name} className={`model-node model-node-${index}`}><span className="mono">0{index + 1}</span>{name}</div>)}
        <div className="model-hub"><strong>GAK</strong><span>Enterprises Limited</span></div>
        <svg className="model-lines" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M50 12V24M18 50 38 38M82 50 62 38" />
        </svg>
      </div>
    </section>

    <section className="section">
      <div className="wrap split">
        <div>
          <Eyebrow index="03">Associated Partners</Eyebrow>
          <h2 className="section-title" data-rise>Associated Partners</h2>
        </div>
        <ul className="partner-list">{about.partners.map((name, index) => <li key={name} data-rise><span className="mono">{String(index + 1).padStart(2, "0")}</span>{name}</li>)}</ul>
      </div>
      <div className="wrap vm">
        <div className="vm-card" data-rise><span className="eyebrow-chip">V</span><h3>Vision</h3><p>{about.vision}</p></div>
        <div className="vm-card vm-card-blue" data-rise><span className="eyebrow-chip">M</span><h3>Mission</h3><p>{about.mission}</p></div>
      </div>
    </section>
  </>;
}
