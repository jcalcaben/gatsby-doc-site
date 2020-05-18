import React from "react"

import Label from "./label"

import classes from "./item.module.css"

const Item = props => {
  const { url, label, depth, listItems, toggleAction, open } = props

  const rootName = classes[`rootLevel${depth}`]

  return (
    <li className={rootName}>
      <Label
        url={url}
        label={label}
        open={open}
        toggleAction={listItems ? toggleAction : undefined}
      />
      {listItems}
    </li>
  )
}

export default Item
