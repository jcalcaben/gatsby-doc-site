import React from "react"
import PropTypes from "prop-types"

import DevDocs from "../../themes/devdocs"
import SEO from "../../components/seo"

import "../global.css"

const PageLayout = props => {
  const { title, children, slug } = props

  return (
    <>
      <SEO title={title} />
      <DevDocs title={title} slug={slug}>
        {children}
      </DevDocs>
    </>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  slug: PropTypes.string.isRequired,
}

export default PageLayout
