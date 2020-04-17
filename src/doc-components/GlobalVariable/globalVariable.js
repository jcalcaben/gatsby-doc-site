import React from "react"

import globalData from "../../data/globalVariables.yml"

let localData = {}

import("../../external/data/variables.yml")
  .then(obj => {
    localData = obj
  })
  .catch(err => {
    console.log("Local data not found!")
  })

const GlobalVariable = props => {
  const { name, children } = props

  const data = Object.assign(globalData, localData)

  const value = data[name] || data[children] || name || children

  return <span>{value}</span>
}

export default GlobalVariable
