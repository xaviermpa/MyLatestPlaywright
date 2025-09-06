import test, { chromium, expect } from "@playwright/test";

let TCno: number = 0;

test.describe("My UI test collection",async() => {

test(`Test_${++TCno}lauch playwright page`,async()=>{
//to launch webpage
const browser = await chromium.launch({
    headless: false,
    slowMo : 1000,
})    

const uiContext = await browser.newContext();
const page = await uiContext.newPage();
console.log("step 1: Open browser and laucn playwright site");
    await page.goto("https://playwright.dev/");
console.log("step 2: Open browser and laucn playwright site");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
console.log("step 3: lets get started");
    await page.getByText("Get started").click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
console.log("Page opened successfully"+await page.screenshot({path: 'screenshots/test1.png'}));

page.close();
uiContext.close();
//test case ends
});

//test 
const scriptings =[{scripting: "NodeJS"},{scripting: "Java"},{scripting: "Python"},{scripting: "C#"}];
scriptings.forEach(({scripting})=>{
test(`Test_${++TCno}Check all scripting options`,async()=>{
//to verify each scripting options
const browser = await chromium.launch({
    headless: false,
    slowMo : 2000,
})    

const uiContext = await browser.newContext();
const page = await uiContext.newPage();

console.log("step 1: Open browser and laucn playwright site");
    await page.goto("https://playwright.dev/");
console.log("step 2: Open browser and laucn playwright site");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
console.log("step 3: lets get started");
    await page.getByText("Get started").click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
console.log(`step 4: click ${scripting} scripting option`);
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: scripting }).click();
console.log("Scripting Selected successfully"+await page.screenshot({path: 'screenshots/test_'+TCno.toString()+'_'+scripting+'.png'}));

page.close();
uiContext.close();

//test case ends
});
//test loop ends
});

//test descript ends
});