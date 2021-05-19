const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 192
})
require = require('esm')(module);
const { routes } = require('./src/router/index.js');
module.exports = {
    lintOnSave: true,


    css: {

        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        },
    },
    pluginOptions: {
        sitemap: {

            urls: [{
                    loc: 'https://geekpandashare.com/',
                    lastmod: 'March 19, 2021',
                    priority: 1.0,
                    changefreq: 'daily'
                },
                {
                    loc: 'https://geekpandashare.com/home',
                    priority: 0.9,
                    changefreq: 'weekly'
                },
                {
                    loc: 'https://geekpandashare.com/Subscription',
                    priority: 0.9,
                    changefreq: 'daily'
                },
                {
                    loc: 'https://geekpandashare.com/year',
                    priority: 0.8,
                    changefreq: 'weekly'
                },
                {
                    loc: 'https://geekpandashare.com/month',
                    priority: 0.8,
                    changefreq: 'weekly'
                },
                {
                    loc: 'https://geekpandashare.com/quarterly',
                    priority: 0.8,
                    changefreq: 'weekly'
                },
                {
                    loc: 'https://geekpandashare.com/discount',
                    priority: 0.7,
                    changefreq: 'weekly'
                },
            ]

        }
    }

}