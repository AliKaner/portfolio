"use client";

import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import styles from "./page.module.scss";

const HireMePage: React.FC = () => {
  const [isRaining, setIsRaining] = React.useState(false);
  const [rainKey, setRainKey] = React.useState(0);
  const [coins, setCoins] = React.useState<
    Array<{
      id: number;
      left: number;
      delayMs: number;
      durationMs: number;
      scale: number;
    }>
  >([]);

  const handleClick = () => {
    const coinCount = 40;
    const generated = Array.from({ length: coinCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delayMs: Math.floor(Math.random() * 1200),
      durationMs: 2400 + Math.floor(Math.random() * 2000),
      scale: 0.6 + Math.random() * 0.8,
    }));
    setCoins(generated);
    setIsRaining(true);
    setRainKey((k) => k + 1);

    const maxEndMs = Math.max(
      ...generated.map((g) => g.delayMs + g.durationMs)
    );
    window.setTimeout(() => {
      window.open(
        "https://www.linkedin.com/in/alikaner/",
        "_blank",
        "noopener,noreferrer"
      );
    }, maxEndMs + 200);

    window.setTimeout(() => {
      setIsRaining(false);
      setCoins([]);
    }, maxEndMs + 600);
  };

  return (
    <MainLayout>
      <div className={styles.page}>
        <button
          className={styles.hireButton}
          onClick={handleClick}
          aria-label="Hire me"
        >
          HIRE ME
        </button>
        {isRaining && (
          <div key={rainKey} className={styles.coinRain} aria-hidden>
            {coins.map((c) => (
              <span
                key={c.id}
                className={styles.coin}
                style={{
                  left: `${c.left}%`,
                  animationDelay: `${c.delayMs}ms`,
                  animationDuration: `${c.durationMs}ms`,
                  transform: `scale(${c.scale})`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default HireMePage;
