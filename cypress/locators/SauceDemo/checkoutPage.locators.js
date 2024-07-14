import ActionsPage from "../../pages/actions.pages"

class CheckoutPage {

    checkoutInfo() {
        return '.title'
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

    continueBtn() {
        return '#continue'
    }

    cancelBtn() {
        return '#cancel'
    }
}

export default CheckoutPage;