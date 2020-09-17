
import {
  ARTICLE_JSON_TAG_ATTRIBUTE, ARTICLE_JSON_PRIM_ATTRIBUTES, NODE_TYPE, ARTICLE_JSON_HEADER_TITLE, ARTICLE_JSON_BODY_VALUE, ARTICLE_JSON_TAG
} from '../fixtures/article_testdata.js'

import {
  getArticleHeader, getArticleBody, getArticleTag
} from '../page-objects/create_article'

describe('Create an article via JSON:API', function () {

  before(function () {
    cy.createUser(Cypress.env('cyAdminUser'), Cypress.env('cyAdminPassword'), Cypress.env('cyAdminRole'));
  });

  it('Create and Verify the created articles via JSON:API', function () {
    cy.getRestToken(Cypress.env('cyAdminUser'), Cypress.env('cyAdminPassword')).then(function (token) {
      cy.createTaxonomyTerm(token, ARTICLE_JSON_TAG_ATTRIBUTE).then(function ($uuid) {
        return cy.reseedArticle(token, NODE_TYPE, ARTICLE_JSON_PRIM_ATTRIBUTES, {
          field_tags: {
            data: {
              type: 'taxonomy_term--tags',
              id: $uuid
            }
          }
        })
      })
    }).then(function (node_id) {
      cy.logout();
      cy.visit(`/node/${node_id}`);
      getArticleHeader().should('contain.text', ARTICLE_JSON_HEADER_TITLE);
      getArticleBody().should('contain.text', ARTICLE_JSON_BODY_VALUE);
      getArticleTag().should('contain.text', ARTICLE_JSON_TAG);
    });
  });

  after(function () {
    cy.deleteUser(Cypress.env('cyAdminUser'));
  });

});
