// const { defineConfig } = require("cypress");
// const fs = require('fs');
// const path = require('path');

// module.exports = defineConfig({
//   video:true,
//   retries:1,
//   chromeWebSecurity:false,
//     e2e: {
//       setupNodeEvents(on, config) {

//         on('task', {
//           readFile({ filename }) {
//             const filePath = path('/Users/suman/Documents/Assignement/Easygenerator/cypress/fixtures');
//             return new Promise((resolve, reject) => {
//               fs.readFile(filePath, 'utf8', (err, data) => {
//                 if (err) {
//                   return reject(err);
//                 }
//                 resolve(data);
//               });
//             });
//           }
//         });
//     },
//   },
// });

const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  video: true,
  retries: 1,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readFile({ filename }) {
          const filePath = path.join(__dirname, filename);
          return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                return reject(err);
              }
              resolve(data);
            });
          });
        },
      });
    },
  },
});
