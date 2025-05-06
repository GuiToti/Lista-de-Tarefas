export default function RemoveTask(botaoApagar, novaTarefa, textoDaTarefa) {
  botaoApagar.onclick = () => {
    const listaTarefas = document.getElementById("lista-tarefas");

    listaTarefas.removeChild(novaTarefa);

    let armazenarTarefas =
      JSON.parse(localStorage.getItem("armazenarTarefas")) || [];

    armazenarTarefas = armazenarTarefas.filter(
      (tarefa) => tarefa !== textoDaTarefa
    );

    localStorage.setItem("armazenarTarefas", JSON.stringify(armazenarTarefas));
  };
}
