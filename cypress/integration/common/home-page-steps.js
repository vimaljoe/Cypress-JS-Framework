import {Given} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import {COMPANY} from "../../fixtures/websites.json"
// Step definition file for the home page actions


Given(/^user can access myStore website while having an existing account$/, function () {
    if(COMPANY.name === 'myStore') {
        cy.visit('baseUrl').then(() => {
            cy.get(HomePage.BASE_PAGE_LOGO).should('be.visible');
            cy.get(HomePage.FOOTER).should('be.visible');
        })
    }
});

Given(/^user hover over the (.*) section$/, function (section) {
    if (section === 'dresses') {
        cy.get(HomePage.DRESSES_LINK).rightclick();
    }
});

Given(/^user click on the (.*) dresses$/, function (type) {
    if (type === 'summer') {
        cy.get(HomePage.DRESSES).should('be.visible').within(() => {
            cy.get(HomePage.SUMMER_DRESSES_LINK).should('be.visible').click();
        })
    }
});

Given(/^user select a best selling item$/, function () {
    //Paramterization possibly for best selling item.
    cy.get(HomePage.FIRST_BEST_SELLER_NAME).should('be.visible').click();
});
