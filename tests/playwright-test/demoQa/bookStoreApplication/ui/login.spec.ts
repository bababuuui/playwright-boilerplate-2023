import { expect, test } from "@playwright/test";
import { LoginPage } from "../../../../../src/pageObject/demoQa/bookStore/pages/loginPage";

//todo create user before test/s

test("can login with correct username and password", async ({ page }) => {
  const username = "buba";
  const password = "qwer123^B";

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(username, password);

  await expect(page).toHaveURL("https://demoqa.com/profile");
});

test("can not login with incorrect username and password", async ({ page }) => {
  const username = "buba";
  const password = "qwer123^B2";

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(username, password);

  await expect(loginPage.invalidLoginLabel).toBeVisible();
});
