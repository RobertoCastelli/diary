import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___data], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const BlogList = props => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.field.slug
        return <div key={node.fields.slug}>{title}</div>
      })}
    </Layout>
  )
}
export default BlogList
