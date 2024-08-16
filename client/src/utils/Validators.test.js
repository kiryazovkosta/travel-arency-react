import { 
    validateRegistrationForm, 
    validateLoginForm,
    validateSignupForm,
    validateMessageForm,
    validateCreateDestinationForm,
    validateCreatePackageForm
} from './Validators'

describe('validateRegistrationForm', () => {
    const validValues = {
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        username: 'testuser',
        avatar: 'avatar.png',
    };

    test('Should return "All fields are required." when any field is missing', () => {
        const { email, ...missingEmail } = validValues;
        expect(validateRegistrationForm(missingEmail)).toBe("All fields are required.");

        const { password, ...missingPassword } = validValues;
        expect(validateRegistrationForm(missingPassword)).toBe("All fields are required.");

        const { confirmPassword, ...missingConfirmPassword } = validValues;
        expect(validateRegistrationForm(missingConfirmPassword)).toBe("All fields are required.");

        const { username, ...missingUsername } = validValues;
        expect(validateRegistrationForm(missingUsername)).toBe("All fields are required.");

        const { avatar, ...missingAvatar } = validValues;
        expect(validateRegistrationForm(missingAvatar)).toBe("All fields are required.");
    });

    test('Should return "Passwords do not match." when passwords do not match', () => {
        const values = { ...validValues, confirmPassword: 'differentPassword' };
        expect(validateRegistrationForm(values)).toBe("Passwords do not match.");
    });

    test('Should return "Password must be at least 5 characters long." when password is too short', () => {
        const values = { ...validValues, password: '1234', confirmPassword: '1234' };
        expect(validateRegistrationForm(values)).toBe("Password must be at least 5 characters long.");
    });

    test('Should return null for valid input', () => {
        expect(validateRegistrationForm(validValues)).toBeNull();
    });
});

describe('validateLoginForm', () => {
    const validValues = {
        email: 'test@example.com',
        password: 'password123',
    };

    test('Should return "Email and password are required." when email is missing', () => {
        const values = { ...validValues, email: '' };
        expect(validateLoginForm(values)).toBe("Email and password are required.");
    });

    test('Should return "Email and password are required." when password is missing', () => {
        const values = { ...validValues, password: '' };
        expect(validateLoginForm(values)).toBe("Email and password are required.");
    });

    test('Should return "Email and password are required." when both email and password are missing', () => {
        const values = { email: '', password: '' };
        expect(validateLoginForm(values)).toBe("Email and password are required.");
    });

    test('Should return "Password must be at least 5 characters long." when password is too short', () => {
        const values = { ...validValues, password: '1234' };
        expect(validateLoginForm(values)).toBe("Password must be at least 5 characters long.");
    });

    test('Should return null for valid input', () => {
        expect(validateLoginForm(validValues)).toBeNull();
    });
});

describe('validateSignupForm', () => {
    test('Should return "Email is required." when email is missing', () => {
        const values = { signUpEmail: '' };
        expect(validateSignupForm(values)).toContain("Email is required.");
    });

    test('Should return "Email is invalid." when email is malformed', () => {
        const values = { signUpEmail: 'invalid-email' };
        expect(validateSignupForm(values)).toContain("Email is invalid.");
    });

    test('Should return both "Email is required." and "Email is invalid." for empty and malformed email', () => {
        const values = { signUpEmail: '' };
        expect(validateSignupForm(values)).toContain("Email is required.");

        const malformedValues = { signUpEmail: 'invalid-email' };
        expect(validateSignupForm(malformedValues)).toContain("Email is invalid.");
    });

    test('Should return no errors for a valid email', () => {
        const values = { signUpEmail: 'test@example.com' };
        expect(validateSignupForm(values)).toEqual([]);
    });
});

describe('validateMessageForm', () => {
    const validValues = {
        name: 'John Doe',
        email: 'test@example.com',
        subject: 'Subject Example',
        message: 'This is a test message.',
    };

    test('Should return "Name in contact form is required." when name is missing', () => {
        const values = { ...validValues, name: '' };
        expect(validateMessageForm(values)).toContain("Name in contact form is required.");
    });

    test('Should return "Email in contact form is required." when email is missing', () => {
        const values = { ...validValues, email: '' };
        expect(validateMessageForm(values)).toContain("Email in contact form is required.");
    });

    test('Should return "Email in contact form is invalid." when email is malformed', () => {
        const values = { ...validValues, email: 'invalid-email' };
        expect(validateMessageForm(values)).toContain("Email in contact form is invalid.");
    });

    test('Should return "Subject in contact form is required." when subject is missing', () => {
        const values = { ...validValues, subject: '' };
        expect(validateMessageForm(values)).toContain("Subject in contact form is required.");
    });

    test('Should return "Message in contact form is required." when message is missing', () => {
        const values = { ...validValues, message: '' };
        expect(validateMessageForm(values)).toContain("Message in contact form is required.");
    });

    test('Should return no errors for valid input', () => {
        expect(validateMessageForm(validValues)).toEqual([]);
    });

    test('Should return multiple errors when multiple fields are missing or invalid', () => {
        const values = { name: '', email: 'invalid-email', subject: '', message: '' };
        const errors = validateMessageForm(values);
        expect(errors).toContain("Name in contact form is required.");
        expect(errors).toContain("Email in contact form is invalid.");
        expect(errors).toContain("Subject in contact form is required.");
        expect(errors).toContain("Message in contact form is required.");
    });
});

