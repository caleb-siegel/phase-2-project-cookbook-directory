import './App.css';
import Home from './components/Home';
import Favorites from './components/Favorites'
import NewRecipe from './components/NewRecipe';
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
