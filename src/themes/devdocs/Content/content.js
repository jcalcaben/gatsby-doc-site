import React from "react"

import TreeNavigation from "../TreeNavigation"
import TableOfContents from "../../../components/TableOfContents"

import classes from "./content.module.css"

const Content = props => {
  const { slug, pages, currentPageContents, children } = props

  return (
    <section className={classes.root}>
      <aside>
        <TreeNavigation slug={slug} />
      </aside>
      <main className={classes.main}>{children}</main>
      <aside>
        <TableOfContents
          classOverrides={{ root: classes.toc }}
          data={currentPageContents}
        />
      </aside>
    </section>
  )
}

export default Content
