import { expect, test } from "@playwright/test";
import { LoginPage } from "../../../../../src/pageObject/demoQa/bookStore/pages/loginPage";
import { RegisterPage } from "../../../../../src/pageObject/demoQa/bookStore/pages/registerPage";
import { UsersUtils } from "../../../../../src/utils/users";

test("can  not create a new user if captcha is not solved ", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goTo();
  await registerPage.makeRegistrationAttempt(UsersUtils.generateRandomUserProfile(), false);
  await expect(registerPage.outputLabel).toHaveText("Please verify reCaptcha to register!");
});

test("can   create a new user  ", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goTo();
  await registerPage.makeRegistrationAttempt(UsersUtils.generateRandomUserProfile(), true);
});
