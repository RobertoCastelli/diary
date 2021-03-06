import React from "react"
import headerStyle from "../components/header.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={headerStyle.container}>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        <i>
          reinvent yourself as a{" "}
          <span className={headerStyle.headerSpan}>Web Developer</span> at 42
          years old
        </i>
      </p>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              to="/"
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
