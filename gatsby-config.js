module.exports = {
  siteMetadata: {
    title: 'React Vancouver',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: '019o3pe3du31',
    //     accessToken:
    //       '5d11a0074d873bf55ecd8729a9afde231634ea2445b84d9c62dad3abbbd6ee88',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-eslint',
  ],
}
