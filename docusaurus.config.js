// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Portfolio',
  tagline: 'Professional data engineering and analytics portfolio',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jlhoughton-dev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/data-portfolio/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jlhoughton-dev', // Usually your GitHub org/user name.
  projectName: 'data-portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jlhoughton-dev/data-portfolio/tree/main/',
        },
        blog: false, // Disabled blog for a clean professional portfolio focus
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Data Portfolio',
        logo: {
          alt: 'Data Portfolio home',
          src: 'img/visual-1.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {
            label: 'Portfolio',
            position: 'left',
            items: [
              {to: '/docs/intro', label: 'Overview'},
              {to: '/docs/how-work-comes-in', label: 'Intake Flow'},
              {to: '/docs/request-vs-reality', label: 'Request vs Reality'},
            ],
          },
          {
            label: 'Case Studies',
            position: 'left',
            items: [
              {to: '/docs/data-pipelines-and-sql-models', label: 'Data Pipelines & SQL Models'},
              {to: '/docs/workforce-intelligence', label: 'Workforce Intelligence'},
              {to: '/docs/executive-reporting', label: 'Executive Reporting'},
            ],
          },
          {
            label: 'Technical Foundations',
            position: 'left',
            items: [
              {to: '/docs/dbt-bigquery-setup', label: 'dbt + BigQuery'},
              {to: '/docs/behind-the-work', label: 'Behind the Work'},
              {to: '/docs/version-history', label: 'Version History'},
            ],
          },
          {
            href: 'https://github.com/jlhoughton-dev/data-portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Documentation Hub',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Repository',
            items: [
              {
                label: 'GitHub Source',
                href: 'https://github.com/jlhoughton-dev/data-portfolio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Data Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;