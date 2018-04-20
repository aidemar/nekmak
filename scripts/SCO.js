
function SCO(){
	this.initialized = false;
	this.firstFile = parent.SCO_FirstFile;
	this.lessonLocation;
	this.launchData;
	this.scoreRaw;
	this.scoreMax;
	this.scoreMin;
	this.suspendData;
	this.studentName;
	this.status;
	this.entry;
	this.lessonMode;

	this.supportedInteractionDataModel = "";
	this.supportedObjectiveDataModel = "";

	this.interactions = null;
	this.objectives = null;
	
	this.scormAPI = new ScormApi();
	this.scormAPI.sco = this;
}

SCO.prototype.showMessage = function (s_Msg){
	if (o_Config.b_Debug)
		alert(s_Msg);
}

SCO.prototype.initialize = function(){
	if (o_API!=null){
		this.showMessage("Calling LMSInitialize");
		this.initialized = this.scormAPI.LMSInitialize("");
		this.showMessage("LMSInitialize returned "+this.initialized);
		return this.initialized;
	}
	else
		return false;
}

SCO.prototype.getInitialData = function (){
	if (this.initialized){
		this.studentName = this.scormAPI.LMSGetValue("cmi.core.student_name");
		this.launchData = this.scormAPI.LMSGetValue("cmi.launch_data");
		this.suspendData = this.scormAPI.LMSGetValue("cmi.suspend_data");
		this.status = this.scormAPI.LMSGetValue("cmi.core.lesson_status");
		this.entry = this.scormAPI.LMSGetValue("cmi.core.entry");
		this.scoreRaw = this.scormAPI.LMSGetValue("cmi.core.score.raw");
		this.lessonLocation = this.scormAPI.LMSGetValue("cmi.core.lesson_location");
		this.lessonMode = this.scormAPI.LMSGetValue("cmi.core.lesson_mode");
		var tempStatus = this.scormAPI.LMSGetValue("cmi.core.lesson_status");
		if(tempStatus == "not attempted"){
			this.scormAPI.LMSSetValue("cmi.core.lesson_status","incompleted");
		}
		if (this.lessonLocation=="")
			this.lessonLocation = this.firstFile;

		var s_ScoreChildren = this.scormAPI.LMSGetValue("cmi.core.score._children");
		if (s_ScoreChildren.indexOf("max")>-1)
			this.scoreMax = this.scormAPI.LMSGetValue("cmi.core.score.max");
		if (s_ScoreChildren.indexOf("min")>-1)
			this.scoreMin = this.scormAPI.LMSGetValue("cmi.core.score.min");

		this.loadInteractions(o_Config.LoadInteractionsOnStartup);
		this.loadObjectives(o_Config.LoadObjectivesOnStartup);

	}
}
SCO.prototype.verSuspend = function (){
	if (this.initialized){
	return this.scormAPI.LMSGetValue("cmi.suspend_data");
	}
}

SCO.prototype.loadInteractions = function (n_LoadOption){
	if (this.initialized && n_LoadOption>0){
		this.supportedInteractionDataModel = this.scormAPI.LMSGetValue("cmi.interactions._children");
		var s_Err = this.scormAPI.LMSGetLastError();
		if (s_Err=="0"){
			this.interactions = new Array();
			var n_Count = this.scormAPI.LMSGetValue("cmi.interactions._count");
			var i;
			for(i=0;i<n_Count;i++){
				this.interactions[i] = new interaction;
			}
		}
	}
}

