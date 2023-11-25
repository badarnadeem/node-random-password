
import InvalidLengthError from './errors/invalid-length-error.js';
import InvalidStrengthError from './errors/invalid-strength-error.js';
import PasswordStrength from './password-strength.js';
import PasswordHelper from './password-helper.js';


class Password {
    

    constructor(paramters) {

        let lengthTemp   = paramters?.length   ?? PasswordHelper.defaultLength;
        let strengthTemp = paramters?.strength ?? PasswordStrength.strengthStrong;
        
        if(lengthTemp < 1) {
            throw new InvalidLengthError;
        }

        if(!PasswordStrength.all.includes(strengthTemp)) {
            throw new InvalidStrengthError;
        }


        this._length   = lengthTemp;
        this._strength = strengthTemp;

    }


    generate() {

        let characters = PasswordHelper.lowercaseAlphabets;

        if(this._strength == PasswordStrength.strengthStrong) {
            characters += (PasswordHelper.uppercaseAlphabets + PasswordHelper.digits + PasswordHelper.specialCharacters);
        }

        if(this._strength == PasswordStrength.strengthMedium) {
            characters += PasswordHelper.digits;
        }

        let password = [];

        for(let i = 1; i <= this._length; i++) {

            password.push(characters[Math.floor(Math.random() * characters.length)]);

        }

        return password.join('');

    }

}


export default Password;