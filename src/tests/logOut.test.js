import { logout } from "../js/api/auth/logout.js";
import * as storage from "../js/storage/index.js";

// Mock the remove function from the storage module
jest.mock("../js/storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("Logout Functionality", () => {
  beforeEach(() => {
    storage.remove.mockClear();
  });

  // Test if token is removed from storage on logout
  it("should remove token from storage on logout", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
  });
});
