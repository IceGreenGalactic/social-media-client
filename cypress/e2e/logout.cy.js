describe("logout", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("allows a valid user to log out", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
    cy.logout();
    cy.isLoggedOut();
  });
});
