const { test, expect } = require('@playwright/test');

test.describe('API Automation Tests', () => {

  // 1. GET-запит (Перевірка статусу 200)
  test('GET /pet/{petId} - Перевірка статусу 200', async ({ request }) => {
    const petId = 1;

    // Виконуємо GET-запит
    const response = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`);

    // Перевіряємо статус 200 OK
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log('GET Response Data:', responseBody);
  });

  // 2. POST-запит (Відправка JSON та перевірка відповіді)
  test('POST /posts - Відправка JSON об’єкта та перевірка відповіді', async ({ request }) => {
    // Створюємо об'єкт із потрібними полями
    const postData = {
      title: 'QA Automation test post',
      body: 'Testing API endpoints with Playwright',
      userId: 1
    };

    // Відправляємо POST-запит з JSON
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: postData
    });

    // Перевіряємо успішне створення (201 Created)
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log('POST Response Data:', responseBody);

    // Перевіряємо, що повернуті дані відповідають відправленим
    expect(responseBody.title).toBe(postData.title);
    expect(responseBody.body).toBe(postData.body);
    expect(responseBody.userId).toBe(postData.userId);
  });

});