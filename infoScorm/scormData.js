var scormData = {

  "info":[

    {

      "intentos":1,

      "menuBloqueado":true,

      "isForLMS":false,

      "tituloScorm": "Nemak Product Development System (NPDS)",

      "forUnity": false, //false para Animate, true para unity

      "dividirMenu": 5, //Número de elementos por columna de menú (Son dos columnas)
      "escenasElements":[
 // para Unity son escenas y para animate son páginas
        {
          "ID":1,
          "nombreEnMenu":"Inicio",
          "nombreEscena":"nem_intro.html",
 // para animate: poner nombre y extensión .html// Para Unity el nombre de la escena
          "esSubindice":false,
          "visibleEnMenu": false,
        },
        {

          "ID":2,
          "nombreEnMenu":"Navigation",
          "nombreEscena":"nem_mt1_001.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":3,
          "nombreEnMenu":"Welcome",
          "nombreEscena":"nem_mt1_002.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":4,
          "nombreEnMenu":"Welcome",
          "nombreEscena":"nem_mt1_003.html",
          "esSubindice":false,
          "visibleEnMenu": true,
        },
        {
          "ID":5,
          "nombreEnMenu":"Product Development",
          "nombreEscena":"nem_mt1_004.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":6,
          "nombreEnMenu":"Product Development",
          "nombreEscena":"nem_mt1_005.html",
          "esSubindice":false,
          "visibleEnMenu": true,
        },
        {
          "ID":7,
          "nombreEnMenu":"Importance of Product Develpment",
          "nombreEscena":"nem_mt1_006.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":8,
          "nombreEnMenu":"Key Concepts",
          "nombreEscena":"nem_mt1_007.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":9,
          "nombreEnMenu":"Key Concepts",
          "nombreEscena":"nem_mt1_008.html",
          "esSubindice":false,
          "visibleEnMenu": true,
        },
        {
          "ID":10,
          "nombreEnMenu":"Key Concepts",
          "nombreEscena":"nem_mt1_009.html",
          "esSubindice":true,
          "visibleEnMenu": false,
        },
        {
          "ID":11,
          "nombreEnMenu":"Key Concepts",
          "nombreEscena":"nem_mt1_010.html",
          "esSubindice":true,
          "visibleEnMenu": false,
        },
        {
          "ID":12,
          "nombreEnMenu":"NDPS Map",
          "nombreEscena":"nem_mt1_011.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":13,
          "nombreEnMenu":"NDPS Map",
          "nombreEscena":"nem_mt1_012.html",
          "esSubindice":false,
          "visibleEnMenu": true,
        },
        {
          "ID":14,
          "nombreEnMenu":"Scorecard",
          "nombreEscena":"nem_mt1_013.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":15,
          "nombreEnMenu":"Scorecard",
          "nombreEscena":"nem_mt1_014.html",
          "esSubindice":false,
          "visibleEnMenu": false,
        },
        {
          "ID":16,
          "nombreEnMenu":"Summary",
          "nombreEscena":"nem_mt1_015.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":17,
          "nombreEnMenu":"Summary",
          "nombreEscena":"nem_mt1_016.html",
          "esSubindice":false,
          "visibleEnMenu": false,
        },
        {
          "ID":18,
          "nombreEnMenu":"Conclusion",
          "nombreEscena":"nem_mt1_017.html",
          "esSubindice":true,
          "visibleEnMenu": false,
        },
      ]
,
      "dosCaminos":false, // true para dos caminos, false para lineal
      "inicianCaminos":2,
      "finalizanCaminos":5,
      "caminoUno":[
        {"ID":3},
      ],
      "caminoDos":[
        {"ID":4}
      ],
    },

  ]

};

// var subMenuData = {

//   "info" := [
//         {     
//           "ID":1,
//           "nombreEnMenu":"Inicio",
//           "nombreEnSubmenu": "Program Administration"
//           "nombreEscena":"nem_intro.html",
          
//         {
//           "ID":2,
//           "nombreEnMenu":"Navigation",
//           "nombreEnSubmenu": "Product and Process Development";
//           "nombreEscena":"nem_mt1_001.html",
       
//         },
//         {
//           "ID":3,
//           "nombreEnMenu":"Welcome",
//           "nombreEnSubmenu": "Tooling/Machine Fixtures Development";
//           "nombreEscena":"nem_mt1_002.html",
         
//         },
//   ]
// };

var prueba = scormData.info;
    console.log(prueba);
var prueba2 = scormData.info[0].escenasElements;
    console.log(prueba2);
var prueba3 = scormData.info[0].escenasElements[0].nombreEnMenu;
    console.log(prueba3);

