import React from "react"

import TabNavigation from "../../../components/TabNavigation"
import WaffleNavigation from "../../../components/WaffleNavigation"
import Search from "../Search"

import Brand from "./brand"

import styles from "./header.module.css"

const Header = props => {
  const { slug } = props
  return (
    <header className={styles.root}>
      <Brand classes={styles.brand} />
      <TabNavigation slug={slug} />
      <WaffleNavigation overrideClasses={{ root: styles.waffle }} />
      <Search />
    </header>
  )
}

export default Header
