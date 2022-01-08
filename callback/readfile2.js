const { readFile } = require("fs/promises");
let data = "test.txt";
let promise = function () {
  return new Promise((resolve, reject) => {
    readFile("test.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(reject);
        return;
      }
      console.log(resolve);
    });
  });
};

readFile(data)
  .then((result) => {
    console.log(`${result}`);
  })
  .catch((err) => {
    console.log(`${reject}`);
  });
