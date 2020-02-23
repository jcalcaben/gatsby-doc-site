import React from "react"

import classes from "./content.module.css"

const Content = props => {
  const { children } = props

  return (
    <section className={classes.root}>
      <aside>Nav</aside>
      <main className={classes.main}>{children}</main>
      <aside>TOC</aside>
    </section>
  )
}

export default Content
