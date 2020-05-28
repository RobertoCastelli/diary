import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyle from "../pages/blog.module.css"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___data }) {
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
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol className={blogStyle.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id} className={blogStyle.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h1>{edge.node.frontmatter.title}</h1>
                <p>{edge.node.frontmatter.data}</p>
                <p>{edge.node.timeToRead} min read</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
