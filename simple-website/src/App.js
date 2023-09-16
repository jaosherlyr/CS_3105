import './index.css';
import {ErrorPage, Navbar} from './components';
import { Home, Gallery } from "./pages";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {
  const routes = createBrowserRouter([{
      path: '/',
      element: <Navbar />,
      errorElement: <ErrorPage/>,
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
      <div>
        <RouterProvider router={routes} />
      </div>
  );
}

export default App;
