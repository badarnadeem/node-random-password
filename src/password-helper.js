
const DEFAULT_LENGTH      = 20;

const SPECIAL_CHARACTERS  = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const LOWERCASE_ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS              = "0123456789";

class PasswordHelper {

    static get defaultLength() {
        return DEFAULT_LENGTH;
    }

    static get specialCharacters() {
        return SPECIAL_CHARACTERS;
    }

    static get lowercaseAlphabets() {
        return LOWERCASE_ALPHABETS;
    }

    static get uppercaseAlphabets() {
        return UPPERCASE_ALPHABETS;
    }

    static get digits() {
        return DIGITS;
    }

}


export default PasswordHelper;