import { createBrowserRouter } from "react-router-dom";
import Main from '../MainLayout/Main'
const routes = createBrowserRouter([
     {
        path:"/",
        element: <Main/>,
        children: [
            
        ]
     }
           


])

export default routes;