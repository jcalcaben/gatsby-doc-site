import React from "react"

import { useData } from "../../../components/Data"
import getPageGroup from "../../../components/util/getPageGroup"

import Branch from "./branch"

import classes from "./treeNavigation.module.css"

const TreeNavigation = props => {
  const { pages, slug } = props

  const { pageGroups } = useData()

  const group = getPageGroup(slug, pageGroups)
  const { title } = group

  const depth = 0

  return (
    <nav className={classes.root}>
      <h4 className={classes.title}>{title}</h4>
      <Branch branch={group} depth={depth} expanded={true} />
    </nav>
  )
}

export default TreeNavigation
