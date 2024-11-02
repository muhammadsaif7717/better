import React from 'react';
import Banner from './Banner';
import Stories from './Stories';
import QnA from './QNA';

const HomePage = () => {
    return (
        <div className=''>
            <Banner />
            <Stories />
            <QnA />
        </div>
    );
};

export default HomePage;