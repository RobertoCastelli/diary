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
        <Img fluid={data.file.childImageSharp.fluid} />
        <div className={indexStyle.indexContent}>
          <p>
            Hi, my name is Roberto and I'm a 42 y.o. Project Manager, wannabe
            Web Developer.
          </p>
          <p>
            Since I was a youngster I had a passion for programming languages. I
            recently asked myself: why not bring into fruition my avid interest
            in this field to enhance my career?
          </p>
          <p>
            I began putting every possible effort to achieve this goal (and
            still continuing to do so) once I decided to pursue this path.
          </p>
          <p>
            This blog is a story in continuous evolution to keep track of my
            progress, paths, errors, achievements in the hopes of helping other
            people to share this adventure.
          </p>
          <p>
            Special thanks to{" "}
            <a
              href="https://jagasantagostino.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={indexStyle.indexSpan}>Jaga Santagostino</span>
            </a>
            , my mentor.
          </p>
        </div>
      </Layout>
    </>
  )
}
