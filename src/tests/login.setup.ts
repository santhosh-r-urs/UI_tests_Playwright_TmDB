import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import path from 'path';

const userName = process.env.USERNAME || 'not provided in env file';
const password = process.env.PASSWORD || 'not provided in env file';


const authFile = path.join(
  process.cwd(),
  './.playwright/.auth/user1.json'
);

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToTmdbLoginPage()
  await loginPage.login(userName, password);

  await page.waitForURL(`https://www.themoviedb.org/u/${process.env.USERNAME}`);
  await page.context().storageState({ path: authFile });
});