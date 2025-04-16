// Suaviza o scroll ao clicar no botão
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#projetos").scrollIntoView({ behavior: "smooth" });
});
