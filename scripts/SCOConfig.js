
function Config(){
	
	// Does the score imply a completed lesson status?
	// true = If a score is set, a lesson status of completed will be set upon closing the SCO
	// false = Lesson status of incomplete will remain even when a score is set. "complete" must be manually set by the SCO.
	this.ScoreImpliesComplete = false;
	
	// Number of folders to include in lesson location value, also determines the ID for saving multiple scores in suspend data.
	// Lesson Location value will be:
	// -1 = Disabled, the course will save lesson location in it's own determined format.
	// 0 = c01t01.htm
	// 1 = chapter1/c01t01.htm
	// 2 = sco1/chapter1/c01t01.htm
	this.IncludeFolderLessonLocation = 0;

	// Determines how SCO score is calculated:
	// 0 = single score: the SCO will take any score it receives from flash as the SCO score.
	// 1 = multiple score average: the SCO will save in suspend data multiple scores and average them for the SCO score.
	this.ScoreCalculation = 0;
	
	// Determines the number of scores the SCO should expect and wait for before calculating the average score.
	// Only effective if ScoreCalculation=1
	this.NumberScores = 0;

	// Load interaction count when course starts?
	// 0 = no
	// 1 = yes
	this.LoadInteractionsOnStartup = 1;
	
	// Load objectives values when course starts?
	// 0 = no
	// 1 = count only
	// 2 = count, array and all LMS supported values
	this.LoadObjectivesOnStartup = 0;
	
	// Show debug messages?
	// false = no
	// true = yes
	this.b_Debug = false;
}