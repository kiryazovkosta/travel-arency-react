import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/authContext"
import { Paths } from "../utils/Paths";

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Paths.login} />;
    }

    return (
        <Outlet />
    )
}