describe('validateCreateDestinationForm', () => {
    const validValues = {
        title: 'Beautiful Beach',
        discount: '20',
        imageUrl: 'https://example.com/image.jpg',
        summary: 'A beautiful beach destination with golden sand and clear waters.',
    };

    test('Should return "Title is required." when title is missing', () => {
        const values = { ...validValues, title: '' };
        expect(validateCreateDestinationForm(values)).toContain("Title is required.");
    });

    test('Should return "Image URL is required." when imageUrl is missing', () => {
        const values = { ...validValues, imageUrl: '' };
        expect(validateCreateDestinationForm(values)).toContain("ImageUrl is required.");
    });

    test('Should return "Summary is required." when summary is missing', () => {
        const values = { ...validValues, summary: '' };
        expect(validateCreateDestinationForm(values)).toContain("Summary is required.");
    });

    test('Should return "Discount is required." when discount is missing', () => {
        const values = { ...validValues, discount: '' };
        expect(validateCreateDestinationForm(values)).toContain("Discount is required.");
    });

    test('Should return "Discount is invalid." when discount is not a number', () => {
        const values = { ...validValues, discount: 'invalid-discount' };
        expect(validateCreateDestinationForm(values)).toContain("Discount is invalid.");
    });

    test('Should return no errors for valid input', () => {
        expect(validateCreateDestinationForm(validValues)).toEqual([]);
    });

    test('Should return multiple errors when multiple fields are missing or invalid', () => {
        const values = {
            title: '',
            discount: 'invalid-discount',
            imageUrl: '',
            summary: '',
        };
        const errors = validateCreateDestinationForm(values);
        expect(errors).toContain("Title is required.");
        expect(errors).toContain("Discount is invalid.");
        expect(errors).toContain("ImageUrl is required.");
        expect(errors).toContain("Summary is required.");
    });
});

describe('validateCreatePackageForm', () => {
    const validValues = {
        title: 'Adventure Tour',
        duration: '7 days',
        persons: '4',
        price: '1200',
        destinationId: 'destination123',
        imageUrl: 'https://example.com/image.jpg',
        summary: 'An exciting adventure tour across the mountains.',
    };

    test('Should return "Title is required." when title is missing', () => {
        const values = { ...validValues, title: '' };
        expect(validateCreatePackageForm(values)).toContain("Title is required.");
    });

    test('Should return "Duration is required." when duration is missing', () => {
        const values = { ...validValues, duration: '' };
        expect(validateCreatePackageForm(values)).toContain("Duration is required.");
    });

    test('Should return "Persons number is required." when persons is missing', () => {
        const values = { ...validValues, persons: '' };
        expect(validateCreatePackageForm(values)).toContain("Persons number is required.");
    });

    test('Should return "Persons number is invalid." when persons is not a number', () => {
        const values = { ...validValues, persons: 'invalid-number' };
        expect(validateCreatePackageForm(values)).toContain("Persons number is invalid.");
    });

    test('Should return "Price is required." when price is missing', () => {
        const values = { ...validValues, price: '' };
        expect(validateCreatePackageForm(values)).toContain("Price is required.");
    });

    test('Should return "Price is invalid." when price is not a number', () => {
        const values = { ...validValues, price: 'invalid-price' };
        expect(validateCreatePackageForm(values)).toContain("Price is invalid.");
    });

    test('Should return "Destination is required." when destinationId is missing', () => {
        const values = { ...validValues, destinationId: '' };
        expect(validateCreatePackageForm(values)).toContain("Destination is required.");
    });

    test('Should return "Image is required." when imageUrl is missing', () => {
        const values = { ...validValues, imageUrl: '' };
        expect(validateCreatePackageForm(values)).toContain("Image is required.");
    });

    test('Should return "Summary is required." when summary is missing', () => {
        const values = { ...validValues, summary: '' };
        expect(validateCreatePackageForm(values)).toContain("Summary is required.");
    });

    test('Should return no errors for valid input', () => {
        expect(validateCreatePackageForm(validValues)).toEqual([]);
    });

    test('Should return multiple errors when multiple fields are missing or invalid', () => {
        const values = {
            title: '',
            duration: '',
            persons: 'invalid-number',
            price: 'invalid-price',
            destinationId: '',
            imageUrl: '',
            summary: '',
        };
        const errors = validateCreatePackageForm(values);
        expect(errors).toContain("Title is required.");
        expect(errors).toContain("Duration is required.");
        expect(errors).toContain("Persons number is invalid.");
        expect(errors).toContain("Price is invalid.");
        expect(errors).toContain("Destination is required.");
        expect(errors).toContain("Image is required.");
        expect(errors).toContain("Summary is required.");
    });
});