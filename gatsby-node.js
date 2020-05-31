const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // Create slug from Node Js basename
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // Create field --> Get slug
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// 1. Get path to template
// 2. Get markdown data
// 3. Create new pages

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

  posts.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  createPage({
    component: tagTemplate,
    path: `/tag`,
    context: {
      tag: "javascript",
    },
  })
}
