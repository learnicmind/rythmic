import { Navigate, useLocation } from "react-router";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isAdminLoading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;