/*for (var i = 0; i < prueba2.length; i++) {
  console.log(prueba2[i].nombreEnMenu);
}*/



if(scormData.info[0].isForLMS){
  var o_SCO = parent.ApiFrame.o_SCO;
  var o_Config = parent.ApiFrame.o_Config;
  var o_API = parent.ApiFrame.o_API;
}

var parser, xmlDoc;

function animateNextSlide()
{
  var rutaURL = nextSlide();
  if(rutaURL != false){
    document.getElementById("contentIframe").innerHTML = '<iframe src="animate/'+rutaURL+'" onload="autoResize(this)" height="100%" width="100"></iframe> ';
  }
}

function animatePrevSlide(){
  var rutaURL = prevSlide();
  if(rutaURL != false){
    document.getElementById("contentIframe").innerHTML = '<iframe src="animate/'+rutaURL+'" onload="autoResize(this)" height="100%" width="100"></iframe> ';
  }
}


function animateSpecificSlide(valor){
  var rutaURL = chechSpecific(valor);
  if(rutaURL != false){
    // document.getElementById("contentIframe").innerHTML = '<iframe src="animate/'+rutaURL+'" onload="autoResize(this)" height="100%" width="100"></iframe> ';
  }
  else{
    //console.log();
  }
}




  //Datos del Scorm


  var isForLMS = scormData.info[0].isForLMS;

  var intentosScorm = scormData.info[0].intentos;

  var traceToConsole = true;
  
var slideActual = 1;
  
var unityOrAnimate = scormData.info[0].forUnity;
  var totalSlides = scormData.info[0].escenasElements.length;
  
var contadorSlides = "";


  var menuBloqueado = scormData.info[0].menuBloqueado;
  var suspedDataString;
  var divisionColumnasMenu = scormData.info[0].dividirMenu;
  var dosCaminosTamano = scormData.info[0].caminoUno.length;
  var singleOrMulti = scormData.info[0].dosCaminos;
  var abreCamino = Number(scormData.info[0].inicianCaminos);
  var cierraCamino = Number(scormData.info[0].finalizanCaminos);
  var multiPath=new Array();
  var pathToFollow = new Array();



  //*************************************//
  //********** Single or Multi **********//
  //*************************************//

  if(singleOrMulti){
    totalSlides = totalSlides - dosCaminosTamano;
    createMulti(1);
  }

function createMulti(valorM){
  // camino 1 = 1; camino 2 = 2;
  if(singleOrMulti){
    console.log("escogí multi");
    for(ismPath = 0; ismPath <= abreCamino-1; ismPath++){
      multiPath[ismPath] = scormData.info[0].escenasElements[ismPath];
    }
    if(valorM==1){

      for(ismPath1 = 0; ismPath1 <= Number(scormData.info[0].caminoUno.length-1); ismPath1++){
        multiPath[ismPath1 + abreCamino] = scormData.info[0].escenasElements[Number((scormData.info[0].caminoUno[ismPath1].ID)-1)];
      }
    }
    else if(valorM==2){
      for(ismPath2 = 0; ismPath2 <= Number(scormData.info[0].caminoDos.length-1); ismPath2++){
        multiPath[ismPath2 + abreCamino] = scormData.info[0].escenasElements[Number((scormData.info[0].caminoDos[ismPath2].ID)-1)];
      }
    }
    var sumaIDmas = 0;
    for(ismPath3 = cierraCamino-1; ismPath3 <= Number(totalSlides); ismPath3++){
      multiPath[Number(abreCamino + dosCaminosTamano+ sumaIDmas)] = scormData.info[0].escenasElements[ismPath3];
      sumaIDmas++
    }

    for(ismPathM1 = 0; ismPathM1 <= multiPath.length-1; ismPathM1++){
        pathToFollow[ismPathM1] = multiPath[ismPathM1];
    }
    pathToFollow = multiPath;
    if(traceToConsole){
      console.log("multi");
      console.log(pathToFollow);
    }

  }


}

