
var comingTime, leavingTime, totalTime;

function getComingTime()
{
	objTime = new Date();
	comingTime = objTime.getTime();
}
function getLeavingTime()
{
	objTime = new Date();
	leavingTime = objTime.getTime();
}
function startTimer()
{
	getComingTime();
}
function calculateTotalTime()
{
	getLeavingTime();
	totalTime = leavingTime - comingTime;
	return totalTime;
}

function disableKeys()
{
	if (window.event){
        var nKeyCode = parseInt(window.event.keyCode);
        var nContextMenuKey = 93, nBackSpaceKey = 8;
        if ( (nKeyCode == nContextMenuKey) || (nKeyCode == nBackSpaceKey) )
                return false
        else
                return true;
    }
}
