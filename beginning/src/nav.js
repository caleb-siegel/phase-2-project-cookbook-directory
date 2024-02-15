import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar" >
            <div>
                <NavLink to="recipelist">Home</NavLink>
            </div>
            <div>
                <NavLink to="newrecipe">New Recipe</NavLink>
            </div>
            <div>
                <NavLink to="notreorders">Not Reorders</NavLink>
            </div>
        </nav>
    )
}

export default Nav;