import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Catholic apologetics and theology</p>
          <Heading as="h1" className={styles.heroTitle}>
            Catholic Veritas
          </Heading>
          <p className={styles.heroSubtitle}>
            A long-term Catholic knowledge base built to explain, defend, and
            preserve the faith through Scripture, Sacred Tradition, history,
            reason, and the teaching authority of the Church.
          </p>
          <div className={styles.actions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/knowledge-base">
              Explore the Knowledge Base
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/PROJECT_CONTEXT">
              Read the Governance Layer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Catholic apologetics knowledge base"
      description="Catholic Veritas is a long-term Catholic apologetics and theological knowledge base published as a structured, repo-driven Docusaurus site.">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <section className={styles.overviewSection}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <div className={styles.overviewCopy}>
                <Heading as="h2">Why this foundation matters</Heading>
                <p>
                  This site is being built as a durable reference library, not
                  as a stream of disconnected posts. The structure starts with
                  governance, research standards, and content architecture so
                  future growth remains orderly and trustworthy.
                </p>
              </div>
              <div className={styles.overviewPanel}>
                <Heading as="h3">Current foundation</Heading>
                <ul>
                  <li>Project governance documents are published as first-class docs.</li>
                  <li>The knowledge base has a dedicated section for future articles.</li>
                  <li>GitHub Pages deployment is preconfigured for a free static site workflow.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
