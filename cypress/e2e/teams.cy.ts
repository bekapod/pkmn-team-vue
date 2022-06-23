// https://docs.cypress.io/api/introduction/api.html

describe("Teams", () => {
  it("allows creating a team", () => {
    cy.login();
    cy.visit("/");
    cy.findByRole("textbox", { name: /Team name/ }).type("E2E Test Team");
    cy.findByRole("button", { name: /create team/i }).click();
    cy.url().should("contain", "/team/");
    cy.findByRole("heading", { name: /E2E Test Team/ }).should("exist");
    cy.findByRole("status", { name: /team created/i }).should("exist");
  });

  it("allows editing team name", () => {
    cy.login();
    cy.visit("/");
    cy.findByRole("link", { name: /team b/i }).click();
    cy.url().should("contain", "/team/");
    cy.findByRole("heading", { name: /team b/i }).should("exist");
    cy.findByRole("button", { name: /edit team name/i }).click();
    cy.findByRole("textbox", { name: /team name/i }).type(
      "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}A new team name"
    );
    cy.findByRole("button", { name: /update/i }).click();
    cy.findByRole("heading", { name: /a new team name/i }).should("exist");
    cy.findByRole("status", { name: /team name updated/i }).should("exist");
  });

  it("allows searching for new team member", () => {
    cy.login();
    cy.visit("/");
    cy.findByRole("link", { name: /team a/i }).click();
    cy.findAllByRole("button", { name: /add team member/i }).should(
      "have.length",
      4
    );
    cy.findByRole("button", { name: /find pokemon/i }).click();
    cy.findByRole("button", { name: /jirachi/i }).click();
    cy.findByRole("button", { name: /add to team/i }).click();
    cy.findByRole("button", { name: /close/i }).click();
    cy.findByRole("status", { name: /team saved/i }).should("exist");
    cy.findByRole("button", { name: /close/i }).click();
    cy.findAllByRole("button", { name: /add team member/i }).should(
      "have.length",
      3
    );

    cy.findAllByRole("button", { name: /add team member/i })
      .eq(0)
      .click();
    cy.findByRole("button", { name: /charmander/i }).click();
    cy.findByRole("button", { name: /add to team/i }).click();
    cy.findByRole("button", { name: /close/i }).click();
    cy.findByRole("status", { name: /team saved/i }).should("exist");
    cy.findByRole("button", { name: /close/i }).click();
    cy.findAllByRole("button", { name: /add team member/i }).should(
      "have.length",
      2
    );
  });
});
