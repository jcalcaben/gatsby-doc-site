import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import DevDocs from "../../themes/devdocs"
import SEO from "../../components/seo"

import Callout from "../../doc-components/Callout"
import GlobalVariable from "../../doc-components/GlobalVariable"

import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableHeaderCell,
} from "../../components/Table"

import "../global.css"

const componentsMapping = {
  table: Table,
  thead: TableHead,
  tr: TableRow,
  tbody: TableBody,
  td: TableCell,
  th: TableHeaderCell,
  Callout: Callout,
  GlobalVariable: GlobalVariable,
}

const MdxLayout = props => {
  const { data } = props
  const { mdx } = data
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <DevDocs
        title={mdx.frontmatter.title}
        slug={mdx.fields.slug}
        currentPageContents={mdx.tableOfContents.items}
      >
        <MDXProvider components={componentsMapping}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </DevDocs>
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
      fields {
        slug
      }
      tableOfContents(maxDepth: 3)
    }
  }
`

MdxLayout.propTypes = {
  props: PropTypes.shape({
    data: PropTypes.shape({
      mdx: PropTypes.node.isRequired,
    }),
  }),
}

export default MdxLayout
