import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from '../../hooks/useForm'

import * as contactService from '../../services/contactService'
import { Paths } from '../../utils/Paths';

const ContactFormKeys = {
    Name: 'name',
    Email: 'email',
    Subject: 'subject',
    Message: 'message'
}

function ContactForm() {

    const navigate = useNavigate();

    const addContactHandler = async () => {
        console.log('clicked');

        const errors = validateForm();
        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
        } else {
            try {
                const contactData = { ...values };
                await contactService.create(contactData);
                navigate(Paths.home);

            } catch (error) {
                toast.error('There is an error with sending of contact form!')
            }
        }
    }

    const validateForm = () => {
        const { name, email, subject, message } = values;
        const errors = [];

        if (!name) {
             errors.push("Name in contact form is required.");
        }

        if (!subject) {
            errors.push("Subject in contact form is required.");
        }

        if (!message) {
            errors.push("Message in contact form is required.");
        }

        if (!email) {
            errors.push("Email in contact form is required.");
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
            errors.push("Email in contact form is invalid.");
        }

        return errors;
    };

    const { values, onChange, onSubmit} = useForm(addContactHandler, {
        [ContactFormKeys.Name]: '',
        [ContactFormKeys.Email]: '',
        [ContactFormKeys.Subject]: '',
        [ContactFormKeys.Message]: ''
    })

    return (
        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" onChange={onChange} value={values[ContactFormKeys.Name]} />
                            <label htmlFor="name">Your Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" onChange={onChange} value={values[ContactFormKeys.Email]} />
                            <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" onChange={onChange} value={values[ContactFormKeys.Subject]} />
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control height200px" placeholder="Leave a message here" id="message" name="message" onChange={onChange} value={values[ContactFormKeys.Message]} ></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                </div>
            </form>

            <ToastContainer />
        </div>
    )
}

export default ContactForm;