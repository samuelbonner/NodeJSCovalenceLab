const path = require('path');
const fs = require('fs');

const chirpObjects = [
  {
    name: "Sam",
    message: "Hello world!",
  },
  {
    name: "Abby",
    message: "Please send me all your advice!",
  },
  {
    name: "Barney",
    message: "I'm not a dinosaur!",
  },
  {
    name: "Courtney",
    message: "It's pronounced Courtney, not Courtney!",
  },
  {
    name: "Davey",
    message: "I'm part of the Navy. For life!",
  },
];

fs.writeFile('chirps.json', JSON.stringify(chirpObjects), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});

fs.readFile('chirps.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })