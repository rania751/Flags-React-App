import React from 'react';
import Navigation from '../component/Navigation';
import Logo from '../component/Logo';
import Contries from '../component/Contries';
const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation />
            <Contries />
        </div>
    );
};

export default Home;