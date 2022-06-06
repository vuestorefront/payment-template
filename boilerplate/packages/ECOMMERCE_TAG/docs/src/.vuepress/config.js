<%_ if (MISC_ENTERPRISE) { _%>
const GTM_TAG = 'GTM-XXXXXXX'; // TODO
<%_ } _%>
const { description } = require('../../package.json')

module.exports = {
  title: 'Vue Storefront - <%= PAYMENT_NAME %> integration for <%= ECOMMERCE_NAME %>',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#5fd27d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

    <%_ if (MISC_ENTERPRISE) { _%>
    // Google Tag Manager
    ['script', {}, [`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_TAG}');
    `]],
    <%_ } _%>
  ],
  themeConfig: {
    <%_ if (MISC_ENTERPRISE) { _%>
    GTM_TAG,
    <%_ } _%>
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
