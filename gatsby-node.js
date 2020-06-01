const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // Create slug from Node JS basename
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // Create node field --> Assign slug
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Query slug $ tags
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tag.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  const posts = res.data.allMarkdownRemark.edges

  // 1. Create blog page
  // 2. Give Path to page
  // 3. Give Context to variable based on slug
  posts.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  // 1. Create tags filtered page
  // 2. Give Path to page
  // 3. Give Context to variable based on tag
  posts.forEach(edge => {
    edge.node.frontmatter.tags.forEach(tag => {
      createPage({
        component: tagTemplate,
        path: `/tags/${tag}`,
        context: {
          tag: `${tag}`,
        },
      })
    })
  })
}
