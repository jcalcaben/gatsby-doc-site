import React from "react"

import classes from "./label.module.css"

import ChevronUp from "@spectrum-css/icon/combined/ChevronUpSmall.svg"
import ChevronDown from "@spectrum-css/icon/combined/ChevronDownSmall.svg"

const Label = props => {
  const { url, label, open, toggleAction } = props

  const toggleContent = open ? (
    <ChevronUp className="spectrum-Icon spectrum-UIIcon-ChevronUpSmall" />
  ) : (
    <ChevronDown className="spectrum-Icon spectrum-UIIcon-ChevronUpSmall" />
  )

  const toggleButton = toggleAction ? (
    <button className={classes.button} onClick={toggleAction}>
      {toggleContent}
    </button>
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
