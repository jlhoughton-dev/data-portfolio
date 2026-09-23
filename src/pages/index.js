import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const updates = [
  {
    date: 'Updated Sept 21, 2026',
    title: 'New framework: Stakeholder Management',
    summary: 'A practical framework for translating ambiguous stakeholder requests into clear business needs, reliable data models, and useful decisions.',
    link: '/docs/request-vs-reality',
    linkLabel: 'View stakeholder framework',
  },
  {
    date: 'Updated Sept 8, 2026',
    title: 'New workflow: dbt + BigQuery',
    summary: 'I recently added a lightweight dbt workflow to model raw Chinook data into cleaner, testable layers for workforce and operational analysis.',
    link: '/docs/dbt-bigquery-setup',
    linkLabel: 'Explore the dbt setup',
  },
];

export default function Home() {
  const [activeUpdate, setActiveUpdate] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveUpdate((currentUpdate) => (currentUpdate + 1) % updates.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const update = updates[activeUpdate];

  return (
    <Layout
      title="Data Portfolio & Hub"
      description="Workforce intelligence, business operations, and data architecture portfolio">

      <main className={styles.heroMain}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Workforce Intelligence | Business Operations | Data Architecture</span>
          <h1 className={styles.heroTitle}>Hi, I'm Jessica 👋</h1>
          <p className={styles.heroSubtitle}>
            I connect frontline operations to executive strategy through better data, stronger models, and clearer communication.
          </p>
          <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: '2rem' }}>
            Much of my previous work was created in internal systems and cannot be shared as a traditional portfolio. I built this repository to create concrete, shareable artifacts that demonstrate how I think, model data, and communicate insights.
          </p>

          <div className={styles.featureSpotlight}>
            <div className={styles.featureBadgeWrap}>
              <span className={styles.featureBadge}>NEW!</span>
              <span className={styles.featureDate}>{update.date}</span>
            </div>
            <h3 className={styles.featureTitle} key={update.title}>{update.title}</h3>
            <p className={styles.featureSummary} key={update.summary}>
              {update.summary}
            </p>
            <Link className={styles.featureLink} to={update.link}>
              {update.linkLabel} <span aria-hidden="true">→</span>
            </Link>
            <div className={styles.updateControls} aria-label="Portfolio updates">
              <button
                className={styles.updateArrow}
                type="button"
                aria-label="Show previous update"
                onClick={() => setActiveUpdate((activeUpdate - 1 + updates.length) % updates.length)}
              >
                ←
              </button>
              <div className={styles.updateDots}>
                {updates.map((item, index) => (
                  <button
                    className={`${styles.updateDot} ${index === activeUpdate ? styles.updateDotActive : ''}`}
                    type="button"
                    aria-label={`Show update ${index + 1}: ${item.title}`}
                    aria-current={index === activeUpdate ? 'true' : undefined}
                    key={item.title}
                    onClick={() => setActiveUpdate(index)}
                  />
                ))}
              </div>
              <button
                className={styles.updateArrow}
                type="button"
                aria-label="Show next update"
                onClick={() => setActiveUpdate((activeUpdate + 1) % updates.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* 2x2 Role Selector Grid Section */}
        <div className={styles.sectionContainer} id="projects">
          <h2 className={styles.sectionTitle}>Explore my work by focus area</h2>
          <p className={styles.sectionDesc}>
            Please check out the specific skill sets, frameworks, and technical models I use to solve business, data and workforce challenges.
          </p>

          {/* Forced 2x2 Grid Container */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.5rem', 
              marginTop: '2rem' 
            }}
          >
            {/* Top-Left: Business Insights & Analysis */}
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 0 }}>
              <div>
                <div className={styles.cardIcon}>📊</div>
                <h3>Business Insights & Analysis</h3>
                <p>Translating messy stakeholder questions into structured KPIs, stakeholder alignment, and actionable business strategy.</p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link className={styles.featureLink} to="/docs/request-vs-reality">
                  View Framework & Strategy <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Top-Right: Data Governance & Analysis */}
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 0 }}>
              <div>
                <div className={styles.cardIcon}>🛡️</div>
                <h3>Data Governance & Analysis</h3>
                <p>Ensuring metric consistency, handling data quality gaps, and building auditable analytical foundations.</p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link className={styles.featureLink} to="/docs/executive-reporting">
                  View Governance Approach <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Bottom-Left: Data Engineering */}
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 0 }}>
              <div>
                <div className={styles.cardIcon}>⚙️</div>
                <h3>Data Engineering</h3>
                <p>Designing modular, layered BigQuery pipelines (staging, intermediate, domain) that transform raw relational data.</p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link className={styles.featureLink} to="/docs/data-pipelines-and-sql-models">
                  View SQL Models <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Bottom-Right: Workforce Management Analysis */}
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 0 }}>
              <div>
                <div className={styles.cardIcon}>⏱️</div>
                <h3>Workforce Management Analysis</h3>
                <p>Connecting employee hierarchy, capacity constraints, workload distribution, and queue efficiency.</p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link className={styles.featureLink} to="/docs/workforce-intelligence">
                  View WFM Case Study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3>Want to see how the work is structured behind the scenes?</h3>
          <p>
            I document the full lifecycle of the work—from raw data to modeling, reporting, and business decision support—so the technical foundation is as clear as the business outcome.
          </p>
          <div className={styles.heroButtons} style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link className={styles.ctaButton} to="/docs/intro">
              Read Documentation Hub
            </Link>
            <Link
              className={styles.ctaButton}
              to="https://github.com/jlhoughton-dev/data-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my GitHub
            </Link>
          </div>
        </div>

        <Link className={styles.versionHistoryLink} to="/docs/version-history">
          <span className={styles.versionHistoryLabel}>Version history</span>
          <span className={styles.versionHistoryDescription}>See how the portfolio has evolved, from its first commit to today.</span>
          <span className={styles.versionHistoryAction}>View patch notes <span aria-hidden="true">→</span></span>
        </Link>
      </main>
    </Layout>
  );
}