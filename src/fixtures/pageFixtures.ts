import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddItemPage } from "../pages/addItemPage";
import { DeleteListPage } from "../pages/deleteListPage";
import { CreateListPage } from "../pages/createListPage";
import { EditListPage } from "../pages/editListPage";
import { HomePage } from "../pages/homePage";
import { ListsPage } from "../pages/listsPage";

export const test = base.extend<{ page: Page, 
    loginPage: LoginPage,
    addItemPage: AddItemPage,
    createListPage: CreateListPage,
    deleteListPage: DeleteListPage,
    homePage: HomePage,
    listsPage: ListsPage,
    editListPage: EditListPage,
 }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  addItemPage: async ({ page }, use) => {
    const addItemPage = new AddItemPage(page);
    await use(addItemPage);
  },
    createListPage: async ({ page }, use) => {
        const createListPage = new CreateListPage(page);
        await use(createListPage);
    },
    deleteListPage: async ({ page }, use) => {
        const deleteListPage = new DeleteListPage(page);
        await use(deleteListPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    listsPage: async ({ page }, use) => {
        const listsPage = new ListsPage(page);
        await use(listsPage);
    },
    editListPage: async ({ page }, use) => {
        const editListPage = new EditListPage(page);
        await use(editListPage);
    }   
});

export { expect } from "@playwright/test";