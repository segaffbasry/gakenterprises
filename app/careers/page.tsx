import type { Metadata } from "next";
import { PageHead } from "@/components/Page";
import { Button, Eyebrow, Frame } from "@/components/ui";
import { careers } from "@/lib/content";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return <>
    <PageHead title="Careers" crumbs={[{ name: "Careers" }]} />
    <section className="section">
      <div className="wrap split">
        <div>
          <Eyebrow index="01">Join GAK</Eyebrow>
          <h2 className="section-title" data-rise>{careers.title}</h2>
        </div>
        <div className="prose">
          {careers.body.map((text) => <p key={text} data-rise>{text}</p>)}
          <p className="mono email-line" data-rise>Email: <a href={`mailto:${careers.email}`}>{careers.email}</a></p>
          <div data-rise><Button href={`mailto:${careers.email}`} arrow>Send your CV</Button></div>
        </div>
      </div>
      <div className="wrap"><Frame src="/media/service-2.webp" className="wide-frame" /></div>
    </section>
  </>;
}
