import {
    getLogin_Out_Button
} from '../page-objects/login'

import {
    LOGIN_BTN_TEXT, LOGOUT_BTN_TEXT
} from '../fixtures/login_testdata'

describe('Various User Roles Login Flow', function () {

    it('Verify Login for Admin User', function () {
        cy.createUser(Cypress.env('cyAdminUser'), Cypress.env('cyAdminPassword'), Cypress.env('cyAdminRole'));
        cy.login(Cypress.env('cyAdminUser'));
        cy.visit('/');
        getLogin_Out_Button().should('contain', LOGOUT_BTN_TEXT);
        cy.logout();
        cy.visit('/');
        getLogin_Out_Button().should('contain', LOGIN_BTN_TEXT);
        cy.deleteUser(Cypress.env('cyAdminUser'));
    });

    it('Verify Login for Editor User', function () {
        cy.createUser(Cypress.env('cyEditorUser'), Cypress.env('cyEditorPassword'), Cypress.env('cyEditorRole'));
        cy.login(Cypress.env('cyEditorUser'));
        cy.visit('/');
        getLogin_Out_Button().should('contain', LOGOUT_BTN_TEXT);
        cy.logout();
        cy.visit('/');
        getLogin_Out_Button().should('contain', LOGIN_BTN_TEXT);
        cy.deleteUser(Cypress.env('cyEditorUser'));
    });

});
