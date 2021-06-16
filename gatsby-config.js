module.exports = {
  siteMetadata: {
    title: 'Balthazar Fumoir',
    titleTemplate: 'Balthazar Fumoir',
    description: 'Le Balthazar Fumoir est une épicerie fine et un restaurant',
    url: 'https://balthazar.fr', // No trailing slash allowed!
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-json',
  ],
};
