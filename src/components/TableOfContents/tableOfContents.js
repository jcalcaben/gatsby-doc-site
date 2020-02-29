import React from "react"

import "@spectrum-css/sidenav"
import defaultClasses from "./tableOfContents.module.css"

const TableOfContents = props => {
  const { classOverrides, data } = props

  const classes = Object.assign({}, defaultClasses, classOverrides)

  const toItem = section => {
    const subSections = section.items ? (
      <ul className="spectrum-SideNav">{section.items.map(toItem)}</ul>
    ) : null

    const keyValue = `${section.title}${section.url}`

    // TODO: Apply isSelected logic/css "is-selected"
    return (
      <li className="spectrum-SideNav-item" key={keyValue}>
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

  const contents = data && data[0].items && data[0].items.map(toItem)

  return (
    <nav className={classes.root}>
      <h2 className="spectrum-SideNav-heading">On this page</h2>
      <ul className="spectrum-SideNav spectrum-SideNav--multiLevel">
        {contents}
      </ul>
    </nav>
  )
}

export default TableOfContents
