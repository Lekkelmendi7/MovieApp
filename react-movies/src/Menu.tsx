// import { NavLink } from "react-router-dom";


// export default function Menu(){
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <NavLink className="navbar-brand" to="/">Flix Flow</NavLink>
//                 <div className="collapse navbar-collapse">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink className="nav-item" to="/genres">
//                                 Genres
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             </nav>
//     )
// }
// import { NavLink } from "react-router-dom";


import { NavLink } from "react-router-dom";
import Authorized from "./auth/Authorized";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Flix Flow
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movie/filter">
                Movie Filter
              </NavLink>
            </li>
            <Authorized 
            role="admin"
            authorized={<>
            <li className="nav-item">
              <span className="nav-link border-left pl-3">|</span>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/genres">
                Genres
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link border-left pl-3">|</span>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/actors">
                Actors
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link border-left pl-3">|</span>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movietheaters">
                Movie Theaters
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link border-left pl-3">|</span>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/create">
                Create a Movie
              </NavLink>
            </li>
            </>
            }
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
