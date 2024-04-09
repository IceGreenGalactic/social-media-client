describe("login", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    cy.showLoginForm();
  });

  it("allows a valid, registered user to login", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
  });
});
