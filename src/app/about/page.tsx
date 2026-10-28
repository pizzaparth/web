import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className="container">
      <section className={styles.intro}>
        <span className="tech-label">About</span>
        <h1 className={styles.title}>About me</h1>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.subhead}>Background</h2>
            <p>
              I&apos;m Parth Pancholi — a Quantitative Developer at Ksan Relay where I
              build data-forward systems that prioritise precision, performance,
              and measurability. My work sits at the intersection of software
              engineering and quantitative research.
            </p>
            <p>
              I specialise in designing low-latency infrastructure, numerical
              computing pipelines, and full-stack applications. Every system I build
              follows a principle of restraint — no unnecessary complexity, no
              decorative overhead.
            </p>

            <h2 className={styles.subhead} style={{ marginTop: 40 }}>Philosophy</h2>
            <p>
              Code should be precise, auditable, and purposeful. I believe in
              measurable outcomes, reproducible builds, and systems that are
              verifiable by design. The best software disappears — it works so
              reliably that you forget it exists.
            </p>

            <h2 className={styles.subhead} style={{ marginTop: 40 }}>Skills</h2>
            <ul className={styles.skillList}>
              <li>TypeScript &middot; React &middot; Next.js</li>
              <li>Python &middot; NumPy &middot; Pandas</li>
              <li>Rust &middot; C++ &middot; Systems Programming</li>
              <li>Quantitative Analysis &middot; Statistical Modelling</li>
              <li>Low-Latency Systems &middot; Infrastructure</li>
              <li>PostgreSQL &middot; Redis &middot; Data Pipelines</li>
            </ul>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.portrait}>
              <Image
                src="/me.jpeg"
                alt="Parth Pancholi"
                width={400}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "auto", filter: "grayscale(100%)" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
