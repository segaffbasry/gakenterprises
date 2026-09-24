import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHead } from "@/components/Page";
import { Eyebrow } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return <>
    <PageHead title="Call Us or" accent="Fill the Form" crumbs={[{ name: "Contact Us" }]} />
    <section className="section">
      <div className="wrap contact-grid">
        <div className="contact-details">
          <div data-rise>
            <Eyebrow index="01" rise={false}>Call Us</Eyebrow>
            {contact.phones.map((phone) => <a key={phone.href} className="contact-big" href={phone.href}>{phone.label}</a>)}
          </div>
          <div data-rise>
            <Eyebrow index="02" rise={false}>Email</Eyebrow>
            <a className="contact-big" href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div data-rise>
            <Eyebrow index="03" rise={false}>Address</Eyebrow>
            {contact.offices.map((office) => <address key={office.name}><strong>{office.name}:</strong><br />{office.lines.map((line) => <span key={line}>{line}<br /></span>)}</address>)}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  </>;
}
