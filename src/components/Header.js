import React from "react"
import headerStyle from "../components/header.module.css"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className={headerStyle.container}>
      <h1>Diary of an impostor</h1>
      <p>
        <i>reinvent yourself at 42 years old</i>
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
            <a
              href="http://https://robertocastelli.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
            >
              official site
            </a>
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
