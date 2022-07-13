import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const RequireAuth = ({ children, role }) => {
    
    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" replace={true} />;
    }

    let token = localStorage.getItem("token");
    let decoded = jwtDecode(token);

    if (decoded.role !== role) {
        return <Navigate to="/login" replace={true} />;
    } 

    return children;
};

export default RequireAuth;