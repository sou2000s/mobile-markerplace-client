import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
         <RouterProvider router={routes}></RouterProvider>
         <Toaster/>
    </div>
  );
}

export default App;
