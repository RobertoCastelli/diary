import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog
