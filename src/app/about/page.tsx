import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <section className="about-section">
        <p className="eyebrow">ABOUT</p>

        <div className="about-content">
          <h2>
            Architecture as an exploration of
            <span> space, experience and place.</span>
          </h2>

          <p>
            I explore architecture through design, representation and the
            relationship between people and the spaces they inhabit. My work
            moves between architecture, urban design and adaptive reuse.
          </p>
        </div>
      </section>
    </main>
  );
}
