import { useState, useEffect } from "react";

import * as signinService from '../../services/signupService';

function Newsletter() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        signinService.getAll()
            .then(setEmails);
    }, [])

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Newsletter</h6>
                    <h1 className="mb-5">List of all registered for our newsletter</h1>
                </div>
                <div className="row g-4">
                    <p>Totla number of registered: {emails.length}</p>
                    <ul>
                        {emails.map( (em) => <li key={em._id}>{em.email}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;