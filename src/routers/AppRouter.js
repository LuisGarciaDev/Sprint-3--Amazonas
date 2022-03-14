import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Login from '../components/Login';
import { Registro } from '../components/Registro';
import ListProducts from "../components/ListProducts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
       
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }

            setChecking(false)
        })

    }, [setIsLoggedIn, setChecking])


    
    if (checking) {
        return (
            <h2>esperando...</h2>
           
        )
    }
    


    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<ListProducts/>} />

                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />


                <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login />
                    </PublicRoute>
                } />


                <Route path="/register" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Registro />
                    </PublicRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}
