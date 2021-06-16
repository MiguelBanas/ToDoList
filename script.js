let todasAtividade = [];
let contador = 0;

document.getElementById("btn-gravar").onclick = () => {
  let atividade = document.getElementById("atividade").value;
  if (verificacao(atividade)) {
    gravacao(atividade);
  } else {
    alert("Adicione uma tarefa válida!");
  }
  document.getElementById("atividade").value = "";
};

function verificacao(element) {
  if (element != "" && element != 0) {
    return true;
  } else {
    return false;
  }
}

function gravacao(element) {
  let res = document.getElementById("res");
  let lista = document.getElementById("lista-ul");
  let elCheck = document.createElement("input");
  elCheck.setAttribute("type", "checkbox");
  elCheck.setAttribute(`id`, `${contador}`);
  elCheck.setAttribute("class", "form-check-input mt-0");
  let elLista = document.createElement("li");
  elLista.setAttribute(`id`, `l${contador}`);
  contagem();
  let elAtividade = document.createTextNode(element);
  elLista.appendChild(elCheck);
  elLista.appendChild(elAtividade);
  todasAtividade.push(elLista);

  for (let i = 0; i < todasAtividade.length; i++) {
    lista.appendChild(todasAtividade[i]);
  }
}

//Função que faz a somatória na variável contador
function contagem() {
  contador++;
}

document.getElementById("res").onchange = () => {
  for (let i = 0; i < contador; i++) {
    let check = document.getElementById(`${i}`);
    if (check.checked == true) {
      let lista = document.getElementById(`l${i}`);
      lista.style.textDecoration = "line-through";
    } else {
      let lista = document.getElementById(`l${i}`);
      lista.style.textDecoration = "none";
    }
  }
};
