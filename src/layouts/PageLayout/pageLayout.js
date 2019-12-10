import React from 'react';

import App from '../../components/App'
import SEO from '../../components/seo'

const PageLayout = props => {

    const { title, children } = props;

    return (
        <>
            <SEO title={title} />
            <App title={title}>
                {children}
            </App>
        </>
    );
}

export default PageLayout;