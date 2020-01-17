import * as React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';

const HomePage = (props) => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default HomePage;