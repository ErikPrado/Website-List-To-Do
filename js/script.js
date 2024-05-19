var contador = 0;

// >>>>>>>>>>>>>>> Icone Default.
var circlePhotoProfile = window.document.getElementById('circlePhotoProfile');
circlePhotoProfile.setAttribute("class", "b-icon-pic-2")
// >>>>>>>>>>>>>>> Icone Default.





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





// >>>>>>>>>>>>>>> Div sem task input automatico
function autoInput(){
    inputTaskTxt.focus();
}
// >>>>>>>>>>>>>>> Div sem task input automatico





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

    document.getElementById('inputTaskTxt').placeholder = ` Olá ${nameUsuario}, o que vamos fazer hoje?`;
};
// >>>>>>>>>>>>>>> Função de Continuar ao digitar o nome da primeira tela de boas vindas.




var contTask = window.document.getElementById('contTask');
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
    

 
    contTask.innerHTML = `${contador}`;

    if ((taskTxt !== "") && (taskTxt !== null) && (taskTxt !== undefined)){
    var novaTask = `
    <div class="task-container-content" id=${contador}>

                <div class="task-line-decoration"></div>
    <div class="task-container-size" onclick="ativar(${contador})">
                <div class="f-column">
                    <div id="icone_${contador}" class="icon-task">
                        <i class="bi bi-check-lg"></i>
                    </div>
                </div>
                <div class="s-column" ">
                    <p class="task"> ${taskTxt} </p>
                    <p class="time-task" id="timeTask"> ${hoursMinutes} </p>
                </div>
                <div class="t-column" >
                <button onclick="del(${contador})" >
                    <i class="bi bi-trash-fill" ></i>
                        <div class="info-trash">
                        <p id="pDel"> Deletar </p>
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

document.addEventListener("keyup", function(event){
    var colorWindow = window.document.getElementById('colorWindow');
    var languageWindow = window.document.getElementById('languageWindow');
        if(event.keyCode === 27) {
        event.preventDefault();
        colorWindow.style.visibility="hidden";
        languageWindow.style.visibility="hidden";
        }
    }
    )




function closeWindow(){
    var colorWindow = window.document.getElementById('colorWindow');
    var languageWindow = window.document.getElementById('languageWindow');
    colorWindow.style.visibility="hidden";
    languageWindow.style.visibility="hidden";
}


// >>>>>>>>>>>>>>> Função de remover uma tarefa.
function del(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

    --contador;

    contTask.innerHTML = `${contador}`;

}
// >>>>>>>>>>>>>>> Função de remover uma tarefa.





// >>>>>>>>>>>>>>> Função de marcar uma tarefa como pronta.
function ativar(id){
    var item = document.getElementById(id);


    item.classList.toggle('check');
    item.parentNode.appendChild(item);
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
// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.





// >>>>>>>>>>>>>>> Função de abir o painel de plano de fundo.
var languageWindow = window.document.getElementById('languageWindow');
function changeLanguage(){
    
    if(languageWindow.style.visibility === "hidden") {
        languageWindow.style.visibility = "visible";
    } else {
        languageWindow.style.visibility = "hidden";
    }
}
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

function nature1(){
    mainTheme.setAttribute("class", "b-background-nature-1")
}

function nature2(){
    mainTheme.setAttribute("class", "b-background-nature-2")
}

function iconPic1(){
    circlePhotoProfile.setAttribute("class", "b-icon-pic-1")
}

function iconPic2(){
    circlePhotoProfile.setAttribute("class", "b-icon-pic-2")
}

function iconFemale1(){
    circlePhotoProfile.setAttribute("class", "b-icon-female-pic-1")
}

function iconFemale2(){
    circlePhotoProfile.setAttribute("class", "b-icon-female-pic-2")
}

function iconMale1(){
    circlePhotoProfile.setAttribute("class", "b-icon-male-pic-1")
}

function iconMale2(){
    circlePhotoProfile.setAttribute("class", "b-icon-male-pic-2")
}
// >>>>>>>>>>>>>>> Função de alterar o plano de fundo.





// >>>>>>>>>>>>>>> Função de alterar o idioma.
var version = window.document.getElementById('version');
var pLocal = window.document.getElementById('pLocal');
var pSobre = window.document.getElementById('pSobre');
var myList = window.document.getElementById('myList');
var noTask = window.document.getElementById('noTask');
var createTask = window.document.getElementById('createTask');
var add = window.document.getElementById('add');
var pBackgroundTheme = window.document.getElementById('pBackgroundTheme');
var pLangagues = window.document.getElementById('pLangagues');
var hLangagues = window.document.getElementById('hLangagues');
var pThemes = window.document.getElementById('pThemes');
var pIcons = window.document.getElementById('pIcons');
var h2Welcome = window.document.getElementById('h2Welcome');
var pDescription = window.document.getElementById('pDescription');
var pExperience = window.document.getElementById('pExperience');
var btnContinue = window.document.getElementById('btnContinue');
var inputTaskTxt = window.document.getElementById('inputTaskTxt');
var btnInfo = window.document.getElementById('btnInfo');
var myListMin = window.document.getElementById('myListMin');



function translateEnglish(){
    version.innerHTML = "Version 1.07";
    pLocal.innerHTML="Local account";
    myList.innerHTML = "My List";
    noTask.innerHTML = "No tasks available."
    createTask.innerHTML = "Create task"
    add.innerHTML = "Add"
    pBackgroundTheme.innerHTML = "Background themes"
    pLangagues.innerHTML = "Languages";
    hLangagues.innerHTML = "Languages";
    pThemes.innerHTML = "Personalize";
    pIcons.innerHTML = "Profile icons";
    h2Welcome.innerHTML = "Welcome to the To Do List website.";
    pDescription.innerHTML = "A website with a simple and objective interface created with the aim of helping you with your daily tasks.";
    pExperience.innerHTML = "For a full experience please enter your name:";
    myListMin.innerHTML = "My List";

    btnInfo.style.right="3px";

    var inputName = window.document.getElementById('inputName');
    var nameUsuario = (inputName.value);

    document.getElementById('inputName').placeholder ="Name:";

    document.getElementById('inputTaskTxt').placeholder = `Hi ${nameUsuario}, what are we doing today?`;

    document.getElementById('btnContinue').innerHTML="Continue";

    document.title = "To-Do List";

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
    myList.innerHTML = "Mi Lista";
    noTask.innerHTML = "No hay tareas disponibles."
    createTask.innerHTML = "Crear tarea"
    add.innerHTML = "Agregar"
    pBackgroundTheme.innerHTML = "Temas de fondo"
    pLangagues.innerHTML = "Línguas";
    hLangagues.innerHTML = "Línguas";
    pThemes.innerHTML = "Personalizar";
    pIcons.innerHTML = "Iconos de perfil";
    h2Welcome.innerHTML = "Bienvenido al sitio web To Do List."
    pDescription.innerHTML = "Un sitio web con una interfaz sencilla y objetiva creada con el objetivo de ayudarte en tus tareas diarias.";
    pExperience.innerHTML = "Para una experiencia completa por favor ingrese su nombre:";
    myListMin.innerHTML = "Mi Lista";

    btnInfo.style.right="-9px";

    var inputName = window.document.getElementById('inputName');
    var nameUsuario = (inputName.value);
    document.getElementById('inputTaskTxt').placeholder = `Hola ${nameUsuario}, ¿qué hacemos hoy?`;

    document.getElementById('inputName').placeholder ="Nome:";


    document.getElementById('btnContinue').innerHTML="Continuar";

    var data = new Date()


    const mesesDoAno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre ", "Diciembre"];
    let mesEscrito = mesesDoAno[data.getMonth()];

    const diaDaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let diaSemana = diaDaSemana[data.getDay()];

    var ano = data.getFullYear();


    var diaDoMes = data.getDate();


    let txtTime = window.document.getElementById('txtTime');
    txtTime.innerHTML=`${diaSemana}, ${diaDoMes} de ${mesEscrito} de ${ano}.`

    document.title = "Lista de Quehaceres";
}

function translatePortugues(){
    document.getElementById('inputTaskTxt').placeholder = ` Olá ${nameUsuario}, o que vamos fazer hoje?`;
    version.innerHTML = "Versão 1.07";
    pLocal.innerHTML="Conta Local";
    myList.innerHTML = "Minha Lista";
    noTask.innerHTML = "Nenhuma tarefa disponível."
    createTask.innerHTML = "Criar Tarefa"
    add.innerHTML = "Adicionar"
    pBackgroundTheme.innerHTML = "Temas de fundo"
    pLangagues.innerHTML = "Idiomas";
    hLangagues.innerHTML = "Idiomas";
    pThemes.innerHTML = "Personalizar";
    pIcons.innerHTML = "Icones de perfil";
    h2Welcome.innerHTML = "Bem-vindo ao site To Do List.";
    pDescription.innerHTML = "Um WebSite com uma interface simples e objetiva criado com o intuito de ajudar em suas tarefas diárias.";
    pExperience.innerHTML = "Para uma experiência completa por favor digite o seu nome:";
    myListMin.innerHTML = "Minha Lista";

    btnInfo.style.right="-17px";

    var inputName = window.document.getElementById('inputName');
    var nameUsuario = (inputName.value);


    document.getElementById('inputTaskTxt').placeholder = `Olá ${nameUsuario}, o que vamos fazer hoje?`;

    document.getElementById('inputName').placeholder ="Nome:";

    document.getElementById('btnContinue').innerHTML="Continuar";

    document.title= "Lista de Tarefa";

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