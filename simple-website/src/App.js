import './index.css';
import { Navbar } from './components';
import { Home, Gallery } from "./pages";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {
  const routes = createBrowserRouter([{
      path: '/',
      element: <Navbar />,
      children: [{
          index: true,
          path: '/',
          element: <Home/>
      }, {
          path: '/gallery',
          element: <Gallery/>
      }]
  }]);

  return (
      <>
        <RouterProvider router={routes} />
      </>
  );
}

export default App;
