import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    // const {user} = useContext(AuthContext)
    const {user} = useAuth()
    const localtion = useLocation()
console.log(localtion)
    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={localtion.pathname}></Navigate>
};

export default PrivateRoute;