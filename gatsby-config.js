module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          dark: true,
          showFooter: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Salem Aziel Mackintosh-Benitez`,
        short_name: `Salem Mackintosh`,
        start_url: `/`,
        background_color: `#2b6cb0`,
        theme_color: `#2b6cb0`,
        display: `minimal-ui`,
        icon: 'src/images/Via-Del-Web-logo-only.png'
      },
    },
  ]
};

