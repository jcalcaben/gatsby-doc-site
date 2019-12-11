import React from "react"

import "@spectrum-css/sidenav"

import { useData } from "../Data"

import { Link } from "gatsby"

import getPageGroup from "../util/getPageGroup"

const classes = {
  list: "spectrum-SideNav spectrum-SideNav--multiLevel",
  subList: "spectrum-SideNav",
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
      const branch = page.pages ? <Branch pageTree={page} slug={slug} /> : undefined
      const listItemClass = slug === page.url? [classes.listItem, 'is-selected'].join(' '): classes.listItem;
      return (
        <li key={page.url} className={listItemClass}>
          <Link className={classes.link} to={page.url}>
            {page.title}
          </Link>
          {branch}
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

const Branch = props => {
  const { slug, pageTree } = props

  const listItems = pageTree.pages.map(page => {
    const branch = page.pages ? <Branch pageTree={page} /> : undefined

    const listItemClass = slug === page.url? [classes.listItem, 'is-selected'].join(' '): classes.listItem;
    return (
      <li key={page.url} className={listItemClass}>
        <Link className={classes.link} to={page.url}>
          {page.title}
        </Link>
        {branch}
      </li>
    )
  })

  return <ul className={classes.subList}>{listItems}</ul>
}

export default TreeNavigation
