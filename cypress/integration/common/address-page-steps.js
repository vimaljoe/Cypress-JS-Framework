import Chance from 'chance';
import {Given} from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../support/pageObjects/cartPage";
import AddressPage from "../../support/pageObjects/addressPage";
// Step definition file for the address page actions

const chance = new Chance();
let addressAlias = chance.word({length: 10});

//Add the details for a new address
//Address line one and address alias are random
// so that user can add any number of addresses the application can support
Given(/^user add a new address$/, function () {
    cy.get(CartPage.ADD_NEW_ADDRESS_BUTTON).should('be.visible').click();
    cy.get(AddressPage.ADDRESS_LINE1).should('be.visible').clear().type(addressAlias);
    cy.get(AddressPage.CITY).should('be.visible').clear().type('Test City');
    cy.get(AddressPage.STATE).select('Illinois');
    cy.get(AddressPage.POSTCODE).should('be.visible').clear().type('10001');
    cy.get(AddressPage.COUNTRY).select('United States');
    cy.get(AddressPage.MOBILE_NUMBER).should('be.visible').clear().type('212-504-4115');
    cy.get(AddressPage.ALIAS).should('be.visible').clear().type(addressAlias);
    cy.get(AddressPage.SAVE_ADDRESS).should('be.visible').click();
});

//User changes the billing address here
Given(/^user change the billing address$/, function () {
    cy.get(AddressPage.ADDRESS_SAME).click();
    cy.get(AddressPage.BILLING_ADDRESS).select(addressAlias);
    cy.get(AddressPage.BILLING_ADDRESS_LINE1).should(($div) => {
        expect($div.text()).to.contain(addressAlias);
    })
});
