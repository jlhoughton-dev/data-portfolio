import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Data Portfolio & Hub"
      description="Workforce intelligence, business operations, and data architecture portfolio">

      <main className={styles.heroMain}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Workforce Intelligence | Business Operations | Data Architecture</span>
          <h1 className={styles.heroTitle}>Operational Data, Clearer Decisions</h1>
          <p className={styles.heroSubtitle}>
            I help organizations connect frontline execution to executive strategy through better data,
            stronger models, and clearer communication. My work sits at the intersection of business
            operations, workforce intelligence, and data architecture—turning raw operational data into
            insight that drives action.
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
          <h2 className={styles.sectionTitle}>Data foundations that support better decisions</h2>
          <p className={styles.sectionDesc}>
            I build the systems and narratives that make operational performance easier to understand and easier to act on.
          </p>

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📊</div>
              <h3>Data Pipelines & SQL Models</h3>
              <p>Clean, modular transformations that create reliable foundations for analysis and reporting.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>👥</div>
              <h3>Workforce Intelligence</h3>
              <p>Operational metrics and staffing models that help teams understand workload, capacity, and performance.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <h3>Executive Reporting</h3>
              <p>Dashboards and business narratives that translate technical data into clear strategic insight.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3>Want to see how the work is structured behind the scenes?</h3>
          <p>
            I document the full lifecycle of the work—from raw data to modeling, reporting, and business decision support—so the technical foundation is as clear as the business outcome.
          </p>
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
