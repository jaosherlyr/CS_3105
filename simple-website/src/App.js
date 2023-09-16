import './index.css';
import { Navbar } from './components';
import { Home, Works } from "./pages";
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
          path: '/works',
          element: <Works/>
      }]
  }]);

  return (
      <>
        <RouterProvider router={routes} />
      </>
  );
}

export default App;
