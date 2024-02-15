import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './nav';

function App() {
  return (
    <div className="">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
