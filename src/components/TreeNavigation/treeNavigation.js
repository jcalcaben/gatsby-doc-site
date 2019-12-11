import React from "react"

import "@spectrum-css/sidenav"

import { useData } from "../Data"

import { Link } from "gatsby"

import getPageGroup from '../util/getPageGroup';

const classes = {
  list: "spectrum-SideNav spectrum-SideNav--multiLevel",
  listItem: "spectrum-SideNav-item",
  link: "spectrum-SideNav-itemLink",
}

const TreeNavigation = props => {
  const { slug } = props
  const { pageGroups } = useData()

  const group = getPageGroup(slug, pageGroups)

  let listItems = undefined
  if (group) {
    listItems = group.pages.map(page => {
      return (
        <li key={page.url} className={classes.listItem}>
          <Link className={classes.link} to={page.url}>{page.title}</Link>
        </li>
      )
    })
  }

  return (
    <nav>
      <ul className={classes.list}>{listItems}</ul>
    </nav>
  )
}

export default TreeNavigation
