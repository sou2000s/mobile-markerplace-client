import { createBrowserRouter } from "react-router-dom";
import Main from '../MainLayout/Main'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProducts from "../pages/AddProducts";
const routes = createBrowserRouter([
     {
        path:"/",
        element: <Main/>,
        children: [
            {path:'/' , element:<Home/>},
            {path:"/cart" , element:<Cart/>},
            {path:"/login" , element:<Login/>},
            {path:"/register" , element:<Register/>},
            {path:'/addProducts' , element:<AddProducts/>}
        ]
     }
           


])

export default routes;