
var o_SCO = parent.ApiFrame.o_SCO;
var o_API = parent.ApiFrame.o_API;

function SCOFlash_DoFSCommand(command, args)
{
	switch(command){
		case "getData":
			document.SCOFlash.SetVariable("strSuspendData",getSuspendData());
			document.SCOFlash.SetVariable("strLessonLocation",getLessonLocation());
			break;
	}
}
function getUrlLink(){
    return strURL;
}
function isAnyApi(){
//    alert(o_SCO)
    return o_SCO;
}
function showMessage(strMsg){
    alert(strMsg);
}
function ChargeXml()
{
	var sURL = new String(location);
	var iPosX = sURL.lastIndexOf("/");
	var iPosY = sURL.indexOf(".");
	var vCarX = sURL.substr(iPosX + 1, sURL.length);
	
	var sFil = vCarX;
	var iPos = sFil.indexOf(".");
	var vCar = sFil.substr(0, iPos);
	document.SCOFlash.SetVariable("idFileTranx",vCar);
}
// Funciones para carga o actualización de variables SCORM. El orden es segun manual

function getCoreChildren()
{
//    alert(o_SCO.coreChildren)
    return o_SCO.coreChildren;
}
function getStudentID()
{
    return o_SCO.studentID;
}
function getStudentName()
{
    var sendName = "";
    var tmpName = o_SCO.studentName;
    var arrName = tmpName.split(",");
    if(arrName.length > 1){
        sendName = arrName[1] + " " + arrName[0];
    } else {
        sendName = tmpName;
    }
    
    return sendName;
}
function getLessonLocation()
{
	return o_SCO.lessonLocation;
}
function updateLessonLocation(s_Loc)
{
	o_SCO.lessonLocation = s_Loc;
	o_SCO.updateLessonLocation();
}
function getCredit()
{
    return o_SCO.credit;
}
function getLessonStatus()
{
	return o_SCO.status;
}
function updateLessonStatus(strStatus)
{
  o_SCO.setStatus(strStatus);
}
function getEntry()
{
    return o_SCO.entry;
}
function getCoreScoreChildren()
{
    return o_SCO.coreScoreChildren;
}
function getScoreRaw(){
    return o_SCO.scoreRaw;
}
function updateScoreRaw(nScore)
{
    o_SCO.setScore(nScore);
}
function getSuspendData()
{
	
	
	return o_SCO.suspendData;
	
}

function tomaSuspendData()
{
	loQueHayEnSuspend = o_SCO.verSuspend();
	
	if(loQueHayEnSuspend==""){
		loQueHayEnSuspend="0|0|0|0|0|0|0|86|18";
	}
	return loQueHayEnSuspend;
		
}

function updateSuspendData(s_SD){
	o_SCO.suspendData = s_SD;
	o_SCO.updateSuspendData();
}
function getLaunchData()
{
  return o_SCO.launchData;
}

function FinalSCOProcessing(){
    o_SCO.finalize();
// 	o_SCO.setStatus('completed');
}
function closeWindow(){
    parent.close();
}