if(singleOrMulti){
  for(ismPathM = 0; ismPathM <= multiPath.length-1; ismPathM++){
    pathToFollow[ismPathM] = multiPath[ismPathM];
  }
  pathToFollow = multiPath;
  if(traceToConsole){
    console.log("multi");
    console.log(pathToFollow);
  }
}
else{
  for(ismPathN = 0; ismPathN <= scormData.info[0].escenasElements.length-1; ismPathN++){
    pathToFollow[ismPathN] = scormData.info[0].escenasElements[ismPathN];
  }
  if(traceToConsole){
    console.log("normal");
    console.log(pathToFollow);
  }
}


  // estructura de SD

  parser = new DOMParser();
  var temporalParaJalarAnimate;

  function initScormLMS(){
    if(isForLMS){

        suspedDataString = o_SCO.verSuspend();

        var toGoOnlaunch;
        if(suspedDataString == ""){
          suspedDataString = "<sd><intentos>" + intentosScorm + "</intentos><info>0</info><menu>1</menu><escena>1</escena></sd>";
          escribeSuspend(suspedDataString);
          xmlDoc = parser.parseFromString(suspedDataString,"text/xml");

        }
        else{
          if(!unityOrAnimate){
            xmlDoc = parser.parseFromString(suspedDataString,"text/xml");

          }
        }
        temporalParaJalarAnimate = getEscenaSD();
        animateSpecificSlide(temporalParaJalarAnimate);

      }

      else{

        //intentos/

        suspedDataString = "<sd><intentos>" + intentosScorm + "</intentos><info>0</info><menu>1</menu><escena>1</escena></sd>";
        xmlDoc = parser.parseFromString(suspedDataString,"text/xml");
        var temporalParaJalarAnimate = getEscenaSD();

        animateSpecificSlide(temporalParaJalarAnimate);
      }
  }



  //Parseando el XML del SD



  


//**********************************//

  //********** Funciones SD **********//

  //**********************************//


  //From SD to SDString
  
function fromSDtoString(){

    if(isForLMS){

      suspedDataString = o_SCO.verSuspend();

      if(suspedDataString == ""){
        "<sd><intentos>" + intentosScorm + "</intentos><info>0</info><menu>1</menu><escena>1</escena></sd>";
      }

    }

    if(traceToConsole) console.log("tengo en SD: " + suspedDataString);
  
}
  


//guarda en SD lo del XML

  function guardaSDnow(){

    var oSerializer = new XMLSerializer();

    var sXML = oSerializer.serializeToString(xmlDoc);

    if(traceToConsole) console.log("mando a SD: " + sXML);

    if(isForLMS){

      escribeSuspend(sXML);
    }

  
}


  //******************************//
  
//********** Intentos **********//
  
//******************************//


  //Función para obtener los intentos de la cadena de SD

  function getIntentos(){

    fromSDtoString();

    var intentosString = xmlDoc.getElementsByTagName("intentos")[0].childNodes[0].nodeValue;

    return intentosString;
  
}
  

//Función para guardar intentos
  
function saveIntentosValue(valorIntentos){

    fromSDtoString();

    xmlDoc.getElementsByTagName("intentos")[0].childNodes[0].nodeValue = valorIntentos;

    guardaSDnow();
  
}
  


//**************************//
  
//********** menu **********//
  
//**************************//
  

//Función para obtener la info de la cadena de SD

  function getMenuSD(){

    fromSDtoString();

    var menuString = xmlDoc.getElementsByTagName("menu")[0].childNodes[0].nodeValue;

    return menuString;

  }
  

//Función para guardar la info

  function saveMenuSD(valorMenu){

    fromSDtoString();


    xmlDoc.getElementsByTagName("menu")[0].childNodes[0].nodeValue = valorMenu;

    guardaSDnow();
  
}
  

//**************************//

  //********** Info **********//
  
//**************************//
  

//Función para obtener la info de la cadena de SD

  function getInfoSD(){

    fromSDtoString();

    var infoString = xmlDoc.getElementsByTagName("info")[0].childNodes[0].nodeValue;

    return infoString;

  }
  

//Función para guardar la info

  function saveInfoSD(valorInfo){

    fromSDtoString();

    xmlDoc.getElementsByTagName("info")[0].childNodes[0].nodeValue = valorInfo;

    guardaSDnow();

  }
  

//****************************//
  
//********** Escena **********//
  
//****************************//
  

//Función para obtener la escena de la cadena de SD

  function getEscenaSD(){

    fromSDtoString();

    var EscenaString = xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue;

    return EscenaString;

  }
  

//Función para guardar la escena

  function saveEscenaSD(valorEscena){

    fromSDtoString();

    xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue = valorEscena;

    guardaSDnow();

  }
  

//*************************************//

  //********** Contador Slider **********//

  //*************************************//

  
function updateCounterSlider(){

    /*document.getElementById("contadorSlides").innerHTML = '<progress value="'+ slideActual +'" max="' + totalSlides + '" class="progressBar"></progress>';
    document.getElementById("contadorSlidesString").innerHTML = '<p>' + slideActual +' / ' + totalSlides + '</p>';
 */ }
  



//***************************//
  
//********** Barra **********//

  //***************************//

  
