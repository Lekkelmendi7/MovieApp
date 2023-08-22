import { NavLink } from "react-router-dom";


export default function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Flix Flow</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-item" to="/genres">
                                Genres
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}