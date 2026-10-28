"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./TerminalCard.module.css";

interface TerminalItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

const INITIAL_ITEMS: TerminalItem[] = [
  {
    id: "init-whoami",
    command: "whoami",
    output: (
      <span>
        <strong className={styles.outputHighlight}>Parth Pancholi</strong> —
        Quantitative Developer at{" "}
        <span className={styles.outputHighlight}>Ksan Relay</span>.
      </span>
    ),
  },
  {
    id: "init-focus",
    command: "cat focus.txt",
    output: (
      <span>
        → Sub-microsecond execution &amp; lock-free order matching
        <br />
        → Stochastic modeling &amp; jump-diffusion estimation
        <br />
        → Zero-allocation binary wire protocols
      </span>
    ),
  },
  {
    id: "init-status",
    command: "status --live",
    output: (
      <span className={styles.outputDim}>
        [SYS] Engine: Ksan Relay // Low-Latency Infrastructure
        <br />
        [SYS] Stack: C++20 · SIMD · Rust · TypeScript
        <br />
        [SYS] Status: Available for select quantitative research &amp; engineering
      </span>
    ),
  },
];

export default function TerminalCard() {
  const [history, setHistory] = useState<TerminalItem[]>(INITIAL_ITEMS);
  const [inputVal, setInputVal] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const id = `${Date.now()}-${Math.random()}`;

    if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let output: React.ReactNode = null;

    if (lower === "whoami") {
      output = (
        <span>
          <strong className={styles.outputHighlight}>Parth Pancholi</strong>.
          Quantitative Developer at Ksan Relay. Building deterministic,
          data-driven systems.
        </span>
      );
    } else if (lower === "about") {
      output = (
        <span>
          I specialise in quantitative development — designing low-latency
          infrastructure, numerical computing pipelines, and full-stack
          engineering with mathematical rigor.
        </span>
      );
    } else if (lower === "skills" || lower === "stack") {
      output = (
        <span>
          <strong className={styles.outputHighlight}>Languages:</strong> C++20,
          Rust, Python, TypeScript, Go, SQL
          <br />
          <strong className={styles.outputHighlight}>Quantitative:</strong>{" "}
          Stochastic Calculus, Time Series (ACF/PACF), Monte Carlo, Order Book
          Dynamics
          <br />
          <strong className={styles.outputHighlight}>Systems:</strong> SIMD
          (AVX-512), eBPF, Kernel-Bypass, Lock-Free Concurrency, Docker
        </span>
      );
    } else if (lower === "projects" || lower === "work") {
      output = (
        <span>
          <strong className={styles.outputHighlight}>Top Quantitative Systems:</strong>
          <br />
          1. <strong className={styles.outputHighlight}>ksan-orderbook</strong>{" "}
          — Lock-free L3 order matching engine (C++20)
          <br />
          2. <strong className={styles.outputHighlight}>stoch-diff</strong> —
          Jump-diffusion Euler-Maruyama simulator (Rust)
          <br />
          3. <strong className={styles.outputHighlight}>arbitrage-mesh</strong>{" "}
          — Spatial triangular arbitrage router (Go)
          <br />
          4. <strong className={styles.outputHighlight}>timeseries-quant</strong>{" "}
          — Real-time autocorrelation pipeline (Python)
          <br />
          <span className={styles.outputDim} style={{ display: "block", marginTop: 8 }}>
            Click on the &quot;View Projects&quot; button above to see the rest of the projects.
          </span>
        </span>
      );
    } else if (lower === "contact" || lower === "email") {
      output = (
        <span>
          Email:{" "}
          <a
            href="mailto:dev.parthpancholi@outlook.com"
            style={{ textDecoration: "underline", color: "var(--fg)" }}
          >
            dev.parthpancholi@outlook.com
          </a>
          <br />
          GitHub:{" "}
          <a
            href="https://github.com/pizzaparth"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "var(--fg)" }}
          >
            github.com/pizzaparth
          </a>
        </span>
      );
    } else if (lower === "github") {
      output = (
        <span>
          GitHub:{" "}
          <a
            href="https://github.com/pizzaparth"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "var(--fg)" }}
          >
            https://github.com/pizzaparth
          </a>
        </span>
      );
      window.open("https://github.com/pizzaparth", "_blank");
    } else if (lower === "help") {
      output = (
        <span>
          Available commands:
          <br />
          &bull; <strong className={styles.outputHighlight}>whoami</strong> —
          Identity &amp; role
          <br />
          &bull; <strong className={styles.outputHighlight}>about</strong> —
          Engineering background
          <br />
          &bull; <strong className={styles.outputHighlight}>skills</strong> —
          Languages, tools &amp; domains
          <br />
          &bull; <strong className={styles.outputHighlight}>projects</strong> —
          Top quantitative systems
          <br />
          &bull; <strong className={styles.outputHighlight}>contact</strong> —
          Email and GitHub links
          <br />
          &bull; <strong className={styles.outputHighlight}>clear</strong> —
          Clear terminal history
        </span>
      );
    } else {
      output = (
        <span className={styles.outputDim}>
          zsh: command not found: {raw}. Type &apos;help&apos; for available
          commands.
        </span>
      );
    }

    setHistory((prev) => [...prev, { id, command: raw, output }]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  return (
    <div
      className={styles.terminal}
      onClick={() => inputRef.current?.focus()}
      role="region"
      aria-label="Interactive Developer Console"
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.controls} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <span className={styles.title}>parth@ksan-relay: ~ (zsh)</span>
        <div className={styles.status}>
          <span className={styles.statusDot} />
          <span>LIVE</span>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body} ref={bodyRef}>
        <div className={styles.history}>
          {history.map((item) => (
            <div key={item.id} className={styles.entry}>
              <div className={styles.promptLine}>
                <span className={styles.promptUser}>parth@ksan-relay ~</span>
                <span className={styles.promptSymbol}>%</span>
                <span className={styles.command}>{item.command}</span>
              </div>
              <div className={styles.output}>{item.output}</div>
            </div>
          ))}
        </div>

        {/* Prompt Input Form */}
        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <span className={styles.promptUser}>parth@ksan-relay ~</span>
          <span className={styles.promptSymbol}>%</span>
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help' or click shortcuts below..."
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>

      {/* Quick shortcuts */}
      <div className={styles.shortcuts}>
        <span className={styles.shortcutLabel}>Quick:</span>
        <button
          type="button"
          className={styles.chip}
          onClick={(e) => {
            e.stopPropagation();
            runCommand("whoami");
          }}
        >
          whoami
        </button>
        <button
          type="button"
          className={styles.chip}
          onClick={(e) => {
            e.stopPropagation();
            runCommand("skills");
          }}
        >
          skills
        </button>
        <button
          type="button"
          className={styles.chip}
          onClick={(e) => {
            e.stopPropagation();
            runCommand("projects");
          }}
        >
          projects
        </button>
        <button
          type="button"
          className={styles.chip}
          onClick={(e) => {
            e.stopPropagation();
            runCommand("contact");
          }}
        >
          contact
        </button>
        <button
          type="button"
          className={styles.chip}
          onClick={(e) => {
            e.stopPropagation();
            runCommand("clear");
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
}
