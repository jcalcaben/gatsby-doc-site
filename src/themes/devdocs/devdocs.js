import React from "react"

import { DataProvider } from "../../components/Data"
import GlobalSpectrumProvider from "../../components/GlobalSpectrumProvider"

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

import styles from "./devdocs.module.css"

const DevDocsTheme = props => {
  const { currentPageContents, slug, children } = props

  return (
    <DataProvider>
      <GlobalSpectrumProvider size="medium" theme="light">
        <div className={styles.root}>
          <Header slug={slug} />
          <Content currentPageContents={currentPageContents} slug={slug}>
            {children}
          </Content>
          <Footer />
          <nav></nav>
          <div id="modal"></div>
        </div>
      </GlobalSpectrumProvider>
    </DataProvider>
  )
}

export default DevDocsTheme
