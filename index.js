let cadastrar = document.getElementById("cadastrar");
let table = document.getElementById("table");
let div = document.getElementById("div");
let pesquisar = document.getElementById("pesquisar");
let todas = [];
let passou = [];
let reprovou = [];

function cadastrarF() {
  let nome = document.getElementById("inpNome").value;
  let nota1 = parseInt(document.getElementById("inpNota1").value);
  let nota2 = parseInt(document.getElementById("inpNota2").value);
  let media = (nota1 + nota2) / 2;
  console.log(nota1);
  console.log(nota2);
  console.log(media);

  let res = media <= 5 ? "Reprovado" : "Aprovado";

  let obj = {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    media: media,
    situacao: res,
  };
  todas.push(obj);

  if (media <= 5) {
    reprovou.push(obj);
  }
  if (media > 5) {
    passou.push(obj);
  }

  console.log(todas);
  console.log(reprovou);
  console.log(passou);

  imprimirF();
  totalF();
}

function imprimirF() {
  table.innerHTML = "";
  for (let i = 0; i < todas.length; i++) {
    table.innerHTML += `
        <tr>
            <td>${todas[i].nome}</td>
            <td>${todas[i].nota1}</td>
            <td>${todas[i].nota2}</td>
            <td>${todas[i].media}</td>
            <td>${todas[i].situacao}</td>
        </tr>
        `;
  }
}

function filtroF() {
  let filtro = document.getElementById("select").value;
  table.innerHTML = "";
  for (let i = 0; i < todas.length; i++) {
    if (filtro == "Aprovado") {
      table.innerHTML += `
        <tr>
            <td>${passou[i].nome}</td>
            <td>${passou[i].nota1}</td>
            <td>${passou[i].nota2}</td>
            <td>${passou[i].media}</td>
            <td>${passou[i].situacao}</td>
        </tr>
        `;
    } else if (filtro == "Reprovado") {
      table.innerHTML += `
        <tr>
            <td>${reprovou[i].nome}</td>
            <td>${reprovou[i].nota1}</td>
            <td>${reprovou[i].nota2}</td>
            <td>${reprovou[i].media}</td>
            <td>${reprovou[i].situacao}</td>
        </tr>
        `;
    } else {
      table.innerHTML += `
        <tr>
            <td>${todas[i].nome}</td>
            <td>${todas[i].nota1}</td>
            <td>${todas[i].nota2}</td>
            <td>${todas[i].media}</td>
            <td>${todas[i].situacao}</td>
        </tr>
        `;
    }
  }
}
function totalF() {
  for (let i = 0; i < todas.length; i++) {
    div.innerHTML = `
    <div class="row my-3">
            <div class="col-12 text-center border border-primary-subtle">
              <h4 class="text-primary-emphasis text-center">Total de Registros</h4>
              <p>${todas.length}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-center border border-success">
              <h6 class="text-success text-center">Total de Aprovados</h6>
              <p>${passou.length}</p>
            </div>
            <div class="col-6 text-center border border-danger">
              <h6 class="text-danger text-center">Total de Reprovados</h6>
              <p>${reprovou.length}</p>
            </div>
          </div>
    `;
  }
}

function keyF() {
  if (event.key == "Enter") {
    cadastrarF();
  }
}
cadastrar.addEventListener("click", cadastrarF);
document.getElementById("inpNota1").addEventListener("keydown", keyF);
pesquisar.addEventListener("click", filtroF);
