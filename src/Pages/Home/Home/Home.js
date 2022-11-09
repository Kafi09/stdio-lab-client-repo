import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Banner></Banner>
        </div>
    );
};

export default Home;