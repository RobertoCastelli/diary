module.exports = {
  siteMetadata: {
    title: `Diary of an impostor`,
    author: `Roberto Castelli`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
