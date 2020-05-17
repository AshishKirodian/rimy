import Home from "../Home/Container/con";
import History from "../History/Container/historyCon";

export const ROUTES = [
    {
        path: '/history',
        component: History
    },
    {
        path: '/',
        component: Home
    }
]