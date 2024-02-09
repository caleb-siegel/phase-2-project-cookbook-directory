import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="flex justify-between">
            <div>
                <NavLink to="home">Home</NavLink>
            </div>
            <div>
                <NavLink to="newrecipe">New Recipe</NavLink>
            </div>
            <div>
                <NavLink to="favorites">Favorites</NavLink>
            </div>
   </nav>
    )
}

export default Nav;