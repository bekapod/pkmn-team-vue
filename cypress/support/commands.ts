/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable;
    }
  }
}

Cypress.Commands.add("login", () => {
  const args = {
    username: Cypress.env("username"),
    password: Cypress.env("password"),
  };
  cy.session(
    args,
    () => {
      cy.visit("/");
      cy.findByRole("button", { name: "Open main menu" }).click();
      cy.findByRole("button", { name: "Login" }).click();
      cy.origin(
        Cypress.env("authDomain"),
        { args },
        ({ username, password }) => {
          cy.contains("Username")
            .parent()
            .find("input")
            .type(username, { log: false });
          cy.contains("Password")
            .parent()
            .find("input")
            .type(password, { log: false });
          cy.get("button").contains("Continue").click();
        }
      );
      cy.url().should("equal", `${Cypress.config("baseUrl")}/`);
    },
    {
      validate() {
        cy.visit("/");
        cy.findByRole("button", { name: "Open main menu" }).click();
        cy.findByRole("button", { name: "Logout" }).should("exist");
      },
    }
  );
});

export {};
