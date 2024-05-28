import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedProfileRoute = ({ children }) => {
  const userToken = useSelector((state) => state.login.userToken);

  // Si l'utilisateur n'est pas connecté, rediriger vers /login
  if (!userToken) {
    return <Navigate to="/login" />;
  }

  // Sinon, rendre les enfants (le contenu protégé)
  return children;
};

ProtectedProfileRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedProfileRoute;