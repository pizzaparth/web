import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LogoMark from "./LogoMark";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      {/* Top */}
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brandLink}>
            <LogoMark size={24} />
            Parth Pancholi
          </Link>
          <p className={styles.descriptor}>
            Quantitative Developer. Building precise, data-driven systems.
          </p>
        </div>

        <div className={styles.col}>
          <span className={styles.colHeading}>Navigate</span>
          <Link href="/" className={styles.colLink}>Home</Link>
          <Link href="/about" className={styles.colLink}>About</Link>
          <Link href="/projects" className={styles.colLink}>Projects</Link>
          <Link href="/contact" className={styles.colLink}>Contact</Link>
        </div>

        <div className={styles.col}>
          <span className={styles.colHeading}>Connect</span>
          <a
            href="https://github.com/pizzaparth"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.colLink} ${styles.external}`}
          >
            GitHub <ArrowUpRight size={14} className={styles.externalIcon} />
          </a>
          <a
            href="mailto:dev.parthpancholi@outlook.com"
            className={styles.colLink}
          >
            Email
          </a>
        </div>

        <div className={styles.col}>
          <span className={styles.colHeading}>Work</span>
          <span className={styles.colLink}>Ksan Relay</span>
        </div>
      </div>

      {/* Base */}
      <div className={styles.base}>
        <span>&copy; {new Date().getFullYear()} Parth Pancholi</span>
        <ul className={styles.dotList}>
          <li>Developer</li>
          <li>Quantitative Systems</li>
          <li>Open Source</li>
        </ul>
      </div>
    </footer>
  );
}
