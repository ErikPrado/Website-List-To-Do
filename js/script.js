let contador = 0;



function continuar(){
    var inputName = window.document.getElementById('inputName');
    var nameUsuario = (inputName.value);
    var campoNameUsuario = window.document.getElementById('campoNameUsuario');
    var windowContainer = window.document.getElementById('windowContainer');


if ((nameUsuario !== "") && (nameUsuario !== null) && (nameUsuario !== undefined)){
    campoNameUsuario.innerHTML = `${nameUsuario}`
    windowContainer.style.visibility='hidden'
    }
};


function adicionar(){
    var inputTaskTxt = window.document.getElementById('inputTaskTxt');
    var taskTxt = (inputTaskTxt.value);
    var listTask = window.document.getElementById('areaTask');
    var pTime = document.getElementById('timeTask');

    ++contador;

    if ((taskTxt !== "") && (taskTxt !== null) && (taskTxt !== undefined)){
    var novaTask = `
    <div class="task-container-content" id=${contador}>

                <div class="task-line-decoration"></div>
    <div class="task-container-size" onclick="ativar(${contador})" ondblclick="desmarcar(${contador})">
                <div class="f-column">
                    <i id="icone_${contador}" class="bi bi-circle-fill"></i>
                </div>
                <div class="s-column" ">
                    <p class="task"> ${taskTxt} </p>
                    <p class="time-task" id="timeTask"> EM BREVE: Horário atual </p>
                </div>
                <div class="t-column" >
                <button onclick="del(${contador})" >
                    <i class="bi bi-trash-fill" ></i>
                        <div class="info-trash">
                        <p>Deletar</p>
                    </div>
                </button>
                </div>
            </div>
        </div>
    `

    listTask.innerHTML +=  novaTask    
    
    inputTaskTxt.value = "";
    inputTaskTxt.focus();
    }
}



document.addEventListener("keyup", function(event){
var btnAdd = window.document.getElementById('btnAdd');
var btnContinue = window.document.getElementById('btnContinue')
    if(event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
    btnContinue.click();
    }
}
)

function del(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function ativar(id){
    var item = document.getElementById(id);
    item.classList.add('check');

    var icone = document.getElementById('icone_'+id)
    icone.classList.remove('bi-circle-fill');
    icone.classList.add('bi-check-circle-fill');

    item.parentNode.appendChild(item);
}

function desmarcar(id){
    var item = document.getElementById(id);
    item.classList.remove('check');

    var icone = document.getElementById('icone_'+id)
    icone.classList.add('bi-circle-fill');
    icone.classList.remove('bi-check-circle-fill');
}


function changeTheme(){
    var buttonTheme = window.document.getElementById('buttonTheme');
    var colorWindow = window.document.getElementById('colorWindow');
    var infoThemes = window.document.getElementById('infoThemes');

    colorWindow.style.visibility='visible';
    buttonTheme.style.background='#ffffff49';
    infoThemes.style.visibility='hidden';
}

    var mainTheme = window.document.getElementById('main');

function blue(){
    mainTheme.style.background='blue';
}
function green(){
    mainTheme.style.background='green';
}
function red(){
    mainTheme.style.background='red';
}
function aqua(){
    mainTheme.style.background='aqua';
}
function orange(){
    mainTheme.style.background='orange';
}
function pink(){
    mainTheme.style.background='pink';
}






/*
var pData = document.getElementById("pData");

let data = new Date(); 

let ano = data.getFullYear();
console.log(ano); //ano

let mes = data.getMonth();
const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
//                 0            1          2        3       4       5         6         7           8          9          10        11
let mesEscrito = meses[data.getMonth()];

let semana = data.getDay();
const diaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
let diaSemanaEscrito = diaSemana[data.getDay()];

let diaMes = data.getDate();

const dataCompleta = DiaSemanaEscrito + "," + diaMes + "de" + mesEscrito + "de" + ano

pData.innerHTML = dataCompleta
*/