SCO.prototype.loadObjectives = function (n_LoadOption){
	if (this.initialized && n_LoadOption>0){
		this.supportedObjectiveDataModel = this.scormAPI.LMSGetValue("cmi.objectives._children");
		var s_Err = this.scormAPI.LMSGetLastError();
		if (s_Err=="0"){
			this.objectives = new Array();
			var n_Count = this.scormAPI.LMSGetValue("cmi.objectives._count");
			if (n_LoadOption==2){
				var i;
				for(i=0;i<n_Count;i++){
					this.objectives[i] = new objective;
					
					if (this.supportedObjectiveDataModel.indexOf("id")>-1) this.objectives[i].id = this.scormAPI.LMSGetValue("cmi.objectives."+i+".id");
					if (this.supportedObjectiveDataModel.indexOf("status")>-1) this.objectives[i].status = this.scormAPI.LMSGetValue("cmi.objectives."+i+".status");
					
					var s_Scores = this.scormAPI.LMSGetValue("cmi.objectives."+i+".score._children");
					s_Err = this.scormAPI.LMSGetLastError();
					if (s_Err=="0"){
						if (s_Scores.indexOf("raw")>-1) this.objectives[i].scoreRaw = this.scormAPI.LMSGetValue("cmi.objectives."+i+".score.raw");
						if (s_Scores.indexOf("max")>-1) this.objectives[i].scoreMax = this.scormAPI.LMSGetValue("cmi.objectives."+i+".score.max");
					}
				}
			}
		}
	}
}

SCO.prototype.setStatus = function (s_Status){
	if (this.initialized && (this.status == "not attempted" || this.status == "incomplete")){
		if (this.scormAPI.LMSSetValue("cmi.core.lesson_status",s_Status+""))
			this.status = s_Status;
	}
}

SCO.prototype.setScore = function (n_Score){
	if (this.initialized){
		if (this.scormAPI.LMSSetValue("cmi.core.score.raw",n_Score+""))
			this.scoreRaw = n_Score;
	}
}

SCO.prototype.setScoreMax = function (n_ScoreMax){
	if (this.initialized){
		var s_ScoreChildren = this.scormAPI.LMSGetValue("cmi.core.score._children");
		if (s_ScoreChildren.indexOf("max")>-1)
			if (this.scormAPI.LMSSetValue("cmi.core.score.max",n_ScoreMax+""))
				this.scoreMax = n_ScoreMax;
	}
}

SCO.prototype.setScoreMin = function (n_ScoreMin){
	if (this.initialized){
		var s_ScoreChildren = this.scormAPI.LMSGetValue("cmi.core.score._children");
		if (s_ScoreChildren.indexOf("min")>-1)
			if (this.scormAPI.LMSSetValue("cmi.core.score.min",n_ScoreMin+""))
				this.scoreMin = n_ScoreMin;
	}
}

SCO.prototype.setSessionTime = function (s_Time){
	if (this.initialized){
		this.scormAPI.LMSSetValue("cmi.core.session_time",s_Time+"");
	}
}

SCO.prototype.updateSuspendData = function(){
	if (this.initialized){
		this.scormAPI.LMSSetValue("cmi.suspend_data",this.suspendData);
	}
}

SCO.prototype.updateLessonLocation = function (){
	if (this.initialized){
		this.scormAPI.LMSSetValue("cmi.core.lesson_location",this.lessonLocation);
	}
}

SCO.prototype.calculateLastLocation = function(){
	if (this.initialized){
		if (o_Config.IncludeFolderLessonLocation>-1){
			var s_URL = new String(parent.ContentFrame.location);
			if (s_URL.indexOf("SCOLoading")==-1 && s_URL.indexOf("out.htm")==-1){
				var n_Loc = s_URL.lastIndexOf("/");
				var s_Tmp = s_URL.substr(n_Loc+1);
				var i;
	
				for(i=0;i<o_Config.IncludeFolderLessonLocation;i++){
					s_URL = s_URL.slice(0,n_Loc);
					n_Loc = s_URL.lastIndexOf("/");
					s_Tmp = s_URL.substr(n_Loc+1) + "/" + s_Tmp;
				}
	
				this.lessonLocation = s_Tmp;
				this.updateLessonLocation();
			}
		}
		return(true);
	}else
		return(false);
}

SCO.prototype.setExit = function (){
	if (this.initialized){
		this.scormAPI.LMSSetValue("cmi.core.exit","logout");
	}
}

SCO.prototype.saliendo = function (){
	if (this.initialized){
			this.scormAPI.LMSSetValue("cmi.core.exit","logout");
	}
}

