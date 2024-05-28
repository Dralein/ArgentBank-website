import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthProtectedRoute = ({ children, protect }) => {
  const userToken = useSelector((state) => state.login.userToken);

  if (protect) {
    // Si la route est protégée, rediriger vers /login si l'utilisateur n'est pas connecté
    return userToken ? children : <Navigate to="/login" />;
  } else {
    // Si la route n'est pas protégée, rediriger vers /profile si l'utilisateur est connecté
    return userToken ? <Navigate to="/profile" /> : children;
  }
};

AuthProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  protect: PropTypes.bool.isRequired,
};

export default AuthProtectedRoute;