// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Portfolio',
      items: ['intro', 'how-work-comes-in', 'request-vs-reality'],
    },
    {
      type: 'category',
      label: 'Case Studies',
      items: [
        'data-pipelines-and-sql-models',
        'workforce-intelligence',
        'executive-reporting',
      ],
    },
    {
      type: 'category',
      label: 'Technical Foundations',
      items: ['dbt-bigquery-setup', 'version-history'],
    },
  ],
};

export default sidebars;
