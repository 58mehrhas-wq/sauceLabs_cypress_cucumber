/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pages/login.pages.js"
import LoginPageLocator from "../../locators/SauceDemo/login.locators.js"
import ActionsPage from '../../pages/actions.pages.js'
import Asserts from '../../utilities/asserts.js'
import SauceDemoHomePage from "../../locators/SauceDemo/sauceDemo_homePage.locators.js"

const asserts = new Asserts()
const actions_page = new ActionsPage()
const sauceDemo_homePage = new SauceDemoHomePage()
const login_page = new LoginPage()
const login_page_locator = new LoginPageLocator()

When('I enter {string} and {string}', (username, password) => {

    login_page.swag_login(username, password)
});

When('I click on login button', () => {    
    actions_page.click_element(login_page_locator.login_button())
});

When('I enter {string}, {string} and {string}', (firstname, lastname, zipcode) => {
    login_page.checkout_login(firstname, lastname, zipcode)
})