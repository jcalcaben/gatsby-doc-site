import React from "react"

import { DataProvider } from "../../components/Data"
import GlobalSpectrumProvider from "../../components/GlobalSpectrumProvider"

import Header from "./Header"
import Content from "./Content"

import styles from "./devdocs.module.css"

import { useSiteTitle } from "../../lib/hooks"

const DevDocsTheme = props => {
  const data = useSiteTitle()

  const { currentPageContents, title, slug, children } = props

  const siteTitle = title || data.site.siteMetadata.title

  return (
    <DataProvider>
      <GlobalSpectrumProvider size="medium" theme="light">
        <div className={styles.root}>
          <Header slug={slug} />
          <Content currentPageContents={currentPageContents} slug={slug}>
            {children}
          </Content>
          <footer></footer>
          <nav></nav>
          <div id="modal"></div>
        </div>
      </GlobalSpectrumProvider>
    </DataProvider>
  )
}

export default DevDocsTheme
