import React from "react"

import CrossLarge from "@spectrum-css/icon/combined/CrossLarge.svg"

import classes from "./form.module.css"

const Form = props => {
  const { open, onClose } = props

  const submitCallback = e => {
    e.preventDefault()
  }

  if (open) {
    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={submitCallback}>
          <input className={classes.input} type="search" placeholder="Search" />
        </form>
        <button className={classes.close} onClick={onClose}>
          <CrossLarge
            className="spectrum-Icon spectrum-UIIcon-CrossLarge"
            focusable="false"
            aria-hidden="true"
          />
        </button>
        <div className={classes.results} />
      </div>
    )
  }

  return null
}

export default Form
