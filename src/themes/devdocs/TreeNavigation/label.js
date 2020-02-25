import React from "react"

import classes from './label.module.css';

const Label = props => {
  const { url, label, open, toggleAction } = props

  const toggleContent = open ? "-" : "+"

  const toggleButton = toggleAction ? (
    <button className={classes.button} onClick={toggleAction}>{toggleContent}</button>
  ) : (
    undefined
  )

  const labelItem = url ? (
    <a className={classes.link} href={url}>
      {label}
    </a>
  ) : (
    <span className={classes.text}>{label}</span>
  )

  return (
    <span className={classes.root}>
      {labelItem}
      {toggleButton}
    </span>
  )
}

export default Label
