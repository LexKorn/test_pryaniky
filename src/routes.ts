import { LOGIN_ROUTE,MAIN_ROUTE } from "./utils/consts";
import { AuthPage, MainPage } from './pages';

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
];