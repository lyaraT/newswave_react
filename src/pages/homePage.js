import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Trendingstories from '../components/Trendingstories';

const Home =()=>{
    return (
        <>

        <Menu />
        <Trendingstories />
        <Footer />
        </>

    )
}
export default Home;