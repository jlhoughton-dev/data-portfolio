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
          <h1 className={styles.heroTitle}>Hi, I’m Jessica 👋</h1>
          <div className={styles.badgeWrap}>
            <span className={styles.badge}>Workforce Intelligence • Business Operations • Data Architecture</span>
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.heroSubtitle}>
            I connect frontline operations to executive strategy through better data, stronger models, and clearer communication.
          </p>
          <h2 className={styles.heroContextTitle}>Making the Work Visible</h2>
          <p className={styles.heroContext}>
            This site is a way to make my skills and working approach visible. Much of my previous work was created in internal systems and cannot be shared as a traditional portfolio, so I built these projects to create concrete artifacts that demonstrate how I think, model data, and communicate insights.
          </p>
          <Link className={styles.behindWorkLink} to="/docs/behind-the-work">
            <span className={styles.behindWorkEyebrow}>Curious how this came together?</span>
            <span className={styles.behindWorkTitle}>How I Built This <span aria-hidden="true">→</span></span>
            <span className={styles.behindWorkDescription}>From a blank workspace to BigQuery, SQL models, and business-ready reporting.</span>
          </Link>
        </div>

        <div className={styles.sectionContainer} id="projects">
          <h2 className={styles.sectionTitle}>Data foundations that support better decisions</h2>
          <p className={styles.sectionDesc}>
            I build the systems and narratives that make operational performance easier to understand and easier to act on.
          </p>

          <div className={styles.cardGrid}>
            <Link className={styles.cardLink} to="/docs/data-pipelines-and-sql-models">
              <div className={styles.card}>
              <div className={styles.cardIcon}>📊</div>
              <h3>Data Pipelines & SQL Models</h3>
              <p>Clean, modular transformations that create reliable foundations for analysis and reporting.</p>
              </div>
            </Link>

            <Link className={styles.cardLink} to="/docs/workforce-intelligence">
              <div className={styles.card}>
              <div className={styles.cardIcon}>👥</div>
              <h3>Workforce Intelligence</h3>
              <p>Operational metrics and staffing models that help teams understand workload, capacity, and performance.</p>
              </div>
            </Link>

            <Link className={styles.cardLink} to="/docs/executive-reporting">
              <div className={styles.card}>
              <div className={styles.cardIcon}>📈</div>
              <h3>Executive Reporting</h3>
              <p>Dashboards and business narratives that translate technical data into clear strategic insight.</p>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3>Want to see how the work is structured behind the scenes?</h3>
          <p>
            Explore the models, SQL, and reporting foundations behind these projects.
          </p>
          <div className={styles.heroButtons} style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link className={styles.primaryButton} to="https://github.com/jlhoughton-dev/data-portfolio" target="_blank">
              View GitHub Repository
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}