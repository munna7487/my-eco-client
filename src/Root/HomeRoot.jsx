import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router';


const HomeRoot = () => {
    return (
        <div>
            <Header></Header>
           
          <div className=''>
              <Outlet></Outlet>
          </div>
            
            <Footer></Footer>
        </div>
    );
};

export default HomeRoot;