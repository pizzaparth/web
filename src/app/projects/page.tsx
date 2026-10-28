import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./page.module.css";

interface ProjectItem {
  id: string;
  title: string;
  label: string;
  date: string;
  image: string;
  alt: string;
  lorem: string;
  tags: string[];
  githubUrl: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "ksan-orderbook",
    title: "ksan-orderbook",
    label: "01 // ENGINE",
    date: "OCT 2024",
    image: "/images/projects/p1.svg",
    alt: "Limit order book depth visualization",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["C++20", "Lock-Free", "ITCH 5.0", "AVX2"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "stoch-diff",
    title: "stoch-diff",
    label: "02 // NUMERICS",
    date: "AUG 2024",
    image: "/images/projects/p2.svg",
    alt: "Stochastic diffusion path simulation",
    lorem:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Rust", "Euler-Maruyama", "SIMD", "Monte Carlo"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "arbitrage-mesh",
    title: "arbitrage-mesh",
    label: "03 // NETWORK",
    date: "JUN 2024",
    image: "/images/projects/p3.svg",
    alt: "Triangular arbitrage mesh diagram",
    lorem:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
    tags: ["Go", "gRPC", "Spatial Arbitrage", "WebSockets"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "timeseries-quant",
    title: "timeseries-quant",
    label: "04 // STATS",
    date: "APR 2024",
    image: "/images/projects/p4.svg",
    alt: "Autocorrelation function stem plot",
    lorem:
      "Phasellus purus erat, vestibulum sed feugiat vel, dignissim et leo. Cras pellentesque egestas neque, at efficitur dui convallis nec. Sed ac augue arcu. Cras non massa quis felis euismod rhoncus a id odio.",
    tags: ["Python", "NumPy", "Time Series", "ACF / PACF"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "latency-probe",
    title: "latency-probe",
    label: "05 // TELEMETRY",
    date: "FEB 2024",
    image: "/images/projects/p5.svg",
    alt: "Kernel latency histogram and KDE plot",
    lorem:
      "Maecenas interdum condimentum lacus, sit amet congue urna molestie a. Integer sit amet odio tristique, auctor augue et, semper risus. Cras sagittis massa ac mi mollis sodales. Suspendisse potenti.",
    tags: ["eBPF", "Linux Kernel", "Kernel-Bypass", "C"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "risk-matrix",
    title: "risk-matrix",
    label: "06 // DERIVATIVES",
    date: "NOV 2023",
    image: "/images/projects/p6.svg",
    alt: "Implied volatility surface contour",
    lorem:
      "Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.",
    tags: ["Python", "Black-Scholes", "Heston Model", "SciPy"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "signal-spectrum",
    title: "signal-spectrum",
    label: "07 // DSP",
    date: "SEP 2023",
    image: "/images/projects/p7.svg",
    alt: "Power spectral density harmonic plot",
    lorem:
      "Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque.",
    tags: ["TypeScript", "WebAudio", "FFT", "Signal Processing"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "hyper-backtest",
    title: "hyper-backtest",
    label: "08 // SIMULATION",
    date: "JUN 2023",
    image: "/images/projects/p8.svg",
    alt: "Cumulative PnL and drawdown chart",
    lorem:
      "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    tags: ["Rust", "Tick Simulation", "Slippage Model", "Polars"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "matrix-kernel",
    title: "matrix-kernel",
    label: "09 // LINEAR ALGEBRA",
    date: "MAR 2023",
    image: "/images/projects/p9.svg",
    alt: "Covariance correlation heatmap",
    lorem:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    tags: ["C++", "BLAS / LAPACK", "AVX-512", "Cholesky"],
    githubUrl: "https://github.com/pizzaparth",
  },
  {
    id: "relay-wire",
    title: "relay-wire",
    label: "10 // PROTOCOL",
    date: "DEC 2022",
    image: "/images/projects/p10.svg",
    alt: "Zero copy binary wire timing diagram",
    lorem:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Cras non massa quis felis euismod rhoncus.",
    tags: ["Zero-Copy", "Binary Codec", "SBE", "Low Latency"],
    githubUrl: "https://github.com/pizzaparth",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <section className={styles.intro}>
        <span className="tech-label">Index // Projects</span>
        <h1 className={styles.title}>Selected Work</h1>
        <p className={styles.lead}>
          An index of quantitative systems, low-latency tools, and numerical
          models. Each project focuses on measurable throughput, precision, and
          verifiable architecture.
        </p>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={styles.grid}>
          {PROJECTS.map((proj) => (
            <article key={proj.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={proj.image}
                  alt={proj.alt}
                  width={600}
                  height={320}
                  priority={proj.id === "ksan-orderbook" || proj.id === "stoch-diff"}
                />
              </div>

              <div className={styles.body}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleGroup}>
                    <h2 className={styles.cardTitle}>{proj.title}</h2>
                    <span className={styles.date}>{proj.date}</span>
                  </div>
                  <div className={styles.metaGroup}>
                    <span className="tech-label">{proj.label}</span>
                  </div>
                </div>

                <p className={styles.desc}>{proj.lorem}</p>

                <ul className={styles.tagList} aria-label="Technologies used">
                  {proj.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary"
                  >
                    View on GitHub <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
