import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from "../../hooks/useForm";

import * as signUpService from "../../services/signupService"

const SingUpFormKeys = {
    SignUpEmail: 'signUpEmail'
}

function SignUp() {

    const validateForm = () => {
        const { signUpEmail } = values;
        const errors = [];

        if (!signUpEmail) {
            errors.push("Email is required.");
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpEmail))) {
            errors.push("Email is invalid.");
        }

        return errors;
    };

    const addEmailHandler = async (values) => {
        try {
            var errors = validateForm();
            if (errors.length > 0) {
                errors.forEach(error => toast.error(error));
            } else {
                const exists = await signUpService.existsEmail(values.signUpEmail);
                if (exists) {
                    toast.error('Provided email is already signup for our newsletter');
                } else {
                    await signUpService.create(values.signUpEmail);
                    values.signUpEmail = '';
                    toast.success("You successfully signup for our newsletter");
                }
            }
        } catch (error) {
            console.log(error);
            toast.error('There is an error with signup for our newsletter');
        }
    }

    const { values, onChange, onSubmit } = useForm(addEmailHandler, {
        [SingUpFormKeys.SignUpEmail]: ''
    });

    return (
        <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <form onSubmit={onSubmit}>
                    <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="email" name={SingUpFormKeys.SignUpEmail} id={SingUpFormKeys.SignUpEmail} placeholder="Your email" onChange={onChange} value={values[SingUpFormKeys.SignUpEmail]} />
                    <button type="submit" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp;