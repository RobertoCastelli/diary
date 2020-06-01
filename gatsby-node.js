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
  const blogListTemplate = path.resolve("src/templates/blogList.js")
  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___data], order: DESC }
        limit: 100
      ) {
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

  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blog` : `/blog/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
