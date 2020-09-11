import React from 'react';

import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

export default function Page(props) {

    return (
        <div>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>
    );
}