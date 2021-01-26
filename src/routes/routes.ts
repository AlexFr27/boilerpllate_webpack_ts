// import {LoginContainer} from "../login";
// import {BooksContainer} from "../books";

export const LOGIN_ROUTE = '/login'
export const APP_ROUTE = '/books'

export const publicRoutes = [
    {
        id:'1',
        path:LOGIN_ROUTE,
        //Component: LoginContainer
    }
]
export const privateRoutes = [
    {
        id:'2',
        path:APP_ROUTE,
        //Component: BooksContainer
    }
]