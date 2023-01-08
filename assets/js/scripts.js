// You selected 4 out of 5
let data = sessionStorage.getItem("data");
console.log(data);
let start = document.querySelector(".card-thanks__star")
start.innerHTML = `You selected ${data} out of 5`