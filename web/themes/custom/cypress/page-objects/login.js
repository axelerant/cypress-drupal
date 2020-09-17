/**
 * Get Login and Logout button locator
 */
export function getLogin_Out_Button() {
    return cy.get('.clearfix a').contains('Log')
}