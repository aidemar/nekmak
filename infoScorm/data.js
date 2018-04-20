var menuData = [
        {     
          "id":1,
          "nombreEnMenu":"Inicio",
          "tieneliga": true,
          "liga": "google.com"
         }, 
        {
          "id":2,
          "nombreEnMenu":"Navigation",
          "liga": "google.com",
          "tieneliga": true,
 		  "liga": "google.com"    
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
          "idPadre":1,       
          "nombreEnSubmenu": "Program Administration",
          "liga": "google.com"

        },
        {
          "idPadre":1,       
          "nombreEnSubmenu": "Product and Process Development",
          "liga": "google.com"
       
        },
        {
          "idPadre":2,       
          "nombreEnSubmenu": "Tooling",
          "liga": "google.com"
         
        },
        {
          "idPadre":3,       
          "nombreEnSubmenu": "Machine Fixtures Development",
          "liga": "google.com"
         
        },

  ];

var menuTitles = menuData;
console.log(menuTitles);
var submenuTitles = submenuData;

  function animateOpenMenu(){
      
  var html= " ";
  html += '<div id="main-menu">';
   for (var i = 0; i < menuTitles.length; i++) {
        html += '<a class="listItemMenu" href="#" onClick="javascript:imprimirSubmenu(id);">'+ menuTitles[i].nombreEnMenu +'</a>';

  }
        html += '</div>';
        document.getElementById("menu").innerHTML = html;
 
  };


  function imprimirSubmenu(element) {
  	var htmlSubmenu = " ";
  	htmlSubmenu += '<div id="submenu">';

  	for(var i =0; i < menuTitles.length; i++) {
  		for(var j = 0; j < submenuTitles.length; j++){
  			/*console.log(menuTitles[i].id);
  			console.log(submenuTitles[j].idPadre);*/
	  	
  			if(menuTitles[i].id == submenuTitles[j].idPadre){
  				htmlSubmenu += '<a class="listItemMenu" href="#">' + submenuTitles[j].nombreEnSubmenu + '</a>'; 
  			}

  		}
  	}

  		htmlSubmenu += '</div>';
  		document.getElementById("menu2").innerHTML = htmlSubmenu;

  };