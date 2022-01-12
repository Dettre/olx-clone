import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd'
import Ads from './pages/Ads'

import { RequireAuth } from './helpers/RequireAuth';

 const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            -
            <Route path="/about" element={<About/>}></Route>
            <Route path="/post-an-ad" element={
                <RequireAuth>
                    <AddAd/>
                </RequireAuth>}>
            </Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/ad/:id" element={<AdPage/>}></Route>
            <Route path="/ads" element={<Ads/>}></Route>

            <Route path='*' element={<NotFound/>}></Route>

           
        </Routes>
    );
}

export default Rotas;
