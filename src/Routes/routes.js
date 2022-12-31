import { createBrowserRouter } from "react-router-dom";
import Main from '../MainLayout/Main'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
const routes = createBrowserRouter([
     {
        path:"/",
        element: <Main/>,
        children: [
            {path:'/' , element:<Home/>}, {path:"/cart" , element:<Cart/>}
        ]
     }
           


])

export default routes;