import React from "react"

import TreeNavigation from '../TreeNavigation'

import classes from "./content.module.css"

const Content = props => {
  const { slug, pages, children } = props

  return (
    <section className={classes.root}>
      <aside>
        <TreeNavigation slug={slug} />
      </aside>
      <main className={classes.main}>{children}</main>
      <aside>TOC</aside>
    </section>
  )
}

export default Content
