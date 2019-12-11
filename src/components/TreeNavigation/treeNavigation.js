import React from "react"

import "@spectrum-css/sidenav"

import { useData } from "../Data"

import { Link } from "gatsby"

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

const getPageGroup = (slug, pageGroups) => {
  let found = undefined
  pageGroups.nodes.forEach(group => {
    if (inGroup(slug, group)) {
      found = group
    }
  })

  return found
}

const inGroup = (slug, group) => {
  const urlMatch = slug === group.url

  let inChildPages = false

  if (group.pages) {
    inChildPages = group.pages.find(page => {
      return inGroup(slug, page)
    })
  }

  return urlMatch || inChildPages
}

export default TreeNavigation
