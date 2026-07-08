import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Governed, Not Drifting',
    description: (
      <>
        The site is anchored by a constitutional layer of project documents so
        future articles, architecture changes, and editorial decisions remain
        coherent over time.
      </>
    ),
  },
  {
    title: 'Built for a Knowledge Base',
    description: (
      <>
        Catholic Veritas is being structured as a long-term reference library,
        with clear navigation, reusable categories, and room to grow into
        thousands of articles without collapsing into duplication.
      </>
    ),
  },
  {
    title: 'Repo-Driven Publishing',
    description: (
      <>
        Content, governance, and site structure live in version-controlled
        files, making the project easier to maintain, audit, and publish
        through GitHub Pages.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureInner}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
