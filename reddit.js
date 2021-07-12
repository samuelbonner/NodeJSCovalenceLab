const rp = require("request-promise");
const fs = require("fs");
const request = require("request");
const path = require("path");

let dataPath = path.join(__dirname, "/popular-articles.json");

var options = {
  uri: "https://reddit.com/r/popular.json",
};

// rp(options)
//   .then(($) => {
//     // Process html like you would with jQuery...
//   })
//   .catch((err) => {
//     // Crawling failed...
//   });

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  JSON.parse(body).data.children.forEach((item) => {
    fs.appendFileSync(dataPath, [item.data.title, item.data.url, item.data.author] + "\n \n");
  });
});
