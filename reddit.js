const rp = require("request-promise");
const fs = require("fs");
const request = require("request"); // Unused if the bottom request is commented out
const path = require("path");

const dataPath = path.join(__dirname, "/popular-articles.json");

var options = {
  uri: "https://reddit.com/r/popular.json",
};

rp("https://reddit.com/r/popular.json")
  .then((json) => {
    return JSON.parse(json);
  })
  .then(function (returnedData) {
    let articleArray = [];
    returnedData.data.children.forEach(function (article) {
      articleArray.push({
        articleName: article.data.title,
        url: article.data.url,
        author: article.data.author,
      });
    });
    fs.writeFile(dataPath, JSON.stringify(articleArray), function (err) {
      if (err) throw err;
      console.log(`Saved JSON data to ${dataPath}`);
    });
  })
  .catch((err) => {
    // Crawling failed...
  });

// The request below works but I want to try to use the request-promise function above instead.
// request("https://reddit.com/r/popular.json", (err, res, body) => {
//   if (err) console.log(err);

//   JSON.parse(body).data.children.forEach((item) => {
//     fs.appendFileSync(dataPath, [item.data.title, item.data.url, item.data.author] + "\n \n");
//   });
// });
