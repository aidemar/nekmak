var parser, xmlDoc;
var textSD = "<sd><intentos>0</intentos><candado>0|0|0|0|0|0|0|0|0</candado></sd>";
arrayCandados = new Array();
var traceToConsole = false;

parser = new DOMParser();
xmlDoc = parser.parseFromString(textSD,"text/xml");

//********** Función para obtener los candados de la cadena de SD
function getCandados(){
	fromSDtotextSD();
	var candadosString = xmlDoc.getElementsByTagName("candado")[0].childNodes[0].nodeValue;
	return candadosString;
}
//********** Función para obtener los intentos de la cadena de SD
function getIntentos(){
	fromSDtotextSD();
	var intentosString = xmlDoc.getElementsByTagName("intentos")[0].childNodes[0].nodeValue;
	return intentosString;
}
//********** Función trae de SD la info y la guarda en una variable llamada textSD
function fromSDtotextSD(){
	textSD = tomaSuspendData();
	if(textSD == "firstTime") textSD = "<sd><intentos>0</intentos><candado>0|0|0|0|0|0|0|0|0</candado></sd>";
	if(traceToConsole) console.log(textSD);
	return textSD;
}
//********** Función para obtener el valor de una llave del candado
function getKeyValue(myCandado){
	suspendy = getCandados();
	arrayCandados = suspendy.split("|");
	keyValue = arrayCandados[myCandado];
	if(traceToConsole) console.log(keyValue);
	return keyValue;
}
//********** Función para guardar el valor de una llave del candado
function saveKeyValue(myCandado, valueKey){
	suspendy = getCandados();
	arrayCandados = suspendy.split("|");
	arrayCandados[myCandado] = valueKey;
	pipe_delimited_string = arrayCandados.join("|");
	saveDataInXMLnode("candado", pipe_delimited_string);
	fromtextSDtoSD();
}
function saveIntentosValue(valorIntentos){
	
}
//********** Función para guardar lo que hay en textSD a SD
function fromtextSDtoSD(){
	if(textSD != "") updateSuspendData(textSD);
}
//********** Función para obtener datos personalizados de la cadena de SD
function getCustomzedSD(personalizado){
	fromSDtotextSD();
	var candadosString = xmlDoc.getElementsByTagName(personalizado)[0].childNodes[0].nodeValue;
	return candadosString;
}
//********** Función para guardar un valor en un nodo específico
function saveDataInXMLnode(nodo, valor){
	xmlDoc.getElementsByTagName(nodo)[0].childNodes[0].nodeValue = valor;
	fromtextSDtoSD();
}