<<<<<<< HEAD
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function About({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>{data.site.siteMetadata.body.content}</h1>
    </Layout>
  );
=======

import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

export default function About({data}) {
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn more about Code space methodology"
      />
      <h1>{process.env.BASE_URL}</h1>
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>{data.site.siteMetadata.body.content}</h1>
    </Layout>
  )
>>>>>>> 119c30a496581c760b5bd80dc46b24b9cd5dc582
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> 119c30a496581c760b5bd80dc46b24b9cd5dc582
