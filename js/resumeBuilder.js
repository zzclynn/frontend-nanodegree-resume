/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var name = "Zhicheng Zhang";
var email = "zzhang.purdue@udacity.com";
var title = "Software Developer";
var newEmail = email.replace("udacity","gmail");
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", title);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/
var skills = 
["C#", "JavaScript", "Java"];

var bio = {
	"name" : "Zhicheng Zhang",
	"age" : 32,
	"contactinfo" : {
		"mobile" : "213-268-4974",
		"email" : "zzhang.purdue@gmail.com",
		"github" : "https://github.com/zzclynn",
		"Linkedin" : "https://www.linkedin.com/in/zhicheng"
	},
	"skills" : skills,
	"welcomemessage" : "Hello World!",
	"picture" : "images/fry.jpg"
};
var work = {
	"jobs" : [
		{
			"title" : "Software Engineer",
			"employer" : "Greensleeves LLC",
			"city" : "Findlay, OH",
			"dates" : "2013 - 2016",
			"description" : "blabla"
		}	
	]

};
var education = {
	"school" : [
		{
			"name" :"Purdue University",
			"degree" : "Master of Science in Engineering",
			"years" : "2011-2013",
			"major" : ["Mechnical"]
		},
		{
			"name" :"Dalian University of Technology",
			"degree" : "Master",
			"years" : "2008-2011",
			"major" : ["Civil","Mechnical"]
		},
		{
			"name" :"Xi'an Jiaotong University",
			"degree" : "Bacholar",
			"years" : "2004-2008",
			"major" : ["Mechnical", "International Trade"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "Full-Stack Nanodegree Program",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "simple project 1",
			"dates" : 2015,
			"description" : "blabla",
			"images":  [
				"images/Capture.JPG"
			]
		},
		{
			"title" : "simple project 2",
			"dates" : 2015,
			"description" : "blabla",
			"images":   [
				"images/Capture.JPG"
			]
		}
	]
}


var name = "Zhicheng Zhang";
var title = "Software Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", title);
$("#header").append(formattedName);
$("#header").append(formattedRole);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
}

work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);	
		var fomrattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(fomrattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);


	} 
}
work.display();


function inName(name) {
	var nameArray = name.trim().split(" ");
	nameArray[0] = namArray[0].slice(0,1).toUpperCase() + nameArray.slice(1).toLowerCase();
	nameArray[1] = nameArray[1].toUpperCase();
	return nameArray[0]+ " " +nameArray[1];
}

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);	

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);	
			}
		}
		
	}
}
projects.display();
$('#main').apend(internationalizeButton);
$('#mapDiv').append(googleMap);