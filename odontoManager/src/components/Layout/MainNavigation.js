import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";
import home from ".././assets/icons/homeicon.png";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={home} alt={home}></img>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login or Register</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      {/* fondo */}
    </header>
  );
};

export default MainNavigation;
