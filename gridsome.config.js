const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Michael Brooks Developments',
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: 'https://analytics.michaelbrooks.dev',
        siteId: 2
      }
    },
    {
        use: 'gridsome-plugin-pwa',
        options: {
            title: 'Michael Brooks Developments',
            startUrl: '/',
            display: 'standalone',
            statusBarStyle: 'default',
            manifestPath: 'manifest.json',
            disableServiceWorker: false,
            serviceWorkerPath: 'service-worker.js',
            cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
            shortName: 'MB Developments',
            themeColor: '#4FD1C5',
            backgroundColor: '#ffffff',
            icon: 'src/favicon.png',
            msTileImage: '',
            msTileColor: '#4FD1C5'
          }
      }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
