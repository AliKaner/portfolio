"use client";

import React, { useState } from "react";
import MainLayout from "../../../../components/layouts/MainLayout";
import styles from "./page.module.scss";

const CalculatorPage: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
  const [parenthesesCount, setParenthesesCount] = useState(0);
  const [calculationLog, setCalculationLog] = useState<string[]>([]);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + " " + op + " ");
    setShouldResetDisplay(true);
  };

  const handleParentheses = () => {
    if (parenthesesCount % 2 === 0) {
      // Opening parenthesis
      setDisplay(display === "0" ? "(" : display + "(");
      setParenthesesCount(parenthesesCount + 1);
    } else {
      // Closing parenthesis
      setDisplay(display + ")");
      setParenthesesCount(parenthesesCount + 1);
    }
  };

  const handleSquare = () => {
    const num = parseFloat(display);
    if (!isNaN(num)) {
      setDisplay(String(num * num));
      setShouldResetDisplay(true);
    }
  };

  const handleSquareRoot = () => {
    const num = parseFloat(display);
    if (!isNaN(num) && num >= 0) {
      setDisplay(String(Math.sqrt(num)));
      setShouldResetDisplay(true);
    }
  };

  const handleEqual = () => {
    try {
      const fullEquation = equation + display;
      const result = eval(fullEquation);
      const logEntry = `${fullEquation} = ${result}`;
      setCalculationLog((prev) => [logEntry, ...prev.slice(0, 9)]); // Keep last 10 entries
      setDisplay(String(result));
      setEquation("");
      setShouldResetDisplay(true);
      setParenthesesCount(0);
    } catch (error) {
      setDisplay("Error");
      setShouldResetDisplay(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setShouldResetDisplay(false);
    setParenthesesCount(0);
  };

  const clearLog = () => {
    setCalculationLog([]);
  };

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Calculator</h1>
          <p>A simple calculator with basic operations</p>
        </div>

        <div className={styles.calculatorContainer}>
          <div className={styles.calculator}>
            <div className={styles.display}>
              <div className={styles.equation}>{equation}</div>
              <div className={styles.current}>{display}</div>
            </div>

            <div className={styles.buttons}>
              <button onClick={handleClear} className={styles.clear}>
                C
              </button>
              <button onClick={handleParentheses} className={styles.function}>
                ( )
              </button>
              <button onClick={handleSquare} className={styles.function}>
                x²
              </button>
              <button onClick={handleSquareRoot} className={styles.function}>
                √
              </button>

              <button
                onClick={() => handleNumber("7")}
                style={{ gridArea: "seven" }}
              >
                7
              </button>
              <button
                onClick={() => handleNumber("8")}
                style={{ gridArea: "eight" }}
              >
                8
              </button>
              <button
                onClick={() => handleNumber("9")}
                style={{ gridArea: "nine" }}
              >
                9
              </button>
              <button
                onClick={() => handleOperator("/")}
                className={styles.operator}
                style={{ gridArea: "divide" }}
              >
                ÷
              </button>

              <button
                onClick={() => handleNumber("4")}
                style={{ gridArea: "four" }}
              >
                4
              </button>
              <button
                onClick={() => handleNumber("5")}
                style={{ gridArea: "five" }}
              >
                5
              </button>
              <button
                onClick={() => handleNumber("6")}
                style={{ gridArea: "six" }}
              >
                6
              </button>
              <button
                onClick={() => handleOperator("*")}
                className={styles.operator}
                style={{ gridArea: "multiply" }}
              >
                ×
              </button>

              <button
                onClick={() => handleNumber("1")}
                style={{ gridArea: "one" }}
              >
                1
              </button>
              <button
                onClick={() => handleNumber("2")}
                style={{ gridArea: "two" }}
              >
                2
              </button>
              <button
                onClick={() => handleNumber("3")}
                style={{ gridArea: "three" }}
              >
                3
              </button>
              <button
                onClick={() => handleOperator("-")}
                className={styles.operator}
                style={{ gridArea: "subtract" }}
              >
                -
              </button>

              <button onClick={() => handleNumber("0")} className={styles.zero}>
                0
              </button>
              <button
                onClick={() => handleNumber(".")}
                style={{ gridArea: "decimal" }}
              >
                .
              </button>
              <button
                onClick={handleEqual}
                className={styles.equal}
                style={{ gridArea: "equal" }}
              >
                =
              </button>
              <button
                onClick={() => handleOperator("+")}
                className={styles.operator}
                style={{ gridArea: "add" }}
              >
                +
              </button>
            </div>
          </div>

          {calculationLog.length > 0 && (
            <div className={styles.log}>
              <div className={styles.logHeader}>
                <h3>Calculation History</h3>
                <button onClick={clearLog} className={styles.clearLog}>
                  Clear
                </button>
              </div>
              <div className={styles.logContent}>
                {calculationLog.map((entry, index) => (
                  <div
                    key={index}
                    className={styles.logEntry}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default CalculatorPage;
