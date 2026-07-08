import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = 'solarb';
const projectName = 'catholic-veritas';

const config: Config = {
  title: 'Catholic Veritas',
  tagline: 'Scripture • Tradition • Truth',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          include: [
            'PROJECT_CONTEXT.md',
            'PROJECT_CONSTITUTION.md',
            'SITE_ARCHITECTURE.md',
            'EDITORIAL_GUIDE.md',
            'AI_OPERATING_MANUAL.md',
            'SOURCE_AUTHORITY.md',
            'RESEARCH_METHODOLOGY.md',
            'CONTENT_BLUEPRINT.md',
            'MASTER_CONTENT_PLAN.md',
            'CONTENT_INDEX.md',
            'CLAIM_CLASSIFICATION.md',
            'ARTICLE_SPECIFICATION.md',
            'SCRIPTURE_INDEX.md',
            'knowledge-base/**/*.md',
          ],
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Catholic Veritas',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Library',
        },
        {
          to: '/docs/knowledge-base',
          label: 'Knowledge Base',
          position: 'left',
        },
        {
          to: '/docs/PROJECT_CONTEXT',
          label: 'Governance',
          position: 'left',
        },
        {
          href: 'https://github.com/solarb/catholic-veritas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Foundations',
          items: [
            {
              label: 'Project Context',
              to: '/docs/PROJECT_CONTEXT',
            },
            {
              label: 'Project Constitution',
              to: '/docs/PROJECT_CONSTITUTION',
            },
          ],
        },
        {
          title: 'Knowledge Base',
          items: [
            {
              label: 'Overview',
              to: '/docs/knowledge-base',
            },
            {
              label: 'Start Here',
              to: '/docs/knowledge-base/start-here',
            },
          ],
        },
        {
          title: 'Planning',
          items: [
            {
              label: 'Master Content Plan',
              to: '/docs/MASTER_CONTENT_PLAN',
            },
            {
              label: 'Site Architecture',
              to: '/docs/SITE_ARCHITECTURE',
            },
            {
              label: 'Content Index',
              to: '/docs/CONTENT_INDEX',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Catholic Veritas. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
