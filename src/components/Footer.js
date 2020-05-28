import React from "react"
import footerStyle from "../components/footer.module.css"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={footerStyle.footer}>
      <p>copyright &copy; 2020 {data.site.siteMetadata.author}</p>
    </div>
  )
}

export default Footer
