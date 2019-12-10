import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import App from '../../components/App';
import SEO from '../../components/seo';

import Layout from "../../components/layout"

const MdxLayout = ({ data: { mdx } }) => {
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <App title={mdx.frontmatter.title}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </App>
    </>
  )
}

export const pageQuery = graphql`
  query MDXPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

Layout.propTypes = {
  data: PropTypes.node.isRequired,
}

export default MdxLayout
