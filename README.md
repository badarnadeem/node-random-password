# Generate Random Passwords

Generate random passwords of different types and lengths

## Installation

Install the package using the following composer command

```
npm install @badrnadeem/random-password
```

## Usage

Using the Password class to generate random passwords

```

import Password from '@badrnadeem/random-password';

const password = new Password;

console.log(password.generate());

```

## Set Password Length and Strength

Pass in custom length and strength for your passwords. The default password length is set to 20 and default strength is set to strong.

```

import Password, { PasswordStrength } from '@badrnadeem/random-password';

const password = new Password({ 
    length: 12, 
    strength: PasswordStrength.strengthStrong 
});


```

## Password Strength Options

The following 3 options are available for password strength

```

import { PasswordStrength } from '@badrnadeem/random-password';

PasswordStrength.strengthStrong;
PasswordStrength.strengthMedium;
PasswordStrength.strengthWeak;


```