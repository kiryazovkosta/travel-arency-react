import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/authContext"
import { Paths } from "../utils/Paths";

export default function AdminGuard(props) {
    const { isAdmin } = useContext(AuthContext);

    if (!isAdmin) {
        return <Navigate to={Paths.login} />;
    }

    return (
        <Outlet />
    )
}