import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export function ProtectedRoute({ children }) {
    const { user } = UserAuth();

    if(!user) {
        return <Navigate to='/'/>
    }
    return children;
}