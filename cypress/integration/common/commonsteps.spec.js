/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import ActionsPage from '../../pages/actions.pages.js'
import Asserts from '../../utilities/asserts.js'
import PaigeHomePageLocator from "../../locators/paige/paige_homePage.locators.js"

const asserts = new Asserts()
const actions_page = new ActionsPage()

const paige_homePage = new PaigeHomePageLocator()

// Given I am in Paige home Page

Given('I am in Paige home Page', () => {
    actions_page.navigate("https://www.paige.com")
});

// And I wait for "1" seconds

When('I wait for {string} seconds', function(seconds) {
    actions_page.wait(seconds)
});


// And I maximize the window
When('I maximize the window', () => {
    actions_page.maximize_window()
});