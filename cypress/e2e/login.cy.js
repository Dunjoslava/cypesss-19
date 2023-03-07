/// <reference types=“Cypress” /.

describe("login tests", () => {
  it("login with non-unregistered user", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get("a[href='/login']").click();
    cy.get("#email").type("random@mail.com");
    cy.get("#password").type("Konstantin2012");
    cy.get("button").click();
  });

  it("register without email address provided", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get("a[href='/login']").click();
    cy.get("#password").type("Konstantin2012");
    cy.get("button").click();
    cy.url().should("contain", "/login");
  });

  it("register without password provided", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get("a[href='/login']").click();
    cy.get("#email").type("dunjatest@gmail.com");
    cy.get("button").click();
    cy.url().should("contain", "/login");
  });

  it("login with valid credentials", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    // cy.get("a[href='/login']").click();
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("dunjatest@gmail.com");
    cy.get("#password").type("Konstantin2012");
    cy.get("button").click();
  });
});
