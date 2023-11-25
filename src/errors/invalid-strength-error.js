
class InvalidStrengthError extends Error {

    constructor() {
        super('Invalid password strength passed to constructor.');
    }
}


export default InvalidStrengthError;