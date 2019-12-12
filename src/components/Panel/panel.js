import React from "react"

import defaultClasses from "./panel.module.css"

const classes = {
  root: defaultClasses.root,
  isOpen: defaultClasses.isOpen,
  isClosed: defaultClasses.isClosed,
}

const Panel = props => {
  const { children, open } = props

  const classnames = [defaultClasses.root]
  if (open) {
    classnames.push(classes.isOpen)
  } else {
    classnames.push(classes.isClosed)
  }

  return <section className={classnames.join(" ")}>{children}</section>
}

Panel.defaultProps = {
  open: true,
}
export default Panel
