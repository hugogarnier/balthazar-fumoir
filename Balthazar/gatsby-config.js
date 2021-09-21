module.exports = {
  siteMetadata: {
    title: 'Balthazar Fumoir',
    titleTemplate: 'Balthazar Fumoir',
    description: 'Le Balthazar Fumoir est une épicerie fine et un restaurant',
    url: 'https://balthazar.fr',
    siteUrl: 'https://balthazar.fr',
    image: '/images/exter.jpg', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Balthazar Fumoir',
        short_name: 'Balthazar',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/favicon-16x16.png',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-json',
  ],
};
