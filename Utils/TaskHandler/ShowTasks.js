import AddTask from "./AddTask.js";

export default function ShowTasks() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  const valorTarefas =
    JSON.parse(localStorage.getItem("armazenarTarefas")) || [];

  valorTarefas.forEach((tarefa) => {
    AddTask(tarefa);
  });
}
