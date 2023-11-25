
import InvalidLengthError from '../src/errors/invalid-length-error.js';
import InvalidStrengthError from '../src/errors/invalid-strength-error.js';
import PasswordHelper from '../src/password-helper.js';
import Password from '../index.js';
import assert from 'assert';


describe('Instance', function() {

    it('Can create instance successfully', function() {

        const password = new Password;
        assert.equal(password instanceof Password, true);

    });

});


describe('Error', function() {

    it('Throws invalid length error', function() {

        assert.throws(() => new Password({length: -1}), InvalidLengthError);

    });

    it('Throws invalid strength error', function() {

        assert.throws(() => new Password({strength: 'normal'}), InvalidStrengthError);

    });

});


describe('Password', function() {

    it('Can create password of default length', function() {

        const password = new Password;
        let length = password.generate().length;

        assert.equal(length, PasswordHelper.defaultLength);

    });


    it('Can create password of given length', function() {

        let length = 10;

        const password = new Password({length: length});
        assert.equal(length, password.generate().length);

    });

});