import logo from "../assets/img/argentBankLogo.webp";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const loginStore = useSelector((state) => state.login);
  const token = useSelector((state) => state.login.userToken);
  if (token) {
    console.log(
      "le token est présent dans le store donc je change Sign In en Sing out",
      token
    );
  } else {
    console.log("le token n'est pas présent donc je laisse Sign IN");
  }
  // Au click sur logout suppression du token du local storage
  const handleRedirectHome = () => {
    localStorage.removeItem("token");
    console.log("Token supprimé du local storage");
    dispatch(logoutUser());
  };
  return (
    <header>
      <nav className="main-nav">
        <NavLink to={"/"} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {loginStore &&
            loginStore.userProfil &&
            loginStore.userProfil.userName && (
              <Link to="/profile" className="userName">
                <i className="fa fa-user-circle"></i>
                <p>{loginStore.userProfil.userName}</p>
              </Link>
            )}
          {token ? (
            <NavLink
              className="main-nav-item"
              to="/"
              onClick={handleRedirectHome}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={"/login"} className="main-nav-item">
              <i className="fa fa-user-circle gap5"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