//Suma uno más en el que voy

  function nextSlide(){

    var listoNext;

    if(traceToConsole) console.log(totalSlides +" : " + xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue);

    if(Number(totalSlides) > xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue)
{

      var menuSumado = xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue;

      menuSumado++;

      slideActual++;

      saveEscenaSD(menuSumado);

      listoNext = pathToFollow[menuSumado-1].nombreEscena;
    }

    else{

      listoNext = false;

    }

    updateCounterSlider();

    revisaAvanceMenu(slideActual);
    return listoNext;

  }
  

function prevSlide(){

    var listoPrev;

    if(traceToConsole) console.log(totalSlides +" : " + xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue);

    if(1 < xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue)
{

      var menuRestado = xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue;

      menuRestado--;

      slideActual--;

      saveEscenaSD(menuRestado);

      listoPrev = pathToFollow[menuRestado-1].nombreEscena;

    }

    else{

      listoPrev = false;

    }

    updateCounterSlider();

    revisaAvanceMenu(slideActual);
    return listoPrev;
  
}
  


function chechSpecific(valor){

    var listoSpecific = false;

    for(ichecSp = 0; ichecSp <= pathToFollow.length-1;ichecSp++){

      if(Number(pathToFollow[ichecSp].ID) == Number(valor)){

        listoSpecific = pathToFollow[ichecSp].nombreEscena;

        slideActual = ichecSp + 1;

        saveEscenaSD(slideActual);

        revisaAvanceMenu(slideActual);
        updateCounterSlider();

      }
    }

    return listoSpecific;

  }

  function revisaAvanceMenu(valor){
    var menuTemporal = getMenuSD();
    if(Number(menuTemporal) <= Number(valor)){
      saveMenuSD(valor);

    }
  }
  //**************************//
  //********** PopUps **********//
  //**************************//



  function animateOpenPopUp(valor){

      document.getElementById("popUpDiv").innerHTML = '<iframe src="animate/'+valor+'"></iframe>';
      document.getElementById("popUpDiv").style.height = "100%";
      document.getElementById("popUpDiv").style.width = "100%";
  }

  function animateClosePopUp(){
    document.getElementById("popUpDiv").innerHTML = "";
    document.getElementById("popUpDiv").style.height = "0px";
    document.getElementById("popUpDiv").style.width = "0px";
  }


  //**************************//
  //********** Menu **********//
  //**************************//

  function animateOpenMenu(){
      // document.getElementById("menu").innerHTML = '<div id="main-menu"><a href=""><p class="first-p">'+ scormData.info[0].escenasElements[0].nombreEnMenu +'</p></a><a href=""><p>'+scormData.info[0].escenasElements[1].nombreEnMenu+'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[2].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[3].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[4].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[5].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[6].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[7].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[8].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[9].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[10].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[11].nombreEnMenu +'</p></a><a href=""><p>'+ scormData.info[0].escenasElements[12].nombreEnMenu +'</p></a><a href=""><p>Close X</p></a></div><div id="submenu"><a href=""><p class="first-p">Program Administration</p></a><a href=""><p>Product and Process Development</p></a><a href=""><p>Tooling/Machine Fixtures Development</p></a><a href=""><p>Manufacturing System Development</p></a><a href=""><p>Personnel Assigment and Training Development</p></a></div>'
      
  var html= " ";
  html += '<div id="main-menu">'
   for (var i = 0; i < prueba2.length; i++) {
    if(prueba2[i].esSubindice == false && prueba2[i].visibleEnMenu == true){
        console.log(i);
        html += '<a class="listItemMenu" href="#" onClick="javascript:imprimirElemento(' + prueba2[i].ID + ');">'+ prueba2[i].nombreEnMenu +'</a>'
        console.log(prueba2[i].nombreEnMenu);
    }

  }
        html += '</div>'
        document.getElementById("menu").innerHTML = html;
 




      // document.getElementById("menu").innerHTML = '<div id="submenu"><a href=""><p class="first-p">Program Administration</p></a><a href=""><p>Product and Process Development</p></a><a href=""><p>Tooling/Machine Fixtures Development</p></a><a href=""><p>Manufacturing System Development</p></a><a href=""><p>Personnel Assigment and Training Development</p></a></div>'
      // document.getElementById("menu").innerHTML = lookForMenu();
    /*  document.getElementById("menu").style.height = "100%";
      document.getElementById("menu").style.width = "100%";*/
  };

  function imprimirElemento(idClickeado) {
    alert(idClickeado);
  }



  function lookForMenu(){
    /*var menuString ='<div class="menuContent"><div style="text-align:center;"><a href="javascript:closeMenu();"><img src="css/images/cerrar.png"/></a></div>';
    var avanceMenu = getMenuSD();
    var addMenuColumn = 0;
    menuString +='<div class="menuOrden50">';
    for(imenuCount = 0; imenuCount < totalSlides; imenuCount++){
        if(pathToFollow[imenuCount].visibleEnMenu == true){
          if(pathToFollow[imenuCount].esSubindice == false){
            if(menuBloqueado && avanceMenu < imenuCount + 1){
              menuString += '<p>• '+ pathToFollow[imenuCount].nombreEnMenu +'</p>';
            }
            else{
              menuString += '<p><a href="javascript:animateSpecificSlide('+ (imenuCount+1) +'); closeMenu();">• '+ pathToFollow[imenuCount].nombreEnMenu +'</a></p>';
            }
            addMenuColumn++;
          }
          else{
            if(menuBloqueado && avanceMenu < imenuCount + 1){
              menuString += '<p>&nbsp;&nbsp;&nbsp;&nbsp;'+ pathToFollow[imenuCount].nombreEnMenu +'</p>';
            }
            else{
              menuString += '<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:animateSpecificSlide('+ (imenuCount+1) +'); closeMenu();">'+ pathToFollow[imenuCount].nombreEnMenu +'</a></p>';
            }
            addMenuColumn++;
          }
        }

        if(addMenuColumn == divisionColumnasMenu){
          menuString += '</div><div class="menuOrden50">'
        }
      }
      menuString +='</div>';
    menuString +='</div>';
    return menuString;*/

    // document.getElementById("menu").innerHTML = '<div id="main-menu"><a href=""><p class="first-p">Overview</p></a><a href=""><p>Milestone -2</p></a><a href=""><p>Milestone -1</p></a><a href=""><p>Milestone 0</p></a><a href=""><p>Milestone 1</p></a><a href=""><p>Milestone 2</p></a><a href=""><p>Milestone 3</p></a><a href=""><p>Milestone 4</p></a><a href=""><p>Milestone 5</p></a><a href=""><p>Milestone 6</p></a><a href=""><p>Milestone 7</p></a><a href=""><p>Milestone 8</p></a><a href=""><p>Milestone 9</p></a><a href=""><p>Close X</p></a></div>'
  }



  function closeMenu(){

    alert(prueba3);
    document.getElementById("menu").innerHTML = "";
  /*  document.getElementById("menu").style.height = "0px";
    document.getElementById("menu").style.width = "0px";*/
  }

  


