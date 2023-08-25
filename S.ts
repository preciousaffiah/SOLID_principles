// S: Single Responsibility Principle
// A class should change for only ne reason, therefor having only one task

// wrong
const validateAndCreateUser = (name, password, email) => {
    const isFormValid = testForm(name, password, email);
    if (isFormValid) {
        User.Create(name, password, email)
    }
}

// correct
// Only Validate
const validateRequest = (req) => {
    const isFormValid = testForm(name, password, email);

    // form is valid
    if (isFormValid) {
        createUser(req)
    }
}

// Only Create User in the Database
createUser = (req) => User.Create(req.name, req.password, req.email)
