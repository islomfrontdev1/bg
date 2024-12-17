// let box = document.getElementById("box");

// let h1 = document.createElement("h1");
// h1.innerText = "Islom";


// let data = [
//   {
//     ismi: "Islom",
//     yoshi: 20,
//     manzili: "Toshkent",
//   },
//   {
//     ismi: "Aziz",
//     yoshi: 30,
//     manzili: "Andijon",
//   },
//   {
//     ismi: "Olim",
//     yoshi: 40,
//     manzili: "Buxoro",
//   },        
//   { 
//     ismi: "Umid",
//     yoshi: 50,
//     manzili: "Samarqand",
//   },
// ];


// data.forEach((item) => {
//   let h1 = document.createElement("h1");
//   h1.innerText = item.ismi;

//   let h2 = document.createElement("h2");
//   h2.innerText = item.yoshi;

//   let h3 = document.createElement("h3");
//   h3.innerText = item.manzili;
//   box.append(h1);
//   box.append(h2);
//   box.append(h3);

//   let hr = document.createElement("hr");
//   box.append(hr);
// });

// let tag = prompt("Tagni kiriting");
// let soni = +prompt("Sonini kiriting");

// for (let i = 0; i < soni; i++) {
//   let h1 = document.createElement(tag);
//   h1.classList.add("red");


//   h1.innerText = "Islom";

//   h1.style.fontSize = "50px";
//   h1.style.color = "red";

//   box.append(h1);
// }

let body = document.querySelector("body");
let p = document.querySelector("p");

let bodyBg = prompt("Body backgroundni kiriting");
let pColor = prompt("P backgroundni kiriting");

body.style.backgroundColor = bodyBg;
p.style.color = pColor;