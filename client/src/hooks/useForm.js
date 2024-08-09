import { useState } from "react";

export function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (ev) => {
        const { name, value, type, checked } = ev.target;

        setValues(state => ({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit
    }
}