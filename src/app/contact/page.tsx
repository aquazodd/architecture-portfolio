import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <PageTransition>
      <main>
        <section className="contact-section">
          <p className="eyebrow">CONTACT</p>

          <h2>Let&apos;s talk.</h2>

          <a href={`mailto:${site.email}`} className="email">
            {site.email}
          </a>

          <Footer />
        </section>
      </main>
    </PageTransition>
  );
}
