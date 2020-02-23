import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"

import classes from "./brand.module.css"

const Brand = () => {
  const data = useStaticQuery(graphql`
    query {
      brandImage: file(relativePath: { eq: "brand.png" }) {
        childImageSharp {
          fluid(maxWidth: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link className={classes.root} to={"/"}>
      <Img
        className={classes.image}
        fluid={data.brandImage.childImageSharp.fluid}
      />
    </Link>
  )
}

export default Brand
