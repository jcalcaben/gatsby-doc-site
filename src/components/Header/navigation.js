import React from "react"

import TabNavigation from "../TabNavigation"
import WaffleNavigation from "../WaffleNavigation"

import defaultStyles from "./navigation.module.css"

const Navigation = props => {
    const {slug} = props;
  return (
    <nav className={defaultStyles.root}>
      <TabNavigation slug={slug} />
      <WaffleNavigation />
    </nav>
  )
}

export default Navigation;