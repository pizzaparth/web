import styles from "./page.module.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import TerminalCard from "@/components/TerminalCard";

export default function Home() {
  return (
    <div className="container">
      {/* 2-Column Hero */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroContent}>
          <div className={styles.telemetryTag}>
            <span className="tech-label">Quantitative Developer // Portfolio</span>
          </div>

          <h1 className={styles.headline}>
            Parth Pancholi
          </h1>

          <p className={styles.lead}>
            Quantitative Developer at{" "}
            <span style={{ color: "var(--fg)" }}>Ksan Relay</span>. Building
            deterministic, high-throughput systems, low-latency infrastructure,
            and numerical models with restraint and rigour.
          </p>

          <div className={styles.actions}>
            <Link href="/projects" className="button button--primary">
              View Projects
            </Link>
            <a
              href="https://github.com/pizzaparth"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className={styles.terminalWrap}>
          <TerminalCard />
        </div>
      </section>

      {/* About Teaser */}
      <section className={`section ${styles.aboutTeaser}`} aria-labelledby="about-heading">
        <span className="tech-label">About</span>
        <h2 id="about-heading" className={styles.sectionTitle}>
          Precision in every line
        </h2>
        <p className={styles.sectionBody}>
          I specialise in quantitative development — building performant,
          data-driven applications where every decision is measurable and every
          system is verifiable. My work spans low-latency infrastructure,
          numerical computing, and full-stack engineering.
        </p>
        <Link href="/about" className="button" style={{ marginTop: 24, alignSelf: "flex-start" }}>
          Learn more
        </Link>
      </section>

      {/* Projects Teaser */}
      <section className={`section ${styles.projectsTeaser}`} aria-labelledby="projects-heading">
        <span className="tech-label">Selected Work</span>
        <h2 id="projects-heading" className={styles.sectionTitle}>
          Recent projects
        </h2>
        <p className={styles.sectionBody}>
          A curated selection of systems, tools, and experiments — from
          production infrastructure to research prototypes.
        </p>
        <Link href="/projects" className="button" style={{ marginTop: 24, alignSelf: "flex-start" }}>
          View all projects
        </Link>
      </section>
    </div>
  );
}
