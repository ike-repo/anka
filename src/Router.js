import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import Navbar from '../src/components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Products from '../src/pages/Products';
import ContactUs from '../src/pages/ContactUs';
import Ur1328 from '../src/pages/Ur1328';
import Ur1331 from '../src/pages/Ur1331';
import ProductsUreter from '../src/pages/ProductsUreter';
import Cy1355 from '../src/pages/Cy1355';


function AppRouter() {
    return (
        <Router >
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path={process.env.PUBLIC_URL + '/anka'} element={<HomePage/>}  /> 
                    <Route path={process.env.PUBLIC_URL + '/anka/products'} element={<Products/>} />
                    <Route path={process.env.PUBLIC_URL + '/anka/contact-us'} element={<ContactUs/>} />
                    <Route path={process.env.PUBLIC_URL + '/anka/products/ur-1328'} element={<Ur1328/>} />
                    <Route path={process.env.PUBLIC_URL + '/anka/products/ur-1331'} element={<Ur1331/>} />
                    <Route path={process.env.PUBLIC_URL + '/anka/products/ureter'} element={<ProductsUreter/>} />
                    <Route path={process.env.PUBLIC_URL + '/anka/products/cy-1355'} element={<Cy1355/>} />
                </Routes>
                <Footer /> 
            </div>
        </Router>
    );
}

export default AppRouter;