SCO.prototype.updateInteractions = function(i_id,i_tim,i_typ,i_crsp,i_wgt,i_srsp,i_res,i_lat) {
  var nextInt = parseInt( this.scormAPI.LMSGetValue( 'cmi.interactions._count' ), 10 )
  var root    = 'cmi.interactions.' + nextInt
  if(i_id)   this.scormAPI.LMSSetValue( root + '.id', i_id )
  if(i_tim)  this.scormAPI.LMSSetValue( root + '.time', i_tim )
  if(i_typ)  this.scormAPI.LMSSetValue( root + '.type', i_typ )
  if(i_crsp) this.scormAPI.LMSSetValue( root + '.correct_responses.0.pattern', i_crsp )
  this.scormAPI.LMSSetValue( root + '.weighting', i_wgt )
  if(i_srsp) this.scormAPI.LMSSetValue( root + '.student_response', i_srsp )
  if(i_res)  this.scormAPI.LMSSetValue( root + '.result', i_res )
  if(i_lat)  this.scormAPI.LMSSetValue( root + '.latency', i_lat )
}

SCO.prototype.updateObjectives = function(){
}

SCO.prototype.finalize = function (){
	this.showMessage("Finalizing SCO");
	if (this.initialized){
		
		//parent.ContentFrame.FinalSCOProcessing();
		
		this.calculateLastLocation();
		this.setSessionTime(this.normalizeTime(calculateTotalTime()/1000));
		this.updateSuspendData();
		this.setExit();
		
		//if (this.scoreRaw!="" && o_Config.ScoreImpliesComplete)
		//	this.setStatus("completed");
		//else
		//	this.setStatus("incomplete");

		this.scormAPI.LMSCommit("");
		this.scormAPI.LMSFinish("");
		this.initialized = false;
	}
}

SCO.prototype.normalizeTime = function(n_Seconds){
	n_Seconds = parseInt(n_Seconds);
	var s_Hr = parseInt(n_Seconds/3600);
	var s_Min = parseInt((n_Seconds % 3600)/60);
	var s_Seg = n_Seconds - (s_Hr * 3600) - (s_Min * 60);

	var s_Time = "";
	if (s_Hr<10)
		s_Time = "0" + s_Hr.toString() + ":";
	else
		s_Time = s_Hr.toString() + ":";

	if (s_Min<10)
		s_Time += "0" + s_Min.toString() + ":";
	else
		s_Time += s_Min.toString() + ":";

	if (s_Seg<10)
		s_Time += "0" + s_Seg.toString();
	else
		s_Time += s_Seg.toString();

	return s_Time;
}

SCO.prototype.normalizeStatus = function(s_Status){
	var sTmp = new String(s_Status);
	var s1 = sTmp.slice(0,1).toLowerCase();
	
	switch(s1){
		case "i": return("incomplete");break;
		case "c": return("completed");break;
		case "f": return("failed");break;
		case "p": return("passed");break;
	}
}

function interaction(){
	this.id = "";
	this.time = "";
	this.type = "";
	this.correctResponses = new Array();
	this.weighting = "";
	this.student_response = "";
	this.result = "";
	this.latency = "";
}

function correctResponse(){
	this.pattern = "";
}

function objective(){
	this.id;
	this.scoreRaw;
	this.scoreMax;
	this.status;
}

//--------------------------

function ScormApi(){
	this.sco;
}

ScormApi.prototype.LMSSetValue = function(param, value){
    if(this.sco.lessonMode == "normal"){
        if (o_API.LMSSetValue(param, value))
			o_API.LMSCommit("");
    }
}

ScormApi.prototype.LMSGetValue = function(param){
	return o_API.LMSGetValue(param);
}

ScormApi.prototype.LMSInitialize = function(){
	return o_API.LMSInitialize("");
}

ScormApi.prototype.LMSFinish = function(){
	return o_API.LMSFinish("");
}

ScormApi.prototype.LMSCommit = function(){
	return o_API.LMSCommit("");
}

ScormApi.prototype.LMSGetLastError = function(){
	return o_API.LMSGetLastError("");
}

