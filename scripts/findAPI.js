
var o_API = null;
var findAPITries = 0;
var maxAPITries = 10;


/*******************************************************************************
**
** Function findAPI(win)
** Inputs:  win - a Window Object
** Return:  If an API object is found, it's returned, otherwise null is returned
**
** Description:
** This function looks for an object named API in parent windows
**
*******************************************************************************/
function findAPI(win)
{
   while ((win.API == null) && (win.parent != null) && (win.parent != win))
   {
      findAPITries++;

      // Note: 500 is a number that comes from the new IEEE API standard.
      //       See rational in ticket number 3547
      if (findAPITries > maxAPITries)
      {
         return null;
      }

      win = win.parent;

   }   
   return win.API;
}

function getAPI()
{
   var theAPI = findAPI(window);
   if (theAPI == null)
   {
     var win = window.top;
     /*while (win.parent != null && win.parent != win)
     {
       win = win.parent;
     }*/
     if (win.opener != null && typeof(win.opener) != "undefined")
     {
        theAPI = findAPI(win.opener);
     }
   }
   return theAPI
}

o_API = getAPI();
if (o_API==null){
	alert("SCORM API not found, communication with LMS will not be posible.");
}
