import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import blogStyle from "../pages/blog.module.css"
import Head from "../components/Head"

// Query tags with filter on tag
export const queryTag = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { order: DESC, fields: frontmatter___data }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            data
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

const TagPost = props => {
  return (
    <Layout>
      <Head title="Blog" />
      <p>total posts: {props.data.allMarkdownRemark.pageInfo.totalCount}</p>
      <div className={blogStyle.tagContent}>
        <ul className={blogStyle.tagList}>
          {props.data.allMarkdownRemark.group.map(field => {
            return (
              <li key={field.fieldValue} className={blogStyle.tagItem}>
                {field.fieldValue}:{" "}
                <span className={blogStyle.tagCounter}>{field.totalCount}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <ol className={blogStyle.posts}>
        {props.data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id} className={blogStyle.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <p>{edge.node.frontmatter.data}</p>
                <p>{edge.node.timeToRead} min read</p>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.intro}</p>
              </Link>
              <ul className={blogStyle.tagList}>
                {edge.node.frontmatter.tags.map(tag => (
                  <Link to={`tags/${tag}`}>
                    <li key={tag} className={blogStyle.tagItem}>
                      {tag}
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default TagPost
