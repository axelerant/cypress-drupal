/**
 * Get Add Content Button Locator
 */
export function getAddContentBtn() {
    return cy.get('.local-actions__item > .button')
}

/**
 * Get Topic Title Locator
 */
export function getTopicTitle() {
    return cy.get('#edit-title-0-value')
}

/**
 * Get Topic Publicity Locator
 */
export function getTopicPublicityLocator() {
    return cy.get('#edit-field-topic-duration-0-value')
}

/**
 * Click elements inside the CKEditor Content Summary
 * @param {*} Locator  - accepts css Locator only
 */
export function clickBtnInsideCKEditorSummary(locator) {
    cy.get(`${locator}`, { timeout: 15000 }).click({ force: true });
}

/**
 * Type Content Tag Name
 * @param {*} contentTag - String
 */
export function typeContentTag(contentTag) {
    cy.get('#edit-field-tags-target-id').clear().type(contentTag, { force: true })
}

/**
 * Get Topic Link Locator
 */
export const getTopicLink = '.admin-item__link'

/**
 * Get Topic Type Locator
 */
export const getTopicType = '#edit-field-topic-type'

/**
 * Get Summary Text Format Locator
 */
export const getSummaryTextFormat = '#edit-body-0-format--2'

/**
 * Get Source Button Locator
 */
export const getSourceBtnLocator = '#cke_24'

/**
 * Get CKEditor Body Locator
 */
export const getCKEditorBodyLocator = '.cke_source'

/**
 * Get Topic Duration Locator
 */
export const getTopicDurationLocator = '#edit-field-topic-duration-0-value'

/**
 * Get Topic Audience Locator
 */
export const getTopicAudienceLocator = '#edit-field-topic-audience'

/**
 * Get Topic Recording Link URI Locator
 */
export const getTopicRecordingLinkURI = '#edit-field-topic-recording-link-0-uri'

/**
 * Get Submit Button Locator
 */
export const getSubmitButtonLocator = '#edit-submit'

/**
 * Get Article Header
 */
export function getArticleHeader() {
    return cy.get('h1')
}

/**
 * Get Article Body
 */
export function getArticleBody() {
    return cy.get('.field--name-body')
}

/**
 * Get Article Tag
 */
export function getArticleTag() {
    return cy.get('.field--name-field-tags a')
}

/**
 * Get Article Message
 */
export function getArticleMessage() {
    return cy.get('.messages')
}