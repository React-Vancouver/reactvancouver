module.exports = {
  siteMetadata: {
    title: 'React Vancouver',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '019o3pe3du31',
        accessToken:
          'ede76a7cd0de9ecd143668c44ead2ef2a642e85f2ea6d6c4ac206f4478556174',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-109965261-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    // 'gatsby-plugin-eslint',
  ],
}
