import { BasePage } from "../../../basePage";
import { Page } from "@playwright/test";
import { FullUserProfile } from "../../../../models/user/FullUserProfile";

import { chromium } from "playwright-extra";
// Load the stealth plugin and use defaults (all tricks to hide playwright usage)
import pluginStealth from "puppeteer-extra-plugin-stealth";

// Use stealth

export class RegisterPage extends BasePage {
  usernameInput = this.page.locator("id=userName");
  passwordInput = this.page.getByPlaceholder("Password");
  firstnameInput = this.page.locator("id=firstname");
  lastNameInput = this.page.locator("id=lastname");
  registerBtn = this.page.getByRole("button", { name: "Register" });
  captchaCheckBox = this.page.locator("id=recaptcha-anchor");
  outputLabel = this.page.locator("id=output");
  constructor(page: Page) {
    super(page);
  }

  async goTo() {
    await this.page.goto("https://demoqa.com/register");
  }

  async makeRegistrationAttempt(user: FullUserProfile, solveCaptcha: boolean) {
    const { username, password, firstName, lastName } = user;
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.firstnameInput.type(firstName);
    await this.lastNameInput.type(lastName);
    if (solveCaptcha) {
      chromium.use(pluginStealth());
      //  await this.captchaCheckBox.click();
    }
    await this.registerBtn.click();
  }
}
