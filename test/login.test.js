const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:8080/admin#/login');
});

test('на странице есть кнопка "Отправить"', () => {
    return client
        .isExisting('.loginButton')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(
                  `./screenshots/login_button_${browserName}_exists.png`,
                  browsers[browserName].value, 
                  "base64"
                );
            }
        });
});

test('на странице есть все необходимые поля"', () => {
  return client
      .isExisting("#login")
      .then(browsers => {
          for (const browserName in browsers) {
              expect(browsers[browserName]).toBe(true);
          }
      })
      .isExisting("#password")
      .then(browsers => {
          for (const browserName in browsers) {
              expect(browsers[browserName]).toBe(true);
          }
      })
      .screenshot()
      .then(browsers => {
          for (const browserName in browsers) {
              fs.writeFileSync(
                  `./screenshots/all_need_input_${browserName}_exists.png`,
                  browsers[browserName].value,
                  "base64"
              );
          }
      });
});

afterAll(() => {
    return client.end();
});
