import React, { useContext, useState, useEffect } from "react";
import {BrowserRouter} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
// import { observer } from "mobx-react-lite";

import AppRouter from "./components/AppRouter";
import { Context } from "./index";


const App = () => {  // observer(
    const {auth} = useContext(Context);
    const [token, setToken] = useState<string | null>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    useEffect(() => {
        if (token) {
            auth.setIsAuth(true);
        }
        setLoading(false);
    }, [token]);

    if (loading) {
        return <CircularProgress />
    }

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;