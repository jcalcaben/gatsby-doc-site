import React from 'react';

import Brand from './brand';

import styles from './header.module.css';

const Header = props => {

    return (
        <header className={styles.root}>
            <Brand classes={styles.brand}/>
            <div id="topNav">Top Nav</div>
            <div id="waffle">Waffle</div>
            <div id="search">Search</div>
        </header>
    )

}

export default Header;

