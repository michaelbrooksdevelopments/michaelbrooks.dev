const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
    tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'Michael Brooks Developments',
    icon: {
        favicon: {
            src: './src/favicons/favicon.png',
            sizes: [16, 32, 96]
        },
        touchicon: {
            src: './src/favicons/apple-icon.png',
            sizes: [57, 60, 72, 76, 114, 120, 144, 152, 180],
            precomposed: true
        }
    },
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
                icon: 'src/favicons/favicon.png',
                msTileImage: '/favicons/ms-icon-70x70.png',
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
