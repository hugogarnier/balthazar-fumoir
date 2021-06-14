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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
