const { description } = require('../../package.json')

module.exports = {
  title: 'Vue Storefront - <%= PAYMENT_NAME %> integration for <%= ECOMMERCE_NAME %>',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#5fd27d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [],
    sidebar: {
      '/': [
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            ['/', 'Introduction'],
            ['/guide/installation', 'Installation']
          ],
        },
        {
          title: 'Reference',
          collapsable: false,
          children: [
            ['/reference/changelog', 'Changelog']
          ],
        }
      ],
    },
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
