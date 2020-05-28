import React from "react"
import Layout from "../components/Layout"
import "./index.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dune.jpg" }) {
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
        <Img fluid={data.file.childImageSharp.fluid} />
        <div className="home-content">
          <p>
            Hi I'm an impostor, my name is Roberto and I'm a 42 y.o. Project
            Manager.
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
            people to share this adventure. Special thanks to Jaga Santagostino,
            my mentor.
          </p>
        </div>
      </Layout>
    </>
  )
}
