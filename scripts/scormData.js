var scormData = {
  "info":[
    {
      "intentos":1,
      "menuBloqueado":true,
      "isForLMS":true,
      "tituloScorm": "Mujer bisemanal",
      "forUnity": false, //false para Animate, true para unity
      "escenasElements":[ // para Unity son escenas y para animate son páginas
        {
          "ID":1,
          "nombreEnMenu":"Video Introducción",
          "nombreEscena":"main.html",
          "esSubindice":false,
          "visibleEnMenu": true,
        },
        {
          "ID":2,
          "nombreEnMenu":"Video Animación",
          "nombreEscena":"uno.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":3,
          "nombreEnMenu":"Parte Semifinal",
          "nombreEscena":"dos.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":4,
          "nombreEnMenu":"Parte Final",
          "nombreEscena":"tres.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },
        {
          "ID":5,
          "nombreEnMenu":"Parte 5",
          "nombreEscena":"cinco.html",
          "esSubindice":true,
          "visibleEnMenu": true,
        },

        {
          "ID":6,
          "nombreEnMenu":"eval",
          "nombreEscena":"cuatro.html",
          "esSubindice":false,
          "visibleEnMenu": true,

        },
      ]
    },
  ]
};
  //Datos del Scorm
  var isForLMS = scormData.info[0].isForLMS;
  var intentosScorm = scormData.info[0].intentos;
  var traceToConsole = true;
  var slideActual = 1;
  var unityOrAnimate = scormData.info[0].forUnity;
  var totalSlides = scormData.info[0].escenasElements.length;
  var contadorSlides = "";
  var menuBloqueado = scormData.info[0].menuBloqueado;
  // estructura de SD
  var suspedDataString;
  if(isForLMS){
    suspedDataString = top.verSuspend();
    if(suspedDataString == ""){
      suspedDataString = "<sd><intentos>" + intentosScorm + "</intentos><info></info><menu>1</menu><escena>1</escena></sd>";
    }
    else{
      if(!unityOrAnimate){
        var temporalParaJalarAnimate = getEscenaSD();
        animateSpecificSlide(temporalParaJalarAnimate);
      }
    }
  }
  else{
    //intentos/
    suspedDataString = "<sd><intentos>" + intentosScorm + "</intentos><info></info><menu>1</menu><escena>1</escena></sd>";
  }
  //Parseando el XML del SD
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(suspedDataString,"text/xml");
  //**********************************//
  //********** Funciones SD **********//
  //**********************************//
  //From SD to SDString
  function fromSDtoString(){
    if(isForLMS){
      suspedDataString = top.verSuspend();
      if(suspedDataString == ""){
        "<sd><intentos>" + intentosScorm + "</intentos><info></info><menu>1</menu><escena>1</escena></sd>";
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
      updateSuspendData(sXML);
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
    document.getElementById("contadorSlides").innerHTML = '<progress value="'+ slideActual +'" max="' + scormData.info[0].escenasElements.length + '" class="progressBar"></progress>';
    document.getElementById("contadorSlidesString").innerHTML = '<p>' + slideActual +' / ' + scormData.info[0].escenasElements.length + '</p>';
  }
  //***************************//
  //********** Barra **********//
  //***************************//
  //Suma uno más en el que voy
  function nextSlide(){
    var listoNext;
    console.log(scormData.info[0].escenasElements.length +" : " + xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue);
    if(Number(scormData.info[0].escenasElements.length) > xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue){
      var menuSumado = xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue;
      menuSumado++;
      slideActual++;
      saveEscenaSD(menuSumado);
      listoNext = scormData.info[0].escenasElements[menuSumado-1].nombreEscena;
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
    console.log(scormData.info[0].escenasElements.length +" : " + xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue);
    if(1 < xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue){
      var menuRestado = xmlDoc.getElementsByTagName("escena")[0].childNodes[0].nodeValue;
      menuRestado--;
      slideActual--;
      saveEscenaSD(menuRestado);
      listoPrev = scormData.info[0].escenasElements[menuRestado-1].nombreEscena;
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
    for(ichecSp = 0; ichecSp <= scormData.info[0].escenasElements.length-1;ichecSp++){
      if(Number(scormData.info[0].escenasElements[ichecSp].ID) == Number(valor)){
        listoSpecific = scormData.info[0].escenasElements[ichecSp].nombreEscena;
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
  //********** Menu **********//
  //**************************//

  function animateOpenMenu(){
      document.getElementById("menu").innerHTML = lookForMenu();
      document.getElementById("menu").style.height = "100%";
      document.getElementById("menu").style.width = "100%";
  }

  function lookForMenu(){
    var menuString ='<div class="menuContent"><div style="text-align:center;"><a href="javascript:closeMenu();"><img src="css/images/cerrar.png"/></a></div>';
    var avanceMenu = getMenuSD();
    menuString +='<div class="menuOrden50">';
    for(imenuCount = 0; imenuCount < totalSlides; imenuCount++){
        if(scormData.info[0].escenasElements[imenuCount].visibleEnMenu == true){
          if(scormData.info[0].escenasElements[imenuCount].esSubindice == false){
            if(menuBloqueado && avanceMenu < imenuCount + 1){
              menuString += '<p>• '+ scormData.info[0].escenasElements[imenuCount].nombreEnMenu +'</p>';
            }
            else{
              menuString += '<p><a href="javascript:animateSpecificSlide('+ (imenuCount+1) +'); closeMenu();">• '+ scormData.info[0].escenasElements[imenuCount].nombreEnMenu +'</a></p>';
            }
          }
          else{
            if(menuBloqueado && avanceMenu < imenuCount + 1){
              menuString += '<p>&nbsp;&nbsp;&nbsp;&nbsp;'+ scormData.info[0].escenasElements[imenuCount].nombreEnMenu +'</p>';
            }
            else{
              menuString += '<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:animateSpecificSlide('+ (imenuCount+1) +'); closeMenu();">'+ scormData.info[0].escenasElements[imenuCount].nombreEnMenu +'</a></p>';
            }
          }
        }

      }
      menuString +='</div>';
    menuString +='</div>';
    return menuString;
  }

  function closeMenu(){
    document.getElementById("menu").innerHTML = "";
    document.getElementById("menu").style.height = "0px";
    document.getElementById("menu").style.width = "0px";
  }

  //***********************************//
  //********** Funciones LMS **********//
  //***********************************//
  //Escribe calificación del alumno
  function setScoreLMS(valor){
    if(isForLMS){
      updateScoreRaw(valor);
    }
    else{console.log("califcicación de: " + valor);}
  }
  //Escribe status// passed, complete, failed//passed
  function userPassed(){
    if(isForLMS){
      updateLessonStatus("passed");
    }
    else{console.log("pasado");}
  }
  //completed
  function userCompleted(){
    if(isForLMS){
      updateLessonStatus("completed");
    }
    else{console.log("completado");}
  }
  //completed
  function userFailed(){
    if(isForLMS){
      updateLessonStatus("failed");
    }
    else{console.log("reprobado");}
  }
  //Obtener nombre del alumno
  function obtenerNombreAlumno(){
    return getStudentName();
  }
  //obtener Suspend Data
  function obtenerSuspend(){
     return getSuspendData();
   }
   //Escribir Suspend Data
   function escribeSuspend(valor){
     updateSuspendData(valor);
   }
   //cierra curso
   function cierraScorm(){
     closeCourse();
   }
   //bloquear botón siguiente
   function blockNextBtn(){
     document.getElementById("butNext").innerHTML = '&nbsp;';
   }
   //desbloquear botón siguiente
   function unblockNextBtn(){
     document.getElementById("butNext").innerHTML = '<a href="javascript:animateNextSlide();"><img src="css/images/adelante.png"/></a>';
   }
