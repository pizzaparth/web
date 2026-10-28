import styles from "./page.module.css";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="container">
      <section className={styles.intro}>
        <span className="tech-label">Contact</span>
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.lead}>
          Interested in working together or have a question? Reach out through
          any of the channels below.
        </p>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className="tech-label">Email</span>
            <h3 className={styles.cardTitle}>Send a message</h3>
            <p className={styles.cardDesc}>
              For inquiries, collaborations, or just to say hello.
            </p>
            <a
              href="mailto:dev.parthpancholi@outlook.com"
              className="button button--primary"
              style={{ marginTop: 16 }}
            >
              dev.parthpancholi@outlook.com
            </a>
          </div>

          <div className={styles.card}>
            <span className="tech-label">GitHub</span>
            <h3 className={styles.cardTitle}>Open source</h3>
            <p className={styles.cardDesc}>
              Check out my code, contributions, and projects.
            </p>
            <a
              href="https://github.com/pizzaparth"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{ marginTop: 16 }}
            >
              @pizzaparth <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
