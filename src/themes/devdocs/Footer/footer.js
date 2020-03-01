import React from "react"

import { useData } from "../../../components/Data"

import classes from "./footer.module.css"

const Footer = props => {
  const { footerData } = useData()

  const { links, copyrightYear } = footerData

  const linksContent = links.map(link => {
    const { url, name } = link
    return (
      <li key={name} className={classes.linkEntry}>
        <a className={classes.link} href={url}>
          {name}
        </a>
      </li>
    )
  })

  return (
    <footer className={classes.root}>
      <ul className={classes.links}>{linksContent}</ul>
      <span className={classes.copyright}>
       &copy; {copyrightYear} Magento. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer
