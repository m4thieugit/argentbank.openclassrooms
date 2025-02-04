import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthMiddleware = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};

export default AuthMiddleware;