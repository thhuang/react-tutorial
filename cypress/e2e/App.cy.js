/* globals cy */

describe('Test App', () => {
  it('launches the default course list', () => {
    cy.visit('/');
  });

  it('opens with Fall CS courses', () => {
    cy.visit('/');
    cy.get('[data-cy=course-card]').should('contain', 'Fall CS');
  });

  it('shows Fall courses when Winter is selected', () => {
    cy.visit('/');
    cy.get('[data-cy=fall]').click();
    cy.get('[data-cy=course-card]').should('contain', 'Fall CS');
  });

  it('shows Winter courses when Winter is selected', () => {
    cy.visit('/');
    cy.get('[data-cy=winter]').click();
    cy.get('[data-cy=course-card]').should('contain', 'Winter CS');
  });

  it('shows Spring courses when Winter is selected', () => {
    cy.visit('/');
    cy.get('[data-cy=spring]').click();
    cy.get('[data-cy=course-card]').should('contain', 'Spring CS');
  });
});
