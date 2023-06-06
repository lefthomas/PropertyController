import "./TopNav.css";
// import { useNavigate, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
// import { useContext } from "react";

function TopNav() {
  // const { user, logout } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const onLogout = () => {
  //   logout();
  //   navigate("/");
  // };
  return (
    <div className="top-nav">
      <NavLink className="top-nav-active top-nav-btn" to="/">
        Transfer
      </NavLink>
      <NavLink className="top-nav-btn" to="/hold">
        Hold
      </NavLink>
      {/* <NavLink className="top-nav-btn" to="/watch">
        Watch
      </NavLink>
      <NavLink className="top-nav-btn" to="/scan">
        Scan
      </NavLink> */}
      {/* {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <NavLink className="top-nav-btn" to="/login">
          Login
        </NavLink>
      )} */}
    </div>
  );
}

export default TopNav;
