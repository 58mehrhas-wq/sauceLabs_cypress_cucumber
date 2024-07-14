class LoginPageLocator {

    username() {
        return '#user-name'
    }

    password() {
        return '#password'
    }

    login_button() {
        return '[data-test=login-button]'        
    }

    firstname() {
        return '#first-name'
    }

    lastname() {
        return '#last-name'
    }

    zipcode() {
        return '#postal-code'
    }

}

export default LoginPageLocator;