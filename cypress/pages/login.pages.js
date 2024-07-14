import LoginPageLocator from "../locators/SauceDemo/login.locators";
import ActionsPage from "./actions.pages";

const actions_page = new ActionsPage()
const login_page_locator =new LoginPageLocator()


class LoginPage {

    swag_login(username, password) {
        actions_page.type_text(login_page_locator.username(), username)
        actions_page.type_text(login_page_locator.password(), password)
    }

    checkout_login(firstname, lastname, zipcode) {
        actions_page.type_text(login_page_locator.firstname(), firstname)
        actions_page.type_text(login_page_locator.lastname(), lastname)
        actions_page.type_text(login_page_locator.zipcode(), zipcode)
    }

}
export default LoginPage;