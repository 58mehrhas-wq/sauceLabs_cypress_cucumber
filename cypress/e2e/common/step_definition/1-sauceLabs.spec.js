/// <reference types="cypress" />


import {When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Asserts from "../../../utilities/asserts"
import ActionsPage from '../../../pages/actions.pages'
import SauceDemoHomePageLocator from "../../../locators/SauceDemo/sauceDemo_homePage.locators"
import ShoppingCartPage from "../../../locators/SauceDemo/shoppingCartPage.locators"
import CheckoutPage from "../../../locators/SauceDemo/checkoutPage.locators"
import CheckoutOverviewPage from "../../../locators/SauceDemo/checkoutOverviewPage.locators"
import ThankYouPage from "../../../locators/SauceDemo/thankYouPage.locators"
import ProductsPage from "../../../locators/SauceDemo/productsPage.locator"


const asserts = new Asserts()
const actions_page = new ActionsPage()
const sauceDemo_page = new SauceDemoHomePageLocator()
const shopping_cart_page = new ShoppingCartPage()
const checkout_page = new CheckoutPage()
const checkout_overeview_page = new CheckoutOverviewPage()
const thankyou_page = new ThankYouPage()
const products_page = new ProductsPage()


const timestamp = Math.round(new Date().getTime() / 1000)

Then('I land on Swag Labs page', () => {
    asserts.assert_is_visible(sauceDemo_page.HomePage())
})
When('I click on Sauce Labs Backpack', () => {
    actions_page.click_element(sauceDemo_page.SLBgpk());
    
});

Then('I land on Backpack page', () => {
    asserts.assert_is_visible(sauceDemo_page.BackpackPage())
})

When('I click on Add to Cart for Backpack', () => {
    actions_page.click_element(sauceDemo_page.SLBgPkAddToCart());
});

Then('I see the Remove button appears', () => {
    asserts.assert_is_visible(sauceDemo_page.SLBgPkRemoveBtn());
});

When('I click on the Remove button', () => {
    actions_page.click_element(sauceDemo_page.SLBgPkRemoveBtn());
});

Then('I see the Add to Cart for Backpack', () => {
    asserts.assert_is_visible(sauceDemo_page.SLBgPkAddToCart());
});

When('I click on Add to Cart for Backpack again', () => {
    actions_page.click_element(sauceDemo_page.SLBgPkAddToCart());
});

Then('I see the Shopping Cart Badge appears', () => {
    asserts.assert_is_visible(sauceDemo_page.cartBadge());
});

When('I click on Shopping Cart Button', () => {
    actions_page.click_element(sauceDemo_page.shoppinCartBtn());
});

Then('I land on Shopping Cart page', () => {
    asserts.assert_is_visible(shopping_cart_page.yourCartTitle());
});

When('I click on Checkout Button', () => {
    actions_page.click_element(shopping_cart_page.checkoutBtn());
});

Then('I land on Checkout page', () => {
    asserts.assert_is_visible(checkout_page.checkoutInfo());
});

When('I click on Continue Button', () => {
    actions_page.click_element(checkout_page.continueBtn());
});

Then('I land on Checkout Overview page', () => {
    asserts.assert_is_visible(checkout_overeview_page.checkoutOverviewTitle());
});

When('I click on Finish Button', () => {
    actions_page.click_element(checkout_overeview_page.finishBtn());
});

Then('I land on Thank you page', () => {
    asserts.assert_is_visible(thankyou_page.thankyouNote());
})

When('I click on Back Home Button', () => {
    actions_page.click_element(thankyou_page.backHomeBtn());
});

Then('I land on the Products page', () => {
    asserts.assert_is_visible(products_page.productTitlePage());
}); 

When('I click on the Hamburger button', () => {
    actions_page.click_element(products_page.hamburgerBtn());

});

Then('I see Item List Sidebar', () => {
    asserts.assert_is_visible(products_page.itemListSidebar());
});

And('I click on the Item List Sidebar', () => {
    actions_page.click_element(products_page.itemListSidebar());
});


When('I click on logout button', () => {
    actions_page.click_element(products_page.logoutBtn());   

});

Then('I land on Sauce Demo Login Page again', () => {
    asserts.assert_is_visible(sauceDemo_page.loginLogo())
});





