export const validateRegistrationForm = (values) => {
    if (!values.email 
        || !values.password 
        || !values.confirmPassword
        || !values.username
        || !values.avatar) {
        return "All fields are required.";
    }
    if (values.password !== values.confirmPassword) {
        return "Passwords do not match.";
    }
    if (values.password.length < 5) {
        return "Password must be at least 5 characters long.";
    }
    
    return null;
};

export const validateLoginForm = (values) => {
    if (!values.email || !values.password) {
        return "Email and password are required.";
    }
    if (values.password.length < 5) {
        return "Password must be at least 5 characters long.";
    }
    return null;
};

export const validateSignupForm = (values) => {
    const { signUpEmail } = values;
    const errors = [];

    if (!signUpEmail) {
        errors.push("Email is required.");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpEmail))) {
        errors.push("Email is invalid.");
    }

    return errors;
};

export const validateMessageForm = (values) => {
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

export const validateCreateDestinationForm = (values) => {
    const { title, discount, imageUrl, summary } = values;
    const errors = [];

    if (!title) {
        errors.push("Title is required.");
    }

    if (!imageUrl) {
        errors.push("ImageUrl is required.");
    }

    if (!summary) {
        errors.push("Summary is required.");
    }

    if (!discount) {
        errors.push("Discount is required.");
    } else if (isNaN(discount) || discount.trim() === '') {
        errors.push("Discount is invalid.");
    }

    return errors;
};

export const validateCreatePackageForm = (values) => {
    const errors = [];

    if (!values.title) {
         errors.push("Title is required.");
    }

    if (!values.duration) {
        errors.push("Duration is required.");
    }

    if (!values.persons) {
        errors.push("Persons number is required.");
    } else if (isNaN(values.persons) || values.persons.trim() === '') {
        errors.push("Persons number is invalid.");
    }

    if (!values.price) {
        errors.push("Price is required.");
    } else if (isNaN(values.price) || values.price.trim() === '') {
        errors.push("Price is invalid.");
    }

    if (!values.destinationId) {
        errors.push("Destination is required.");
    }

    if (!values.imageUrl) {
        errors.push("Image is required.");
    }

    if (!values.summary) {
        errors.push("Summary is required.");
    }

    return errors;
}
