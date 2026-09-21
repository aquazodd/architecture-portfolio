import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <PageTransition>
      <main>
        <section className="about-section">
          <p className="eyebrow">ABOUT</p>

          <Reveal className="about-content">
            <h2>
              Architecture as an exploration of
              <span> space, experience and place.</span>
            </h2>

            <p>
              I explore architecture through design, representation and the
              relationship between people and the spaces they inhabit. My work
              moves between architecture, urban design and adaptive reuse.
            </p>
          </Reveal>
        </section>
      </main>
    </PageTransition>
  );
}
