/* globals cy */

describe('Test App', () => {
  it('launches the default course list', () => {
    cy.visit('/');
  });

  it('opens with Fall CS courses', () => {
    cy.visit('/');
    cy.get('[data-cy=course-card]').should('contain', 'Fall CS');
  });
});
