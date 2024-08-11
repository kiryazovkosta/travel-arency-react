import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from '../../services/userService';
import AuthContext from "../../contexts/authContext";

import { Paths } from "../../utils/Paths";


function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        userService.logout()
            .then(() => {
                logoutHandler();
                navigate(Paths.home);
            })
            .catch(err => {
                console.log(err);
                logoutHandler();
                navigate(Paths.home);
            });
    }, []);

    return null;
}

export default Logout;