import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"

import Header from '../header';

const App = props => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const {title, children} = props;

    const siteTitle = title || data.site.siteMetadata.title;

    return(
        <>
            <Header siteTitle={siteTitle} />
            <div>
                <section>Left sidebar</section>
                <main>{children}</main>
                <section>Right sidebar</section>
            </div>
            <footer>Footer content</footer>
        </>

    )
}

App.propTypes= {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default App;