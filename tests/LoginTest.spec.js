// Імпортуємо необхідні функції з Playwright
const { test, expect } = require('@playwright/test');

// Створюємо тест
test('Login page elements', async ({ page }) => {

    // Відкриваємо сайт SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // ===== Перевірка Username за ID =====

    // Шукаємо поле Username за ID
    const usernameField = page.locator('#user-name');

    // Перевіряємо, що поле видно на сторінці
    await expect(usernameField).toBeVisible();

    // Виводимо повідомлення в консоль
    console.log("✅ ID: Username знайдено");

     // ===== Перевірка Password за CSS Selector =====

    // Шукаємо поле Password за CSS Selector
    const passwordField = page.locator('#password');

    // Перевіряємо, що поле видно
    await expect(passwordField).toBeVisible();

    // Виводимо повідомлення
    console.log("✅ CSS: Password знайдено");

    // ===== Перевірка кнопки Login за XPath =====
 
//Шукаємо поле Login за XPath
 const loginButton = page.locator('//input[@id="login-button"]');

 // Перевіряємо, що кнопку видно 
await expect(loginButton).toBeVisible();

 // Виводимо повідомлення
 console.log("✅ XPath: Login Button знайдено");

 // ===== Перевірка Logo за Class =====
 
//Шукаємо Logo за Class
 const logo = page.locator('.login_logo');

 // Перевіряємо, що логотип видно 
await expect(logo).toBeVisible();


 // Виводимо повідомлення
console.log("✅ Class: Logo знайдено");

});

 