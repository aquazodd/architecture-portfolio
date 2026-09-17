import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      <section className="contact-section">
        <p className="eyebrow">CONTACT</p>

        <h2>Let&apos;s talk.</h2>

        <a href="mailto:your@email.com" className="email">
          your@email.com
        </a>

        <Footer />
      </section>
    </main>
  );
}
