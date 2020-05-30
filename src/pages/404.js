import React from "react"
import Layout from "../components/Layout"
import errorStyle from "./404.module.css"

const PageNotFound = props => {
  return (
    <Layout>
      <div className={errorStyle.content}>
        <h1>Error 404</h1>
        <h3>
          page not found at{" "}
          <span className={errorStyle.path}>{props.location.pathname}</span>
        </h3>
      </div>
    </Layout>
  )
}

export default PageNotFound
