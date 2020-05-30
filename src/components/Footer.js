import React from "react"
import footerStyle from "../components/footer.module.css"
import { graphql, useStaticQuery } from "gatsby"
import { GrLinkedinOption } from "react-icons/gr"
import { FaGithub, FaGlobe } from "react-icons/fa"

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
      <ul className={footerStyle.footerList}>
        <li className={footerStyle.footerItem}>
          <a
            href="https://robertocastelli.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
        </li>
        <li className={footerStyle.footerItem}>
          <a
            href="https://www.linkedin.com/in/roberto-castelli-teal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </a>
        </li>
        <li className={footerStyle.footerItem}>
          <a
            href="https://github.com/RobertoCastelli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
      <p>copyright &copy; 2020 {data.site.siteMetadata.author}</p>
    </div>
  )
}

export default Footer
