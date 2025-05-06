import ShowTasks from "./ShowTasks.js";

export default function SaveTask() {
  const input = document.getElementById("input");
  const tarefa = input.value;

  if (tarefa) {
    let armazenarTarefas =
      JSON.parse(localStorage.getItem("armazenarTarefas")) || [];
    armazenarTarefas.push(tarefa);

    localStorage.setItem("armazenarTarefas", JSON.stringify(armazenarTarefas));

    input.value = "";

    ShowTasks();
  }
}
