import { test, beforeEach, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ListsPage } from '../pages/listsPage';
import { CreateListPage } from '../pages/createListPage';
import { createListFromAPI } from '../helpers/prerequisites';
import { EditListPage } from '../pages/editListPage';
import { AddItemPage } from '../pages/addItemPage';
import {dotenv} from 'dotenv/config';
import { DeleteListPage } from '../pages/deleteListPage';

let listName;
let listId;

test.describe('Create a list', async () => {
    test('Create a list by providing only name', async ({ page }) => {
    const listName = `list${Date.now()}`;
    await page.goto('https://www.themoviedb.org');
    const homePage = new HomePage(page);
    await homePage.clickProfileIconLink();
    await homePage.clickProfileNavigationLink('Lists');
    const listsPage = new ListsPage(page);
    await listsPage.clickCreateListButton();
    await page.waitForURL('https://www.themoviedb.org/list/new');
    const createListPage = new CreateListPage(page);
    await createListPage.nameInputfield.fill(listName);
    await createListPage.continueButton.click();
    await expect(page.getByRole('link', { name: listName })).toBeVisible();
});
});

test.describe('Update list', async () => {
beforeEach(async ({ page }) => {
    // Use API to create a list as data setup for the tests
    listName = `list${Date.now()}`;
    const listCreatedResponse = await createListFromAPI(listName);
    console.log(listCreatedResponse);
    listId = listCreatedResponse.list_id;
}
);
test('Edit a list', async ({ page }) => {
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit`);
    const editListPage = new EditListPage(page);
    await editListPage.nameInputfield.fill(`${listName}_Updated`);
    await editListPage.descriptionInputfield.fill('Updated description');
    await editListPage.clickSaveButton();
    await expect( page.getByText('Your changes have been')).toBeVisible();
    
}
);

test('Add an item to list', async ({ page }) => {
    const itemToAdd = 'The Boat That Rocked';
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit`);
    const editListPage = new EditListPage(page);
    await editListPage.clickAddOrEditItemLink();
    const addItemPage = new AddItemPage(page);
    await addItemPage.addAnItemToList(itemToAdd);
    await addItemPage.clickSaveButton();
    await expect(page.getByText('Comment updated!')).toBeVisible();
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}`);
    await expect(page.getByText(itemToAdd)).toBeVisible();    
}
);

test('Delete a list', async ({ page }) => {
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit`);
    const editListPage = new EditListPage(page);
    await editListPage.clickDeleteListLink();
    const deleteListPage = new DeleteListPage(page);
    await deleteListPage.clickDeleteButton();
    await deleteListPage.clickConfirmDeletionButton();
    await page.waitForURL(`${process.env.UI_BASEURL}/u/${process.env.USERNAME}/lists`, { timeout: 3000 });
}
);


test('Remove item from list', async ({ page }) => {
    const itemToAdd = 'The Boat That Rocked';
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit`);
    const editListPage = new EditListPage(page);
    await editListPage.clickAddOrEditItemLink();
    const addItemPage = new AddItemPage(page);
    await addItemPage.addAnItemToList(itemToAdd);
    await addItemPage.clickSaveButton();
    await expect(page.getByText('Comment updated!')).toBeVisible();
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}`);
    await expect(page.getByText(itemToAdd)).toBeVisible();   
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit?active_nav_item=step_2`);
    await addItemPage.removeItemFromList(itemToAdd);
    await expect(page.getByText('Item removed.')).toBeVisible();
}
);
});

