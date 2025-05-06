import RemoveTask from "./RemoveTask.js";
import UpdTaskStatus from "./UpdTaskStatus.js";

const listaTarefas = document.getElementById("lista-tarefas");

export default function AddTask(text) {
  let novaTarefa = document.createElement("li");
  let checkbox = document.createElement("div");
  let botaoApagar = document.createElement("button");
  let textoTarefa = document.createElement("span");
  let trash = document.createElement("img");
  let isChecked = false;

  textoTarefa.textContent = text;

  trash.src = "Assets/cross-small.svg";
  trash.width = 20;

  checkbox.classList.add("checkbox");
  trash.classList.add("trash");
  botaoApagar.classList.add("botao-apagar");
  novaTarefa.classList.add("tarefa-item");
  textoTarefa.classList.add("texto-tarefa");

  novaTarefa.appendChild(checkbox);
  novaTarefa.appendChild(textoTarefa);
  novaTarefa.appendChild(botaoApagar);

  botaoApagar.appendChild(trash);

  listaTarefas.appendChild(novaTarefa);

  UpdTaskStatus(checkbox, textoTarefa);
  RemoveTask(botaoApagar, novaTarefa, textoTarefa.textContent);

  checkbox.onclick = () => {
    if (isChecked == false) {
      checkbox.classList.add("checkbox-checked");
      textoTarefa.classList.add("riscado");
      isChecked = true;
    } else {
      isChecked = false;
      checkbox.classList.remove("checkbox-checked");
      textoTarefa.classList.remove("riscado");
    }
  };
}
