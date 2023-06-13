import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='flex items-cnter justify-center'><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjcyOWZjMGYwZmM4OGVmZTIxNmFmYWYxZGJhZGQyMzBhODQyMmQ0YyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/YOw8mpVUyG8RIyR4uM/giphy.gif" alt="" /></div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;