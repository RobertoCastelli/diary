import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              data
              title
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li>
              <Link to={`/blog/${node.fields.slug}`}>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.data}</p>
                <p>time to read: {node.timeToRead}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
