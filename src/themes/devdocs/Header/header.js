import React from 'react';

import TabNavigation from '../../../components/TabNavigation'

import Brand from './brand';

import styles from './header.module.css';

const Header = props => {

    const {siteTitle, slug} = props;
    return (
        <header className={styles.root}>
            <Brand classes={styles.brand}/>
            <TabNavigation slug={slug} />
            <div id="waffle">Waffle</div>
            <div id="search">Search</div>
        </header>
    )

}

export default Header;

