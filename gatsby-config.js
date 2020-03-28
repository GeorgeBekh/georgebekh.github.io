module.exports = {
  siteMetadata: {
    title: `George Bekh-Ivanov`,
    description: `George Bekh-Ivanov, a web developer. Résumé and work experience.`,
    author: `George Bekh-Ivanov`,
    languages: ["ru", "en", "fr"],
    defaultLanguage: "en",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`ru`, `en`, `fr`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
}
