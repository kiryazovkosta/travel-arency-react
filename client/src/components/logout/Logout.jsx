import { useContext, useEffect } from "react";

import * as userService from '../../services/userService';
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        userService.logout()
            .then(() => logoutHandler())
            .catch(err => console.log(err));
    }, []);

    return null;
}

export default Logout;