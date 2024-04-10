describe("logout", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("allows a valid user to log out, and removes token", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
    cy.logout();
    cy.isLoggedOut();
  });
});
