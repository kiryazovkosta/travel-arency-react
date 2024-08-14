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
    if (values.password.length < 6) {
        return "Password must be at least 6 characters long.";
    }
    return null;
};

export const validateLoginForm = (values) => {
    if (!values.email || !values.password) {
        return "Email and password are required.";
    }
    if (values.password.length < 6) {
        return "Password must be at least 6 characters long.";
    }
    return null;
};
