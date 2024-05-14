let contador = 0;

// >>>>>>>>>>>>>>> Data atual no menu.
var data = new Date()


const mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];

const diaDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let diaSemana = diaDaSemana[data.getDay()];

var ano = data.getFullYear();


var diaDoMes = data.getDate();


let txtTime = window.document.getElementById('txtTime');
txtTime.innerHTML=`${diaSemana}, ${diaDoMes} de ${mesEscrito} de ${ano}.`
// >>>>>>>>>>>>>>> Data atual no menu.



function autoInput(){
    inputTaskTxt.focus();
}




// >>>>>>>>>>>>>>> Função de Continuar ao digitar o nome da primeira tela de boas vindas.
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
// >>>>>>>>>>>>>>> Função de Continuar ao digitar o nome da primeira tela de boas vindas.





// >>>>>>>>>>>>>>> Função de Adicionar uma tarefa.
function adicionar(){
    var inputTaskTxt = window.document.getElementById('inputTaskTxt');
    var taskTxt = (inputTaskTxt.value);
    var listTask = window.document.getElementById('areaTask');
    var nothingTask = window.document.getElementById('nothingTaskDiv');


    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();



    function addZero(x){ return x < 10 ? '0' + x : '' + x; };
    let hoursMinutes = addZero(hours) + ":" + addZero(minutes);
    
    


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
                    <p class="time-task" id="timeTask"> ${hoursMinutes} </p>
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
    nothingTask.style.display='none';
    listTask.innerHTML +=  novaTask    
    
    inputTaskTxt.value = "";
    inputTaskTxt.focus();

    
    
    }

    
    
}
// >>>>>>>>>>>>>>> Função de Adicionar uma tarefa.





// >>>>>>>>>>>>>>> Função de apertar a tecla ENTER já adicionar a tarefa.
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
// >>>>>>>>>>>>>>> Função de apertar a tecla ENTER já adicionar a tarefa.





// >>>>>>>>>>>>>>> Função de remover uma tarefa.
function del(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}
// >>>>>>>>>>>>>>> Função de remover uma tarefa.





// >>>>>>>>>>>>>>> Função de marcar uma tarefa como pronta.
function ativar(id){
    var item = document.getElementById(id);
    item.classList.add('check');

    var icone = document.getElementById('icone_'+id)
    icone.classList.remove('bi-circle-fill');
    icone.classList.add('bi-check-circle-fill');

    item.parentNode.appendChild(item);
}
// >>>>>>>>>>>>>>> Função de marcar uma tarefa como pronta.





// >>>>>>>>>>>>>>> Função desmarcar uma tarefa como pronta.
function desmarcar(id){
    var item = document.getElementById(id);
    item.classList.remove('check');

    var icone = document.getElementById('icone_'+id)
    icone.classList.add('bi-circle-fill');
    icone.classList.remove('bi-check-circle-fill');
}
// >>>>>>>>>>>>>>> Função desmarcar uma tarefa como pronta.





// >>>>>>>>>>>>>>> Função de alterar o plano de fundo.
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
// >>>>>>>>>>>>>>> Função de alterar o plano de fundo.