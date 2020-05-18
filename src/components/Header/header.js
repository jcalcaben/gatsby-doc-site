import PropTypes from "prop-types"
import React from "react"

import TabNavigation from "../TabNavigation"
import WaffleNavigation from "../WaffleNavigation"

import defaultStyles from "./header.module.css"

const Header = ({ slug }) => {
  const classNames = [defaultStyles.root, "spectrum--light"]
  return (
    <header className={classNames.join(" ")}>
      <TabNavigation slug={slug} />
      <WaffleNavigation />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
