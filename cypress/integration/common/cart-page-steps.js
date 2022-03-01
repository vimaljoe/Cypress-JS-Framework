import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../support/pageObjects/cartPage";
import HomePage from "../../support/pageObjects/homePage";

// Step definition file for the cart page actions
When(/^user proceed to checkout to sign in$/, function () {
    cy.get(CartPage.PROCEED_TO_CHECKOUT_BUTTON_01).scrollIntoView().should('be.visible').click();
});

Given(/^user increase the quantity to (.*)$/, function (qty) {
    cy.get(CartPage.CART_QUANTITY).should('be.visible').clear().type(qty);
});

//Use sign-in steps
Given(/^user able to login to website successfully$/, function () {
    cy.get(CartPage.USER_NAME).should('be.visible').clear().type(Cypress.env('username'));
    cy.get(CartPage.PASSWORD).should('be.visible').clear().type(Cypress.env('password'));
    cy.get(CartPage.SUBMIT_BUTTON).should('be.visible').click();
    cy.get(HomePage.ACCOUNT).should(($div) => {
        expect($div.text()).to.contain('Tester Test');
    })
});

Given(/^user confirm delivery address and shipping$/, function () {
    cy.get(CartPage.PROCEED_TO_CHECKOUT_BUTTON_01).scrollIntoView().should('be.visible').click();
    cy.get(CartPage.AGREE_T_C).click();
    cy.get(CartPage.PROCEED_TO_CHECKOUT_BUTTON_01).scrollIntoView().should('be.visible').click();
});

//Printing the results to the console and to the cypress runner log
Then(/^user print the product name and price$/, function () {
    let productName, totalPrice;
    cy.get(CartPage.PRODUCT_NAME).should(($productName) => {
        productName = $productName.text();
    }).then( () => {
        cy.log(`Product name : ${productName}`);
        console.log(`Product name : ${productName}`);
    })
    cy.get(CartPage.TOTAL_PRICE).should(($totalPrice) => {
        totalPrice = $totalPrice.text();
    }).then( () => {
        cy.log(`Total price : ${totalPrice}`);
        console.log(`Total price : ${totalPrice}`);
    })
});

Given(/^user add the item to cart$/, function () {
    cy.get(CartPage.ADD_TO_CART_BUTTON).should('be.visible').click();
});
