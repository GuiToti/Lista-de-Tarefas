export default function UpdTaskStatus(clique, textoSeraRiscado) {
  clique.onchange = () => {
    if (clique.checked) {
      textoSeraRiscado.style.textDecoration = "line-through";
      textoSeraRiscado.style.opacity = "0.5";
    } else {
      textoSeraRiscado.style.textDecoration = "none";
      textoSeraRiscado.style.opacity = "1";
    }
  };
}
