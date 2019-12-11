import PropTypes from "prop-types"
import React from "react"

import Home from "./home"
import Search from "../Search"
import TabNavigation from '../TabNavigation';

import defaultStyles from "./header.module.css"

const Header = ({ siteTitle, slug }) => {
  const classNames = [defaultStyles.root, "spectrum--dark"];
  return (
    <header className={classNames.join(" ")}>
      <Home to="/" />
      <TabNavigation slug={slug} />
      <div>{siteTitle}</div>
      <div>Waffle menu</div>
      <Search />
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
