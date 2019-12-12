import React from "react"
import { func } from "prop-types"

import TripleGripper from "@spectrum-css/icon/large/TripleGripper.svg"
import defaultClasses from "./navToggle.module.css"

const NavToggle = props => {
  const { onClick } = props
  return (
    <div className={defaultClasses.root}>
      <button
        className="spectrum-ActionButton spectrum-ActionButton--quiet"
        onClick={onClick}
      >
        <TripleGripper
          className={`spectrum-Icon spectrum-Icon--sizeL`}
          focusable="false"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

NavToggle.propTypes = {
  onClick: func,
}
export default NavToggle
