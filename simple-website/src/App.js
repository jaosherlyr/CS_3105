import './index.css';
import { Navbar } from './components';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  );
}

export default App;
