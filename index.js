import AddTask from "./Utils/TaskHandler/AddTask.js";
import ShowTasks from "./Utils/TaskHandler/ShowTasks.js";
import SaveTask from "./Utils/TaskHandler/SaveTask.js";

const botao = document.getElementById("button");
const input = document.getElementById("input");

botao.onclick = () => {
  if (input.value !== "") {
    AddTask(input.value);
    SaveTask();
  } else {
    alert("Nao é possivel criar uma tarefa sem nome.");
  }
};

window.onload = ShowTasks;
