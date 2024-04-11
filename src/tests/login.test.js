import { login } from "../js/api/auth/login.js";
import * as storage from "../js/storage/index.js";

// Mock functions from the storage module
jest.mock("../js/storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

// Mock the fetch function
global.fetch = jest.fn();

describe("Login Functionality", () => {
  beforeEach(() => {
    fetch.mockClear();
    storage.save.mockClear();
  });

  // Test successful login with valid credentials
  it("should save token and profile on successful login", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({ accessToken: "mockToken", name: "mockName" }),
    });

    await login("valid@email.com", "validpassword");

    expect(storage.save).toHaveBeenCalledWith("token", "mockToken");
    expect(storage.save).toHaveBeenCalledWith("profile", { name: "mockName" });
  });

  // Test unsuccessful login with invalid credentials
  it("should not save token on unsuccessful login", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    await expect(login("invalid@email.com", "invalidpassword")).rejects.toThrow(
      "Unauthorized",
    );

    expect(storage.save).not.toHaveBeenCalled();
  });

  // Test handling of server errors
  it("should handle server errors gracefully", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Internal Server Error",
    });

    await expect(login("valid@email.com", "validpassword")).rejects.toThrow(
      "Internal Server Error",
    );

    // Verify that storage.save was not called
    expect(storage.save).not.toHaveBeenCalled();
  });
});
