import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userToken = useSelector((state) => state.login.userToken);
  if (userToken !== null) {
    return <Navigate to="/profile" />;
  } 

  // Sinon, rendre les enfants (le contenu protégé)
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
