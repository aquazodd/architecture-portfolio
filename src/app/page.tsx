import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.type === "academic")
    .slice(0, 4);

  return (
    <main>
      <Navigation />

      {/* Hero */}

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">ARCHITECTURE / DESIGN</p>

          <h1>
            YOHANNES
            <br />
            ABITI
          </h1>

          <p className="hero-description">
            Architecture and design through space, material and place.
          </p>
        </div>

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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* About */}

      <section id="about" className="about-section about-preview">
        <p className="eyebrow">ABOUT</p>

        <div className="about-content">
          <h2>
            A concise introduction to the practice
            <span> will appear here.</span>
          </h2>

          <p>
            This section will provide a short overview of the portfolio and
            its approach to architecture and design.
          </p>
        </div>
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
  );
}
