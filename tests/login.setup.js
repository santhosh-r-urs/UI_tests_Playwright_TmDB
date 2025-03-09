import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import path from 'path';
import dotenv from 'dotenv/config';

const authFile = path.join(
  process.cwd(),
  './.playwright/.auth/user1.json'
);

setup('authenticate', async ({ page }) => {
 console.log(process.env.USERNAME);
 console.log(process.env.PASSWORD);
  const loginPage = new LoginPage(page);
  await loginPage.goToTmdbLoginPage()
  await loginPage.login(process.env.USERNAME, process.env.PASSWORD);

  await page.waitForURL(`https://www.themoviedb.org/u/${process.env.USERNAME}`);
  console.log(`Storing auth state in ${authFile}`);
  await page.context().storageState({ path: authFile });
});