import {Given, When} from "cypress-cucumber-preprocessor/steps";
import CategoryPage from "../../support/pageObjects/categoryPage";
import Helpers from "./helpers/helpers";
import CartPage from "../../support/pageObjects/cartPage";

// Step definition file for the category page actions
Given(/^user change the to list view$/, function () {
    cy.get(CategoryPage.LIST_VIEW).should('be.visible').click();
});

Given(/^user select a (.*) dress$/, function (item) {
    cy.get(Helpers.summerDressItemNumber(item)).should('be.visible').click();
});

Given(/^user proceed to checkout$/, function () {
    cy.get(CategoryPage.PROCEED_TO_CHECkOUT).should('be.visible').click();
});

//Checking the updated details in cart
Given(/^user proceeds to checkout with the updated details$/, function () {
    cy.get(CategoryPage.PROCEED_TO_CHECkOUT).should('be.visible').click();
    cy.get(CartPage.PRODUCT_NAME).should('be.visible').should('contain.text',"Faded Short Sleeve T-shirts");
    cy.get(CartPage.PRODUCT_COLOR_SIZE).should('be.visible').should('contain.text', "Color : Blue, Size : L");
    cy.get(CartPage.PRODUCT_QTY).should('be.visible').should('contain.value', "2");
    cy.get(CartPage.PROCEED_TO_CHECKOUT_BUTTON_01).scrollIntoView().should('be.visible').click();
});

// Change the order details
When(/^user change the quantity (.*), size (.*) and color (.*)$/, function (qty, size, color) {
    cy.get(CategoryPage.QUANTITY_WANTED).should('be.visible').clear().type(qty);
    cy.get(CategoryPage.SIZE).select(size);
    if (color === 'blue') {
        cy.get(CategoryPage.BLUE_COLOR).should('be.visible').click();
    }
});

Given(/^user change the quantity$/, function () {
    cy.get(CategoryPage.QUANTITY_WANTED).should('be.visible').clear().type(2);
});

Given(/^user change the size$/, function () {
    cy.get(CategoryPage.SIZE).select('L');
});

Given(/^user change the color$/, function () {
    cy.get(CategoryPage.BLUE_COLOR).should('be.visible').click();
});
