import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyle from "../pages/blog.module.css"
import Head from "../components/Head"

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
        pageInfo {
          totalCount
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <p>total posts: n°{data.allMarkdownRemark.pageInfo.totalCount}</p>
      <ol className={blogStyle.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id} className={blogStyle.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <p>{edge.node.frontmatter.data}</p>
                <p>{edge.node.timeToRead} min read</p>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.intro}</p>
                <ul className={blogStyle.tagList}>
                  {edge.node.frontmatter.tags.map(tag => (
                    <li className={blogStyle.tagItem}>{tag}</li>
                  ))}
                </ul>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
