
const STRENGTH_STRONG = 'STRONG';
const STRENGTH_MEDIUM = 'MEDIUM';
const STRENGTH_WEAK   = 'WEAK';


class PasswordStrength {

    static get strengthStrong() {
        return STRENGTH_STRONG;
    }

    static get strengthMedium() {
        return STRENGTH_MEDIUM;
    }

    static get strengthWeak() {
        return STRENGTH_WEAK;
    }

    static get all() {
        return [
            this.strengthStrong, 
            this.strengthMedium, 
            this.strengthWeak
        ];
    }
}


export default PasswordStrength;