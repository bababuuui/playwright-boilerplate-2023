import { BasePage } from "../../../basePage";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
  usernameInput = this.page.locator("id=userName");
  passwordInput = this.page.getByPlaceholder("Password");
  loginBtn = this.page.getByRole("button", { name: "Login" });
  invalidLoginLabel = this.page.getByText("Invalid username or password!");
  constructor(page: Page) {
    super(page);
  }

  async goTo() {
    await this.page.goto("https://demoqa.com/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.loginBtn.click();
  }
}
