import { test, expect } from '../fixtures/pageFixtures';
import { addAnItemToList, createListFromAPI } from '../helpers/prerequisites';

let listName: string;
let listId: string;

test.describe('Create a list', async () => {
    test('Create a list by providing only name', async ({ page, homePage, createListPage, listsPage }) => {
    const listName = `list${Date.now()}`;
    await page.goto('https://www.themoviedb.org');
    await homePage.clickProfileIconLink();
    await homePage.clickProfileNavigationLink('Lists');
    await listsPage.clickCreateListButton();
    await page.waitForURL('https://www.themoviedb.org/list/new');
    await createListPage.nameInputfield.fill(listName);
    await createListPage.continueButton.click();
    await expect(page.getByRole('link', { name: listName })).toBeVisible();
});
});

test.describe('Update list', async () => {

    test.beforeEach('Create a list from API before proceeding to test',async () => {
    // Use API to create a list as data setup for the tests
    listName = `list${Date.now()}`;
    const listCreatedResponse = await createListFromAPI(listName);
    listId = listCreatedResponse.list_id;
}
);
test('Edit a list', async ({ page, editListPage }) => {
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit`);
    await editListPage.nameInputfield.fill(`${listName}_Updated`);
    await editListPage.descriptionInputfield.fill('Updated description');
    await editListPage.clickSaveButton();
    await expect( page.getByText('Your changes have been')).toBeVisible();
    
}
);

test('Add an item to list', async ({ page, editListPage, addItemPage }) => {
    const itemToAdd = 'The Boat That Rocked';
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit`);
    await editListPage.clickAddOrEditItemLink();
    await addItemPage.addAnItemToList(itemToAdd);
    await addItemPage.clickSaveButton();
    await expect(page.getByText('Comment updated!')).toBeVisible();
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}`);
    await expect(page.getByText(itemToAdd)).toBeVisible();    
}
);

test('Delete a list', async ({ page, editListPage, deleteListPage }) => {
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit`);
    await editListPage.clickDeleteListLink();
    await deleteListPage.clickDeleteButton();
    await deleteListPage.clickConfirmDeletionButton();
    await page.waitForURL(`${process.env.UI_BASEURL}/u/${process.env.USERNAME}/lists`, { timeout: 3000 });
}
);


test('Remove item from list', async ({ page, editListPage, addItemPage }) => {
    const item = 'The Boat That Rocked';
    const itemMediaId = '18947';
    const mediaType = 'movie';
    await addAnItemToList(listId, itemMediaId, mediaType);   
    await page.goto(`${process.env.UI_BASEURL}/list/${listId}-${listName}/edit?active_nav_item=step_2`);
    await addItemPage.removeItemFromList(item);
    await expect(page.getByText('Item removed.')).toBeVisible();
}
);
});

