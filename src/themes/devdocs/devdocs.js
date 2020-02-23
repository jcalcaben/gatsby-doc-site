import React from 'react';

import { DataProvider } from '../../components/Data'

import Header from './Header';

import styles from './devdocs.module.css';

import { useSiteTitle } from '../../lib/hooks';

const DevDocsTheme = props => {
    const data = useSiteTitle();

    const { currentPageContents, title, slug, children } = props

    const siteTitle = title || data.site.siteMetadata.title

    return (
        <DataProvider>
            <div className={styles.root}>
                <Header/> 
                <section>{children}</section>
                <footer></footer>
                <nav></nav>
                <div id="modal"></div>
            </div>

        </DataProvider>
    )
}

export default DevDocsTheme;