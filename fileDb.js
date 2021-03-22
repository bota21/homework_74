const fs = require("fs");
const date = new Date();

const fileName = "./messages/" + date + ".txt";

let data = [];

module.exports = {
  init() {
    try {
      const fileContent = fs.readFileSync(fileName);
      data = JSON.parse(fileContent.toString());
    } catch (e) {
      data = [];
    }
  },
  getItems() {
    const newItems = fs.readdir("./messages/",(err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
      return newItems;
    });
    return data;
  },
  addItem(item) {
    data.push(item);
    this.save();
  },
  save() {
    fs.writeFileSync(fileName, JSON.stringify(data));
  },
};
