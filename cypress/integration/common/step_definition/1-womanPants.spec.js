import {When, Then } from "cypress-cucumber-preprocessor/steps"
import Asserts from "../../../utilities/asserts"
import ActionsPage from '../../../pages/actions.pages'
import PaigeHomePageLocator from "../../../locators/paige/paige_homePage.locators"
import PaigeWomenPantsPage from "../../../locators/paige/paige_womenPantsPage.locators"
import PaigeBrooklynPage from "../../../locators/paige/paige_brooklynPage.locators"

const asserts = new Asserts()
const actions_page = new ActionsPage()
const paige_homePage = new PaigeHomePageLocator()
const paige_womenPantsPage = new PaigeWomenPantsPage()
const paige_brooklynPage = new PaigeBrooklynPage()
const timestamp = Math.round(new Date().getTime() / 1000)

// And I wait for the popup to appear
When('I wait for the popup to appear', () => {
    asserts.assert_is_visible(paige_homePage.popupAppearance())
})

// When I close the popup

When('I close the popup', () => {
    actions_page.click_element(paige_homePage.closePopup())
    
});

// And I assert the PAIGE logo appears
When('I assert the PAIGE logo appears', () => {
    asserts.assert_is_visible(paige_homePage.paigeBtn())
});

// When  I hover on Women tab
When('I hover on Women tab', () => {
    actions_page.hover_element(paige_homePage.womenTab())
});

// Then I select Pants option
Then('I select Pants option', () => {
    actions_page.click_element(paige_homePage.pantsOption())
});

// And I assert the WOMEN PANTS title appears

When('I assert the WOMEN PANTS title appears', () => {
    asserts.assert_is_visible(paige_womenPantsPage.womenPantsTitle())
});

// When I click into the search field

When('I click into the search field', () => {
    actions_page.click_element(paige_womenPantsPage.searchField())
});

// When I search for <pantsItem></pantsItem>

Then('I search for {string}', function(pantsItem) {
    actions_page.type_text(paige_womenPantsPage.searchField(), pantsItem)
});

// And I click on Brooklyn button

When('I click on Brooklyn button', () => {
    actions_page.click_element(paige_womenPantsPage.brooklynBtn())
});

When('I assert the Brooklyn title appears', () => {
    asserts.assert_is_visible(paige_brooklynPage.brooklynPageTile()) 
});

// When I select size 26
When('I select size 26', () => {
    actions_page.click_element_force(paige_brooklynPage.size26())
});


// Then In Stock message appears
Then('In Stock message appears', () => {
    asserts.assert_is_visible(paige_brooklynPage.inStock())
});

// When I select size 31
When('I select size 31', () => {
    actions_page.click_element_force(paige_brooklynPage.size31())
});


// Then Sold Out message appears
Then('Sold Out message appears', () => {
    asserts.assert_is_visible(paige_brooklynPage.soldOut())
});

// When I select size 29
When('I select size 29', () => {
    actions_page.click_element_force(paige_brooklynPage.size29())
});

// Then I add it to the shopping bag
Then('I add it to the shopping bag', () => {
    actions_page.click_element_force(paige_brooklynPage.addToShoppingBag())
});

// And The Good News Shipping message displays
Then('The Good News Shipping message displays', () => {
    asserts.assert_is_visible(paige_brooklynPage.goodNewsShippingMsg())
});

// Then I assert the Checkout button exists
Then('I assert the Checkout button exists', () => {
    asserts.assert_is_visible(paige_brooklynPage.checkoutBtn())
});

// When I hover on Checkout button
When('I hover on Checkout button', () => {
    actions_page.hover_element(paige_brooklynPage.checkoutBtn())
})


// When I click on Checkout button
Then('I click on Checkout button', () => {
    actions_page.click_element_force(paige_brooklynPage.checkoutBtn());
});

// And I click on Checkout As Guest
When('I click on Checkout As Guest', () => {
    actions_page.click_element(paige_brooklynPage.checkoutAsGuest())
})



