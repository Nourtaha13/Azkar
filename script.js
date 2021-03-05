"use strict"
let dataa = document.getElementById("data")
//let url = "https://github.com/osamayy/azkar-db/blob/master/azkar.json"
fetch("./main.json")
    .then(response => response.json())
    .then(data => {
    for (let i = 0; i < data.length; i++) {
    var num = data[i]
    dataa.innerHTML += `
    <h2 class="cat">${num.category}</h2>
    <p class="desc">${num.description}</p>
    <p class="zekr">${num.zekr}</p>
    <p class="ref">${num.reference}</p>
    
    
    `        
    }
    });