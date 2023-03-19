import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";

import { authRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { Context } from '../index';


const AppRouter: React.FC = observer(() => { 
    const {auth} = useContext(Context);

    return (
        <Routes>
            {auth.isAuth ? 
                authRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component />} />
                ):
                publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component />} />
                )
            }
            {auth.isAuth ?
                <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
                :
                <Route path='*' element={<Navigate to={LOGIN_ROUTE} />} />
            }
        </Routes>
    );
});

export default AppRouter;