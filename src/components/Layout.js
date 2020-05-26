import React from "react"
import Footer from "./Footer.js"
import Header from "./Header.js"
import layoutStyle from "../components/layout.module.css"

const Layout = props => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
