import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const queryTag = graphql`
  query($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            data
            intro
            tags
          }
        }
      }
    }
  }
`

const TagPost = props => {
  return (
    <Layout>
      <div>
        {props.data.allMarkdownRemark.edges.map(edge => {
          return edge.node.frontmatter.title
        })}
      </div>
    </Layout>
  )
}

export default TagPost
