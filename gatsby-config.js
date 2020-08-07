// eslint-disable

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TESTS',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        // icon: 'static/assets/android-chrome-512x512.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'people',
        path: `${__dirname}/src/people`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'caseStudies',
        path: `${__dirname}/src/case-studies`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
