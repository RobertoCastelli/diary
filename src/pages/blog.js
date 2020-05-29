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
              intro
              tags
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
                <p>{edge.node.timeToRead} min read</p>
                <h2>{edge.node.frontmatter.title}</h2>
                <h5>{edge.node.frontmatter.intro}</h5>
                <div className={blogStyle.tags}>
                  <p>{edge.node.frontmatter.data}</p>
                  <ul>
                    {edge.node.frontmatter.tags.map(tag => (
                      <li>{tag}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
