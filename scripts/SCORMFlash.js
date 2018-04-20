
if(scormData.info[0].isForLMS){
	var o_SCO = parent.ApiFrame.o_SCO;
	var o_Config = parent.ApiFrame.o_Config;
	var o_API = parent.ApiFrame.o_API;
}

function SCOFlash_DoFSCommand(command, args)
{
	switch(command){
		case "assessment":
			aScores = args.split("_");
			if (o_Config.ScoreCalculation==0){
				o_SCO.setScore( parseInt(aScores[0]) );
				o_SCO.setScoreMax( parseInt(aScores[1]) );
			}else
				saveScore(aScores[0]);
			break;
		case "getSuspendData":
			document.SCOFlash.SetVariable(args,getSuspendData());
			break;
		case "updateSuspendData":
			updateSuspendData(args);
			break;
		case "getLessonLocation":
			document.SCOFlash.SetVariable(args,getLessonLocation());
			break;
		case "updateLessonLocation":
			updateLessonLocation(args);
			break;
		case "updateLessonStatus":
			updateLessonStatus(args);
		case "getStudentName":
			document.SCOFlash.SetVariable(args,getStudentName());
			break;
	}
}

function getSuspendData()
{

	return o_SCO.suspendData;
}

function tomaSuspendData()
{
	loQueHayEnSuspend = o_SCO.verSuspend();

	if(loQueHayEnSuspend==""){
		loQueHayEnSuspend="firstTime";
	}
	return loQueHayEnSuspend;

}

function getLessonLocation()
{
	return o_SCO.lessonLocation;
}

function getLessonStatus()
{
	return o_SCO.status;
}

function getStudentName()
{
	return o_SCO.studentName;
}

function getExamStatus()
{
	return o_SCO.status;
}

function getItemStatus()
{
	return o_SCO.status;
}

function updateSuspendData(s_SD){
	o_SCO.suspendData = s_SD;
	o_SCO.updateSuspendData();
}

function updateLessonLocation(s_Loc){
	o_SCO.lessonLocation = s_Loc;
	o_SCO.updateLessonLocation();
}

function updateLessonStatus(s_Status){
	o_SCO.setStatus( o_SCO.normalizeStatus(s_Status) );
}
function updateScoreRaw(nScore)
{
    o_SCO.setScore(nScore);
}

function putSCORMInteractions(id,tim,typ,crsp,wgt,srsp,res,lat) {
  o_SCO.updateInteractions(id,tim,typ,crsp,wgt,srsp,res,lat);
}

function saveScore(scoreRaw){
	var sEvals = o_SCO.suspendData + "";

	var s_URL = new String(location);
	var n_Loc = s_URL.lastIndexOf("/");
	var evalName = s_URL.substr(n_Loc+1);
	evalName = evalName.split(".")[0];
	var i;

	for(i=0;i<o_Config.IncludeFolderLessonLocation;i++){
		s_URL = s_URL.slice(0,n_Loc);
		n_Loc = s_URL.lastIndexOf("/");
		evalName = s_URL.substr(n_Loc+1) + "_" + evalName;
	}

	if (sEvals.indexOf(evalName)==-1){
		if (sEvals.length>0)
			sEvals += "|";
		sEvals += evalName + "=" + scoreRaw;
	}else{
		var aEvals = sEvals.split("|");
		n_Loc = aEvals.find(0,evalName,false);
		if (n_Loc>-1){
			aEvals[n_Loc] = evalName + "=" + scoreRaw;
			sEvals = aEvals.join("|");
		}
	}
	o_SCO.suspendData = sEvals;
	o_SCO.updateSuspendData();
}

function FinalSCOProcessing(){
	if (o_Config.ScoreCalculation==1){
		var sEvals = o_SCO.suspendData + "";
		if (sEvals.length>0){
			var aEvals = sEvals.split("|");
			if (aEvals.length==o_Config.NumberScores){
				var nEvalSum=0;
				for(var i=0;i<aEvals.length;i++)
					nEvalSum += parseInt(aEvals[i].split("=")[1]);
				var nAvg = Math.round(nEvalSum/o_Config.NumberScores);

				o_SCO.setScore( nAvg );
				o_SCO.setScoreMax( 100 );
			}
		}
	}
}

Array.prototype.find = function(start,searchStr,exact) {
	if (start<0 || start>=this.length) return -1;
	for (i=start; i<this.length; i++) {
		if (typeof(searchStr) == 'function'){
			if (searchStr.test(this[i])){
				return i;
			}
		}else{
			if ((exact && this[i]===searchStr) || (!exact && this[i].indexOf(searchStr)>-1)){
				return i;
			}
		}
	}
	return -1;
}
function salirCourse(){
	o_SCO.finalize();
}
