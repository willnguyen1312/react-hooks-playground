/// <reference types="Cypress" />

context("Location", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("cy.hash() - get the current URL hash", () => {
    cy.get("div#root")
      .find("div[data-testid=renderedText]")
      .should("contain", "Sorry");

    cy.get("#root > nav > a:nth-child(1)").click();

    cy.url().should("eq", "http://localhost:3000/useState");

    cy.get("input")
      .should("have.value", "")
      .type("123");

    cy.get("#root > div > div > h1").should("contain", 123);
  });

  // it('cy.location() - get window.location', () => {
  //   // https://on.cypress.io/location
  //   cy.location().should((location) => {
  //     expect(location.hash).to.be.empty
  //     expect(location.href).to.eq('https://example.cypress.io/commands/location')
  //     expect(location.host).to.eq('example.cypress.io')
  //     expect(location.hostname).to.eq('example.cypress.io')
  //     expect(location.origin).to.eq('https://example.cypress.io')
  //     expect(location.pathname).to.eq('/commands/location')
  //     expect(location.port).to.eq('')
  //     expect(location.protocol).to.eq('https:')
  //     expect(location.search).to.be.empty
  //   })
  // })

  // it('cy.url() - get the current URL', () => {
  //   // https://on.cypress.io/url
  //   cy.url().should('eq', 'https://example.cypress.io/commands/location')
  // })
});
