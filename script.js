// let fs = require("fs");
// let req = require("request");

// function fileReader(path) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(path, function (err, data) {
//       resolve(data.toString());
//     });
//   });
// }

// function fileWriter(path, data) {
//   return new Promise(function (resolve, reject) {
//     fs.writeFile(path, data, function (err) {
//       //   resolve("done");
//       reject("err");
//     });
//   });
// }

// function nReq(url) {
//   return new Promise(function (resolve, reject) {
//     req(url, function (err, res, body) {
//       resolve(body);
//     });
//   });
// }

// let p1 = nReq("http://callbackhell.com/");

// p1.then(function (body) {
//   let p2 = fileWriter("a.html", body);
//   return p2;
// })
//   .then(function () {
//     let p3 = fileReader("a.html");
//     return p3;
//   })
//   .then(function (data) {
//     setTimeout(function () {
//       console.log(data);
//     }, 1000);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });


//Convert the following .catch to.then handler

let promise =new Promise