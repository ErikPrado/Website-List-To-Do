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
var buttonTheme = window.document.getElementById('buttonTheme');
var colorWindow = window.document.getElementById('colorWindow');
var infoThemes = window.document.getElementById('infoThemes');
var mainTheme = window.document.getElementById('main');

function changeTheme(){
    if(colorWindow.style.visibility === "hidden") {
        colorWindow.style.visibility = "visible";
    } else {
        colorWindow.style.visibility = "hidden";
    }
}



    var mainTheme = window.document.getElementById('main');
// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.





// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.
    var languageWindow = window.document.getElementById('languageWindow');
function changeLanguage(){
    
    if(languageWindow.style.visibility === "hidden") {
        languageWindow.style.visibility = "visible";
    } else {
        languageWindow.style.visibility = "hidden";
    }
    
    /*





    var buttonLanguage = window.document.getElementById('buttonLanguage');
    var languageWindow = window.document.getElementById('languageWindow');
    var infoLanguage = window.document.getElementById('infoLanguage');

    languageWindow.style.visibility='visible';
    buttonLanguage.style.background='#ffffff49';
    infoLanguage.style.visibility='hidden';
    */
}
    var mainTheme = window.document.getElementById('main');
    
// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.





// >>>>>>>>>>>>>>> Função de alterar o plano de fundo.
function red(){
    mainTheme.setAttribute("class","bg-color-red")
}

function orange(){
  mainTheme.setAttribute("class","bg-color-orange")
}

function pink(){
   mainTheme.setAttribute("class","bg-color-pink")
}

function ocean(){
    mainTheme.setAttribute("class", "b-background-ocean")
}

function work(){
    mainTheme.setAttribute("class", "b-background-work-table")
}

function car(){
    mainTheme.setAttribute("class", "b-background-car-yellow")
}

function nature1(){
    mainTheme.setAttribute("class", "b-background-nature-1")
}

function nature2(){
    mainTheme.setAttribute("class", "b-background-nature-2")
}

function nature3(){
    mainTheme.setAttribute("class", "b-background-nature-3")
}

// >>>>>>>>>>>>>>> Função de alterar o plano de fundo.





// >>>>>>>>>>>>>>> Função de alterar o idioma.
var version = window.document.getElementById('version');
var pLocal = window.document.getElementById('pLocal');
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

    var data = new Date()


    const mesesDoAno = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dezember"];
    let mesEscrito = mesesDoAno[data.getMonth()];
    
    const diaDaSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let diaSemana = diaDaSemana[data.getDay()];
    
    var ano = data.getFullYear();
    
    
    var diaDoMes = data.getDate();
    
    
    let txtTime = window.document.getElementById('txtTime');
    txtTime.innerHTML=`${diaSemana}, ${diaDoMes} ${mesEscrito}, ${ano}.`




}

function translateEspanol(){
    version.innerHTML = "Versión 1.07";
    pLocal.innerHTML="Cuenta local";
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

    var data = new Date()


    const mesesDoAno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre ", "Diciembre"];
    let mesEscrito = mesesDoAno[data.getMonth()];

    const diaDaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let diaSemana = diaDaSemana[data.getDay()];

    var ano = data.getFullYear();


    var diaDoMes = data.getDate();


    let txtTime = window.document.getElementById('txtTime');
    txtTime.innerHTML=`${diaSemana}, ${diaDoMes} de ${mesEscrito} de ${ano}.`
}

function translatePortugues(){
    version.innerHTML = "Versão 1.07";
    pLocal.innerHTML="Conta Local";
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

    var data = new Date()


    const mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let mesEscrito = mesesDoAno[data.getMonth()];

    const diaDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let diaSemana = diaDaSemana[data.getDay()];

    var ano = data.getFullYear();


    var diaDoMes = data.getDate();


    let txtTime = window.document.getElementById('txtTime');
    txtTime.innerHTML=`${diaSemana}, ${diaDoMes} de ${mesEscrito} de ${ano}.`
}
// >>>>>>>>>>>>>>> Função de alterar o idioma.