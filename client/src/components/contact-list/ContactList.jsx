import { useState, useEffect } from "react";

import * as contactsService from '../../services/contactService';

function ContactList() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        contactsService.getAll()
            .then(setContacts);
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Contacts</h6>
                    <h1 className="mb-5">List of all created contact's messages</h1>
                </div>
                <div className="row g-4">
                    {contacts.map((contact) => { return (
                        <div key={contact._id} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fas fa-inbox"></i>
                                    <h5>{contact.name}</h5>
                                    <p>{contact.subject}</p>
                                    <p>{contact.message}</p>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default ContactList;