import React, { useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import { useData } from "../Data"
// import getPageGroup from "../util/getPageGroup"

import "@spectrum-css/sidenav"
import classes from "./tableOfContents.module.css"

const TableOfContents = props => {
  const { data } = props

  const toItem = section => {
    const subSections = section.items ? (
      <ul>{section.items.map(toItem)}</ul>
    ) : null

    // TODO: Apply isSelected logic.
    return (
      <li
        className="spectrum-SideNav-item"
        key={`${section.title}${section.url}`}
      >
        <a
          href={section.url}
          className="spectrum-SideNav-itemLink"
          aria-current="page"
        >
          {section.title}
        </a>
        {subSections}
      </li>
    )
  }

  const contents = data && data.map(toItem)

  return (
    <nav className={classes.root}>
      <h2 className="spectrum-SideNav-heading">Table of Contents</h2>
      <ul className="spectrum-SideNav">{contents}</ul>
    </nav>
  )
}

export default TableOfContents
