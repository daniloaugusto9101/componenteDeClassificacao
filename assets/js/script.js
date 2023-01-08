const buttons = document.querySelectorAll(".buttons__item")
const submit = document.querySelector(".buttons__submit")
let star


function removeList() {
  buttons.forEach(ele => ele.classList.remove("active"))
}

function activeBtn(e) {
  removeList()
  star = e.target.innerHTML
  e.target.classList.add("active")
  // ativado()
}

function addClick(ele) {
  ele.addEventListener('click', activeBtn)
}


function sendData(valor) {
  // Código para recuperar os dados
  let data = valor;

  // Armazenar os dados no sessionStorage
  sessionStorage.setItem("data", data);

  // Redirecionar para a outra página
  window.location.href = "thanks.html";
}

buttons.forEach(addClick)
submit.addEventListener('click', function (e) {
  e.preventDefault()
  sendData(star)
})
