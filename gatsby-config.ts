import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Kurz Pecka`,
    siteUrl: `https://kurzpecka.cz`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "none",
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(
          __dirname,
          `src`,
          `images`,
          process.env.GATSBY_SITE ?? ""
        ),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:ital,wght@0,400;0,600;1,400;1,600`,
          `Amatic+SC:wght@700`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/visen.png",
      },
    },
  ],
};

export default config;
