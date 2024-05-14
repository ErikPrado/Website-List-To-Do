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
    <div class="task-container-size" onclick="ativar(${contador})">
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
                        <p id="pDel">Deletar</p>
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
    item.classList.toggle('check')
    item.parentNode.appendChild(item);

    /*
    item.classList.add('check');

    var icone = document.getElementById('icone_'+id)
    icone.classList.remove('bi-circle-fill');
    icone.classList.add('bi-check-circle-fill');


    */




}
// >>>>>>>>>>>>>>> Função de marcar uma tarefa como pronta.





// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.
function changeTheme(){
    var buttonTheme = window.document.getElementById('buttonTheme');
    var colorWindow = window.document.getElementById('colorWindow');
    var infoThemes = window.document.getElementById('infoThemes');

    colorWindow.style.visibility='visible';
    buttonTheme.style.background='#ffffff49';
    infoThemes.style.visibility='hidden';
}
    var mainTheme = window.document.getElementById('main');
// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.





// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.
function changeLanguage(){
    var buttonLanguage = window.document.getElementById('buttonLanguage');
    var languageWindow = window.document.getElementById('languageWindow');
    var infoLanguage = window.document.getElementById('infoLanguage');

    languageWindow.style.visibility='visible';
    buttonLanguage.style.background='#ffffff49';
    infoLanguage.style.visibility='hidden';
}
    var mainTheme = window.document.getElementById('main');
// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.





// >>>>>>>>>>>>>>> Função de alterar o plano de fundo.
function blue(){
    mainTheme.setAttribute("class","bg-color-blue")
}
function green(){
    mainTheme.setAttribute("class","bg-color-green")
}

function red(){
    mainTheme.setAttribute("class","bg-color-red")
}
function aqua(){
    mainTheme.setAttribute("class","bg-color-aqua")
}

function orange(){
  mainTheme.setAttribute("class","bg-color-orange")
}

function pink(){
   mainTheme.setAttribute("class","bg-color-pink")
}
// >>>>>>>>>>>>>>> Função de alterar o plano de fundo.





// >>>>>>>>>>>>>>> Função de alterar o idioma.
var pTitleWebSite = window.document.getElementById('pTitleWebSite');
var versio = window.document.getElementById('version');
var pLocal = window.document.getElementById('pLocal');
var pAjuda = window.document.getElementById('pAjuda');
var pSobre = window.document.getElementById('pSobre');
var pFeedback = window.document.getElementById('pFeedback');
var myList = window.document.getElementById('myList');
var noTask = window.document.getElementById('noTask');
var createTask = window.document.getElementById('createTask');
var add = window.document.getElementById('add');
var pBackgroundTheme = window.document.getElementById('pBackgroundTheme');
var pLangagues = window.document.getElementById('pLangagues');
var hLangagues = window.document.getElementById('hLangagues');
var pThemes = window.document.getElementById('pThemes');


function translateEnglish(){
    version.innerHTML = "Version 1.07";
    pLocal.innerHTML="Local account";
    pAjuda.innerHTML="Help";
    pSobre.innerHTML="About the website";
    pFeedback.innerHTML ="Feedback";
    myList.innerHTML = "My List";
    noTask.innerHTML = "No tasks available."
    createTask.innerHTML = "Create task"
    add.innerHTML = "To add"
    pBackgroundTheme.innerHTML = "Background themes"
    pLangagues.innerHTML = "Languages";
    hLangagues.innerHTML = "Languages";
    pThemes.innerHTML = "Themes";
    pTitleWebSite.innerHTML = "To-do list";
}

function translateEspanol(){
    version.innerHTML = "Versión 1.07";
    pLocal.innerHTML="Cuenta local";
    pAjuda.innerHTML="Ayuda";
    pSobre.innerHTML ="Sobre el sitio web"
    pFeedback.innerHTML = "Comentario";
    myList.innerHTML = "Mi Lista";
    noTask.innerHTML = "No hay tareas disponibles."
    createTask.innerHTML = "Crear tarea"
    add.innerHTML = "Agregar"
    pBackgroundTheme.innerHTML = "Temas de fondo"
    pLangagues.innerHTML = "Línguas";
    hLangagues.innerHTML = "Línguas";
    pThemes.innerHTML = "Temas";
    pTitleWebSite.innerHTML = "Lista de tareas";
}

function translatePortugues(){
    version.innerHTML = "Versão 1.07";
    pLocal.innerHTML="Conta Local";
    pAjuda.innerHTML="Ajuda";
    pSobre.innerHTML="Sobre o site";
    pFeedback.innerHTML = "Feedback";
    myList.innerHTML = "Minha Lista";
    noTask.innerHTML = "Nenhuma tarefa disponível."
    createTask.innerHTML = "Criar Tarefa"
    add.innerHTML = "Adicionar"
    pBackgroundTheme.innerHTML = "Temas de fundo"
    pLangagues.innerHTML = "Idiomas";
    hLangagues.innerHTML = "Idiomas";
    pThemes.innerHTML = "Temas";
    pTitleWebSite.innerHTML = "Lista de tarefas";
}
// >>>>>>>>>>>>>>> Função de alterar o idioma.