import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Data Portfolio & Hub"
      description="Professional data engineering pipelines and architecture portfolio">
      
      <main className={styles.heroMain}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Data Engineer & Analyst</span>
          <h1 className={styles.heroTitle}>Transforming Raw Data Into Reliable Insights</h1>
          <p className={styles.heroSubtitle}>
            Welcome to my technical portfolio. I build scalable data pipelines, clean analytical models, 
            and automated workflows. Designed here for clear visibility into my code and projects.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.primaryButton} to="#projects">
              Explore Projects
            </Link>
            <Link className={styles.secondaryButton} to="https://github.com/jlhoughton-dev/data-portfolio" target="_blank">
              View GitHub Repository
            </Link>
          </div>
        </div>

        <div className={styles.sectionContainer} id="projects">
          <h2 className={styles.sectionTitle}>Featured Architecture & Pipelines</h2>
          <p className={styles.sectionDesc}>
            Here is a breakdown of the core systems housed inside this repository.
          </p>

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📊</div>
              <h3>Data Pipelines & SQL Models</h3>
              <p>Automated ingestion, transformation layers, and analytical models built to keep metrics consistent and clean.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>⚙️</div>
              <h3>System Architecture</h3>
              <p>End-to-end documentation mapping out data flow, storage decisions, and structural design choices.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <h3>Reporting & Dashboards</h3>
              <p>Visual layers translating backend data into actionable business intelligence and metrics tracking.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3>Want to dive deeper into the code?</h3>
          <p>You can check out the structured documentation pages or inspect the raw repository directly.</p>
          <div className={styles.heroButtons} style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Read Documentation Hub
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}