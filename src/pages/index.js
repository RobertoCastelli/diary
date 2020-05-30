/**
 * TODO:
 * add like on post
 * add tags page with filter
 * gatsby helmet
 * number of posts
 */

import React from "react"
import Layout from "../components/Layout"
import indexStyle from "./index.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Head from "../components/Head"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "impostor.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Head title="Home" />
        <Img
          className={indexStyle.indexImage}
          fluid={data.file.childImageSharp.fluid}
        />
        <div className={indexStyle.indexContent}>
          <p>
            Hi, my name is Roberto and I'm a 42 y.o. Project Manager, wannabe
            Web Developer.
          </p>
          <p>
            This blog is a story in continuous evolution to keep track of my
            progress, paths, errors, achievements in the hopes of helping other
            people to share this adventure.
          </p>
          <p>Stay tuned!</p>
          <p>
            <strong>
              <i>Roberto</i>
            </strong>
          </p>
        </div>
      </Layout>
    </>
  )
}
