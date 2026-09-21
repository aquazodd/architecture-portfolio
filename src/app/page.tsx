import Link from "next/link";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.type === "academic")
    .slice(0, 4);

  return (
    <PageTransition>
      <main>
        {/* Hero */}

        <section className="hero">
          <Reveal className="hero-content" delay={0.15}>
            <p className="eyebrow">ARCHITECTURE / DESIGN</p>

            <h1>
              YOHANNES
              <br />
              ABITI
            </h1>

            <p className="hero-description">
              Architecture and design through space, material and place.
            </p>
          </Reveal>

          <div className="scroll-indicator">
            <span>SCROLL</span>
            <span>↓</span>
          </div>
        </section>

        {/* Selected Work */}

        <section id="work" className="work-section featured-work">
          <div className="section-header">
            <p className="eyebrow">FEATURED WORK</p>
            <p className="section-number">
              01 — {String(featuredProjects.length).padStart(2, "0")}
            </p>
          </div>

          <div className="projects">
            {featuredProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* About */}

        <section id="about" className="about-section about-preview">
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

          <Link href="/about" className="email">
            About
          </Link>
        </section>

        {/* Contact */}

        <section id="contact" className="contact-section contact-preview">
          <p className="eyebrow">CONTACT</p>

          <h2>Let&apos;s talk.</h2>

          <Link href="/contact" className="email">
            Contact
          </Link>

          <Footer />
        </section>
      </main>
    </PageTransition>
  );
}
