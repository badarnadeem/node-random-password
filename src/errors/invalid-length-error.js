
class InvalidLengthError extends Error {

    constructor() {
        super('Password length cannot be zero or negative.');
    }
}

export default InvalidLengthError;