"use client";

import React, { useState, useEffect } from "react";
import MainLayout from "../../../../components/layouts/MainLayout";
import styles from "./page.module.scss";

const WhatIsMyIpPage: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (err) {
        setError("Failed to fetch IP address");
      } finally {
        setLoading(false);
      }
    };

    fetchIpAddress();
  }, []);

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Loading your IP address...</p>
            </div>
          ) : error ? (
            <div className={styles.error}>
              <p>{error}</p>
            </div>
          ) : (
            <div className={styles.ipDisplay}>
              <h1>Your IP Address</h1>
              <div className={styles.ipAddress}>{ipAddress}</div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default WhatIsMyIpPage;
