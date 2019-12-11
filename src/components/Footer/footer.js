import React from 'react'

import defaultStyles from './footer.module.css'

const Footer = props => {

    const rootClassNames = [defaultStyles.root, "spectrum--dark"]

    return(
        <footer className={rootClassNames.join(' ')}>Footer component content</footer>
    )
}

export default Footer;