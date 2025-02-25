// @ts-check
import { test, expect } from '@playwright/test';

test('Blog in navbar is valid link', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const blog_link = page.locator('div.page > div.main > div.main__header > *[href="/blog"]');

  const isValidLink = await blog_link.evaluate(e => e.tagName.toLowerCase() === 'a');

  await expect(isValidLink).toBe(true);
});

test('Car insurance block. Calculate the price is valid link', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const calculate_the_price_link = page.locator('div.page > div.insurances > div > div:nth-child(1) > a');
  
  await expect(calculate_the_price_link).toHaveAttribute('href', '/car');

});

test('Terms link in footer is valid link', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const terms_link = page.locator('footer > div.footer__bottom > div.links > a:nth-child(1)');
  
  await expect(terms_link).toHaveAttribute('href', '/terms');
  
});


test('Travel insurance in footer is valid link', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const travel_insurance_link = page.locator('footer > div.footer__content > div:nth-child(1) > a:nth-child(4)');
  
  await expect(travel_insurance_link).toHaveAttribute('href', '/travel');
  
});

test('Vakuu icon in footer is valid link', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const vakuu_icon_link = page.locator('footer > div.footer__bottom > a');
  
  await expect(vakuu_icon_link).toHaveAttribute('href', '/vacuu');
  
});

test('Vakuu icon in header is valid link', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const vakuu_icon_link = page.locator('div.page > div.main > div.main__header > a.main__header__logo');
  
  await expect(vakuu_icon_link).toHaveAttribute('href', '/vacuu');
  
});

test('Phone number in header is valid link', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const phone_number_link = page.locator('div.header > div.header__phone > a');
  
  await expect(phone_number_link).toHaveAttribute('href', 'tel:+358 9 000 000');
  
});

test('Subscribe form denies empty input', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu');
  
  const subscribe_button = page.locator('footer > div.footer__content > div:nth-child(4) > div > div > div');
  await subscribe_button.click()
  
  const swal = page.locator(".swal2-container #swal2-title");

  await expect(swal).toContainText("Error");
  
});

test('Menu in navbar opens on click', async ({ browser }) => {
  const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)...'
  });

  const page = await context.newPage();
  await page.goto('https://polis812.github.io/vacuu');

  const menu_button = page.locator('div.header > div.header__mobile > div');

  await menu_button.click();

  const locator = page.locator('div.page > div.main > div.main__header');

  await expect(locator).not.toHaveCSS('display', 'none');

  await context.close();
});