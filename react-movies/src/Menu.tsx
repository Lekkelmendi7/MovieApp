import { useContext, useState } from "react";
import AuthenticationContext from "./auth/AuthenticationContext";
import { Link, NavLink } from "react-router-dom";
import Authorized from "./auth/Authorized";
import Button from "./utils/Button";
import { logout } from "./auth/handleJWT";

export default function Menu() {
    const { update, claims } = useContext(AuthenticationContext);
    const [showDropdown, setShowDropdown] = useState(false);

    function getUserEmail(): string {
        return claims.filter((x) => x.name === "email")[0]?.value;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Flix Flow
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies/filter">
                                Filter movies
                            </NavLink>
                        </li>
                        <li className={`nav-item dropdown${showDropdown ? ' show' : ''}`}>
                            <button
                                className="nav-link btn btn-link dropdown-toggle"
                                onClick={() => setShowDropdown(!showDropdown)}
                                aria-expanded={showDropdown ? "true" : "false"}
                            >
                                Dropdown link
                            </button>
                            <div className={`dropdown-menu${showDropdown ? ' show' : ''}`}>
                                <NavLink className="dropdown-item" to="/studentet">
                                    Studentet
                                </NavLink>
                                <NavLink className="dropdown-item" to="/shtetet">
                                    Shtetet
                                </NavLink>
                                <NavLink className="dropdown-item" to="/ndertesat">
                                    Ndertesat
                                </NavLink>
                                <NavLink className="dropdown-item" to="/liftet">
                                    Liftet
                                </NavLink>
                            </div>
                        </li>
                        <Authorized
                            role="admin"
                            authorized={
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/genres">
                                            Genres
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/actors">
                                            Actors
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/movietheaters">
                                            Theaters
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/movies/create">
                                            Add a movie
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/users">
                                            Users
                                        </NavLink>
                                    </li>
                                </>
                            }
                        />
                    </ul>
                    <div className="d-flex">
                        <Authorized
                            authorized={
                                <>
                                    <span className="nav-link" style={{ color: "blue", fontWeight: "bold", textAlign: "center", marginRight: "30px" }}>
                                        Hello, {getUserEmail()}
                                    </span>
                                    <Button
                                        onClick={() => {
                                            logout();
                                            update([]);
                                        }}
                                        className="btn btn-danger"
                                    >
                                        Log out
                                    </Button>
                                </>
                            }
                            notAuthorized={
                                <>
                                    <Link
                                        to="/register"
                                        className="nav-link btn btn-link"
                                        style={{ color: "blue", fontWeight: "bold", marginRight: "10px" }}
                                    >
                                        Register
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="nav-link btn btn-link"
                                        style={{ color: "blue", fontWeight: "bold", marginRight: "10px" }}
                                    >
                                        Login
                                    </Link>
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
