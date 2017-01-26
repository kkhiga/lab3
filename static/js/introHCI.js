'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(
		function(e) {
			$('.jumbotron h1').text("Javascript is connected");
		}
	);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("#userName").click(changeText);

	$('.project').click(projectClick);
	

}


/* Project Click Function - Adds Project Description */
// function projectClick() {
//     var containingProject = $(this).closest(".project");
//     containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
// }

function changeText(event) {
	$(this).text("Changed Text");
}

function projectClick(event) {
	var containingProject = $(this).closest(".project");
	containingProject.append("<div class = 'project-description'><p>Description of the project.</p></div>");
}