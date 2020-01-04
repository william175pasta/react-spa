import * as React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContentA from '../../components/Content/Content'
const HomePage = (props) => {
    return (
        <div>
            <Header />
            <h3>我是首頁</h3>
            <ContentA />
            <Footer />
        </div>
    );
};

export default HomePage;