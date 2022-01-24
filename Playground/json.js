import fs from "fs";
// const book = {
//   title: "tttttttttttttttt",
//   author: "aaaaaaaaaaaaaa",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('json.json',bookJSON)
// const file = fs.readFileSync('json.json')
// console.log(JSON.parse(file))

const data = JSON.parse(fs.readFileSync("data.json"));
data.name = "Adam";
data.age = 23;
fs.writeFileSync("data.json", JSON.stringify(data));
