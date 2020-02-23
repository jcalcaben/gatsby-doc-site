import React, {useState} from 'react';

import Magnifier from "@spectrum-css/icon/combined/Magnifier.svg"

import Form from './form'

import classes from './search.module.css'

const Search = props => {
    const [searchOpen, setSearchOpen] = useState(false);

    const openSearch = () => {
        setSearchOpen(true);
    }

    const closeSearch = () => {
        setSearchOpen(false);
    }
    return (
        <>
        <button className={classes.button} onClick={openSearch}>
            <Magnifier
                className={classes.magnifier}
                focusable="false"
                aria-hidden="true"
            />
        </button>
        <Form open={searchOpen} onClose={closeSearch} />
        </>
    )

}

export default Search;