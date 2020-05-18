import React, { useState, useEffect } from "react"

import { contains, remove } from "../../../lib/util"

import Item from "./item"

import classes from "./branch.module.css"

const treeContains = (tree, url) => {
  if (tree) {
    let found = tree.url === url

    if (tree.pages) {
      tree.pages.forEach(subTree => {
        found = found || treeContains(subTree, url)
      })
    }

    return found
  }
  return false
}

const Branch = props => {
  const [openItems, setOpenItems] = useState([])

  const toggle = key => {
    return () => {
      if (contains(openItems, key)) {
        setOpenItems(remove(openItems, key))
      } else {
        setOpenItems(openItems.concat([key]))
      }
    }
  }
  const { branch, depth, slug, expanded = false } = props

  const { pages } = branch

  useEffect(() => {
    pages.forEach(tree => {
      if (treeContains(tree, slug)) {
        setOpenItems(openItems.concat([tree.title]))
      }
    })
  }, [])

  const rootClasses = expanded ? classes.expanded : classes.hidden

  const items = pages.map(page => {
    const { url, title } = page

    const branchExpanded = contains(openItems, title)

    const listItems = page.pages ? (
      <Branch
        branch={page}
        depth={depth + 1}
        slug={slug}
        expanded={branchExpanded}
      />
    ) : (
      undefined
    )

    return (
      <Item
        key={title}
        url={url}
        label={title}
        depth={depth}
        listItems={listItems}
        toggleAction={toggle(title)}
        open={branchExpanded}
      />
    )
  })

  return <ul className={rootClasses}>{items}</ul>
}

export default Branch