//***********************************//
  
//********** Funciones LMS **********//
  
//***********************************//
  

//Escribe calificación del alumno

  function setScoreLMS(valor){

    if(isForLMS){
      o_SCO.setScore(valor);
    }
    else{console.log("califcicación de: " + valor);}
  
}
  

//Escribe status// passed, complete, failed

//passed

  function userPassed(){

    if(isForLMS){
      o_SCO.setStatus( o_SCO.normalizeStatus("passed") );
    }
    else{console.log("pasado");}
  }
  
//completed

  function userCompleted(){
    if(isForLMS){
      o_SCO.setStatus( o_SCO.normalizeStatus("complete") );
    }
    else{console.log("completado");}
  
}
  
//completed

  function userFailed(){

    if(isForLMS){
      o_SCO.setStatus( o_SCO.normalizeStatus("failed") );
    }
    else{console.log("reprobado");}
  }
  

//Obtener nombre del alumno

  function obtenerNombreAlumno(){

    return o_SCO.getStudentName();
  
}
  

//obtener Suspend Data

  function obtenerSuspend(){

     return o_SCO.getSuspendData();

   }
   

//Escribir Suspend Data

   function escribeSuspend(valor){

     o_SCO.suspendData = valor;
     o_SCO.updateSuspendData();

   }
   

//cierra curso

   function cierraScorm(){

     o_SCO.closeCourse();
   
}

   //bloquear botón siguiente
   function blockNextBtn(){
     document.getElementById("butNext").innerHTML = '&nbsp;';
   }
   //desbloquear botón siguiente
   function unblockNextBtn(){
     document.getElementById("butNext").innerHTML = '<a href="javascript:animateNextSlide();"><img src="css/images/adelante.png"/></a>';
   }
   //bloquear botón siguiente
   function blockPrevBtn(){
     document.getElementById("butPrev").innerHTML = '&nbsp;';
   }
   //desbloquear botón siguiente
   function unblockPrevBtn(){
     document.getElementById("butPrev").innerHTML = '<a href="javascript:animatePrevSlide();"><img src="css/images/atraz.png"/></a>';
   }
