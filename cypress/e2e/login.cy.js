describe("login", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("shows login form when login button is pressed", () => {
    cy.showLoginForm();
  });

  it("allows a valid, registered user to login, and stores token", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
  });
});

describe("invalid credentials", () => {
  beforeEach(() => {
    cy.visitHome();
  });
  it("displays an error message with invalid credentials", () => {
    cy.showLoginForm();
    cy.loginWithInvalidUser();
    cy.assertAlertVisible();
  });
});
