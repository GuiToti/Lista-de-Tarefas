const botao = document.getElementById("botao");
const input = document.getElementById("input");
const listaTarefas = document.getElementById("listaTarefas");

console.log(botao);

botao.onclick = () => {
  if (input.value !== "") {
    addTarefa(input.value);
  } else {
    alert("Nao é possivel criar uma tarefa sem nome.");
  }
};

function addTarefa(text) {
  let novaTarefa = document.createElement("li");
  let checkbox = document.createElement("input");

  novaTarefa.textContent = text;
  checkbox.type = "checkbox";

  novaTarefa.classList.add("tarefaItem");

  novaTarefa.appendChild(checkbox);
  listaTarefas.appendChild(novaTarefa);
}
