
import {
  getTopicTitle, getSummaryTextFormat, getSourceBtnLocator, getCKEditorBodyLocator, clickBtnInsideCKEditorSummary, getSubmitButtonLocator, typeContentTag, getArticleTag, getArticleHeader, getArticleBody, getArticleMessage
} from '../page-objects/create_article'

import {
  CONTENT_URL, NODE_URL, ARTICLE_BODY, ARTICLE_TITLE, FORMAT_TYPE, SAVE_BTN_TEXT, ARTICLE_TAG
} from '../fixtures/article_testdata.js'

describe('Article E2E flow', function () {

  before(function () {
    cy.createUser(Cypress.env('cyAdminUser'), Cypress.env('cyAdminPassword'), Cypress.env('cyAdminRole'));
  });

  it('Create and Verify the article using ui', function () {
    cy.login('admin');
    cy.visit(CONTENT_URL);
    getTopicTitle().type(ARTICLE_TITLE);
    cy.checkDefaultTextFormat(getSummaryTextFormat, FORMAT_TYPE);
    clickBtnInsideCKEditorSummary(getSourceBtnLocator);
    cy.setValueByJQuery(getCKEditorBodyLocator, ARTICLE_BODY);
    typeContentTag(ARTICLE_TAG);
    cy.server();
    cy.route('POST', '/quickedit/*').as('quickEdit');
    cy.clickByLocatorAndPartialText(getSubmitButtonLocator, SAVE_BTN_TEXT);
    cy.wait('@quickEdit', { timeout: 7000 });
    getArticleMessage().should('contain.text', ARTICLE_TITLE);
    cy.logout();
    cy.url().then(function (currentURL) {
      cy.visit(currentURL);
      getArticleHeader().should('contain.text', ARTICLE_TITLE);
      getArticleBody().should('contain.text', ARTICLE_TITLE);
      getArticleTag().should('contain.text', ARTICLE_TAG);
    });
  });

  after(function () {
    cy.deleteUser(Cypress.env('cyAdminUser'));
  });

});