import Button from "../Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, infoUser } from "../../redux/loginSlice.js";
import { logUser, getUserProfile } from "../../api/api.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Initialisation des états pour le formulaire de connexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch(); // Utilisation de useDispatch
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Appel de l'API pour la connexion
      const userData = await logUser(email, password);
      const token = userData.body.token;

      // Dispatch de l'action loginUser avec le token
      dispatch(loginUser(token));

      // Stockage du token dans le localStorage si l'utilisateur a coché "Remember me"
      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      // Appel de l'API pour récupérer les informations de l'utilisateur
      const userInfo = await getUserProfile(token);

      // Dispatch de l'action setUserInfo avec les informations de l'utilisateur
      dispatch(
        infoUser({
          email: userInfo.body.email,
          firstName: userInfo.body.firstName,
          lastName: userInfo.body.lastName,
          userName: userInfo.body.userName,
        })
      );

      // Redirection vers la page utilisateur après la connexion réussie
      navigate("/profile");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Identifiants incorrects");
    }
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1 className="loginh1">Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button className="sign-in-button" text="Sign In" />
        </form>
        {error && <p className="error-connection">{error}</p>}
      </section>
    </main>
  );
};

export default Login;
