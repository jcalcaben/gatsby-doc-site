import PropTypes from "prop-types"
import React from "react"

import Home from "./home"
import Search from "../Search"
import TabNavigation from "../TabNavigation"
import WaffleNavigation from "../WaffleNavigation"
import NavToggle from "../NavToggle"

import defaultStyles from "./header.module.css"

const Header = ({ siteTitle, slug, onNavToggleClick }) => {
  const classNames = [defaultStyles.root, "spectrum--dark"]
  return (
    <header className={classNames.join(" ")}>
      <div>
        <NavToggle onClick={onNavToggleClick} />
        <Home to="/" />
      </div>
      <div>
        <TabNavigation slug={slug} />
      </div>
      <div>
        <Search />
        <WaffleNavigation />
      </div>
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
