import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router';

const HomeRoot = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeRoot;