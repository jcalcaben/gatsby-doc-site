import React from "react"

import pageGroup from "../../data/pageGroups.yml"

import defaultStyles from "./tabNavigation.module.css"

const TabNavigation = props => {
  const { slug } = props

  const currentGroup = slug;

  const tabs = pageGroup.groups.map(tab => {
      const tabClass = currentGroup === tab.name ? defaultStyles.selectedItem : defaultStyles.listItem;
    return <li key={tab.name} className={tabClass}>{tab.title}</li>
  })

  return (
    <div className={defaultStyles.root}>
      <ul className={defaultStyles.list}>
          {tabs}
      </ul>
    </div>
  )
}

export default TabNavigation
