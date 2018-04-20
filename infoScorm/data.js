var menuData = [
        {     
          "id":1,
          "nombreEnMenu":"Inicio",
          "tieneliga": true,
          "liga": "https://www.google.com"
         }, 
        {
          "id":2,
          "nombreEnMenu":"Navigation",
          "tieneliga": false,
 		  "liga": ""    
        },
        {
          "id":3,
          "nombreEnMenu":"Welcome",
          "tieneliga": false,   
          "liga": ""
        },
  ];


var submenuData =  [
        {     
          "idPadre":2,       
          "nombreEnSubmenu": "Program Administration",
          "liga": "https://www.twitter.com"

        },
        {
          "idPadre":2,       
          "nombreEnSubmenu": "Product and Process Development",
          "liga": "https://www.instagram.com"
       
        },
        {
          "idPadre":2,       
          "nombreEnSubmenu": "Tooling",
          "liga": "https://www.netflix.com"
         
        },
        {
          "idPadre":3,       
          "nombreEnSubmenu": "Machine Fixtures Development",
          "liga": "https://www.spotify.com"
         
        },

  ];

var menuTitles = menuData;
console.log(menuTitles);
var submenuTitles = submenuData;
var ligas = menuTitles[2].tieneliga;
console.log(ligas);

  function animateOpenMenu(){
      
  var html= " ";
  html += '<div id="main-menu">';
   for (var i = 0; i < menuTitles.length; i++) {
        html += '<a class="listItemMenu" href="#" onClick="javascript:imprimirSubmenu(\''+ menuTitles[i].nombreEnMenu + '\','+ menuTitles[i].id + ',\'' + menuTitles[i].liga +'\')">'+ menuTitles[i].nombreEnMenu +'</a>';

  }
        html += '<a class="listItemMenu" href="#" onClick="javascript:closeMenu()">Close X</a></div>';
        document.getElementById("menu").innerHTML = html;
 
  };


  function imprimirSubmenu(tituloclikeado, indiceclickeado, ligaclickeadaMenu) {
  	document.getElementById("menu-title").innerHTML = tituloclikeado;

  	if(menuTitles[indiceclickeado-1].tieneliga == true){
  		window.location.href = ligaclickeadaMenu;

  		} else {
  		
  	  	var htmlSubmenu = " ";
  		htmlSubmenu += '<div id="submenu">';

  		for(var j = 0; j < submenuTitles.length; j++){
	  	
  			if(indiceclickeado == submenuTitles[j].idPadre){
  				htmlSubmenu += '<a class="listItemMenu" href="#" onClick="javascript:sendToLink(\''+ submenuTitles[j].nombreEnSubmenu + '\',\'' + submenuTitles[j].liga +'\')">' + submenuTitles[j].nombreEnSubmenu + '</a>'; 
  			}
  		}
 
  		htmlSubmenu += '</div>';
  		document.getElementById("menu2").innerHTML = htmlSubmenu;
  	
  		}  
  	};

/*		if(menuTitles[indiceclickeado-1].tieneliga == true){
  		alert(":)");
  		} else {
  		alert("AA");
  		}
*/

	function sendToLink(tituloSubmenuclickeado, ligaclickeada){
		document.getElementById("menu-title").innerHTML = tituloSubmenuclickeado;

		document.getElementById("menu-title").innerHTML = indiceclickeado;
		

	}



  function mostrarId(indiceclickeado){
  	//Parámentro es una variable que no necesita ser definida.
  	//Queremos identificar el valor del elemento clickeado.
  	//La función cuando se mande llamar espera un parámetro. 
  	//Esto es la definición.
  	//Un evento realiza la llamada.
  	//No existe una funcion que se llame mostrarId y que no espere parámetros. 
  	//En el evento escribi es el valor que queremos comparar, se convierte en parámetro. 
  	// Manual var  indiceclickeado= 2;
  	alert(menuTitles[indiceclickeado-1].nombreEnMenu);
  }



/*  	var htmlSubmenu = " ";
  	htmlSubmenu += '<div id="submenu">';

  	for(var i =0; i < menuTitles.length; i++) {
  		for(var j = 0; j < submenuTitles.length; j++){
	  	
  			if(menuTitles[i].id == submenuTitles[j].idPadre){
  				htmlSubmenu += '<a class="listItemMenu" href="#">' + submenuTitles[j].nombreEnSubmenu + '</a>'; 
  			}

  		}
  	}

  		htmlSubmenu += '</div>';
  		document.getElementById("menu2").innerHTML = htmlSubmenu*/;


  			/*console.log(menuTitles[i].id);
  			console.log(submenuTitles[j].idPadre);*/