var bio = {
    "name": "Youssef Elkhateeb",
    "role": "Web Developer",
    "contacts": {
        "mobile": "609-356-3981",
        "email": "youssefhelkhateeb@gmail.com",
        "github": "youssefe11",
        "location": "Denver, Colorado, USA"
    },
    "biopic": "images/biopic1.jpg",
    "welcomeMessage": "I'm currently an aspiring Web Developer in Denver, Colorado.  Thanks for stopping by!",
    "skills": ["JavaScript", "Python", "HTML", "CSS"]
};

var work = {
    "jobs": [{
            "employer": "NovoPath",
            "title": "Quality Assurance Specialist",
            "location": "Princeton, NJ, US",
            "dates": "September 2014-April 2016",
            "description": "Tested software updates and releases before release to clients. Identifying any bugs or discrepacies between release version and client requests. Worked closely with project managers and developement team to resolve any bugs, and to release fixes and updates in a timely manner."
        },
        {
            "employer": "Asset Management Specialists",
            "title": "Special Projects Quality Assurance Representative",
            "location": "Bristol, PA, US",
            "dates": "January 2014-July 2014",
            "description": "Managed relations with vendors and contractors in handling foreclosed housing. Evaluated property conditions and proposed scope and budget for enhancements. Worked closely with other departments to resolve issues including negotiating fees with vendors."
        },
        {
            "employer": "Merril Lynch",
            "title": "Retirement Plan Services Representative",
            "location": "Pennington, NJ, US",
            "dates": "September 2013-January 2014",
            "description": "Answered calls in a call center from financial advisors in regards to questions, concerns, and regulations. Managed movement of money between retirement accounts for high value clients. Account types included IRA, Roth, ESA, 529, among other account types. Assisted financial advisers in questions regarding retirement accounts according to IRS standards. Maintained above a 97% satisfaction rate with financial advisers, which was in the top 3 of department."
        }
    ]
};

var education = {
    "schools": [{
        "name": "Rutgers University",
        "dates": "1996 - 2001",
        "location": "New Brunswick, NJ, US",
        "degree": "B.Sc.",
        "majors": "Environmental Planning with option in GIS",
        "minor": ["Environmental Policy"],
        "url": "http://www.rutgers.edu/"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Into to Programming",
        "dates": "October2016-March 2017",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};

var projects = {
    "projects": [{
            "title": "Webpage",
            "dates": "2016",
            "description": "Created a basic website explaing the key concepts of HTML and CSS, which are used to create this website.",
            "images": ["images/BasicWebsite.jpg"],
            "url": ""
        },
        {
            "title": "Python Madlibs Quiz",
            "dates": "2016",
            "description": "Created a madlibs quiz using Python. Quiz prompts users to fill in the blanks.",
            "images": ["images/Madlibs_quiz.jpg"],
            "url": ""
        },
        {
            "title": "Favorite Movies Website",
            "dates": "2017",
            "description": "Created a website displaying some of my favorite movies. Clicking on the poster image of the movie plays the movie trailer.",
            "images": ["images/Favorite_movies.jpg"],
            "url": ""
        }
    ]
};

bio.display = function(){

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i = 0, len = bio.skills.length, text = ""; i < len; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }

        // for (i in bio.skills) {
        //     $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        // }
    }

    for (i = 0, len = formattedContactInfo.length, text = ""; i < len; i++) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    } 

    // for (i in formattedContactInfo) {
    //     $("#topContacts").append(formattedContactInfo[i]);
    //     $("#footerContacts").append(formattedContactInfo[i]);
    // }
};

work.display = function(){

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i = 0, len = work.jobs.length, text = ""; i < len; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }

        // for (i in work.jobs) {
        //     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        //     var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        //     var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        //     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        //     var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        //     var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

        //     $(".work-entry:last").append(formattedEmployerWorkTitle);
        //     $(".work-entry:last").append(formattedWorkLocation);
        //     $(".work-entry:last").append(formattedDates);
        //     $(".work-entry:last").append(formattedWorkDescription);
        // }

    }

};

projects.display = function() {
    if (projects.projects.length > 0) {
        
        for (i = 0, len = projects.projects.length, text = ""; i < len; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var img = 0; img < projects.projects[i].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }

        }
        
        // for (i in projects.projects) {
        //     $("#projects").append(HTMLprojectStart);

        //     var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
        //     var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        //     var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        //     $(".project-entry:last").append(formattedProjectTitle);
        //     $(".project-entry:last").append(formattedProjectDates);
        //     $(".project-entry:last").append(formattedProjectDescription);

        //     for (img = 0, len = projects.projects.length, text = ""; img < len; img++) {
        //         var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        //         $(".project-entry:last").append(formattedProjectImage);
        //     }
        //     // for (img in projects.projects[i].images) {
        //     //     var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        //     //     $(".project-entry:last").append(formattedProjectImage);
        //     // }


        // }
    }
};

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i = 0, len = education.schools.length, text = ""; i < len; i++){
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }

        // for (i in education.schools) {
        //     $("#education").append(HTMLschoolStart);

        //     var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        //     var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        //     var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        //     var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        //     var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

        //     $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        //     $(".education-entry:last").append(formattedSchoolDates);
        //     $(".education-entry:last").append(formattedSchoolLocation);
        //     $(".education-entry:last").append(formattedSchoolMajor);
        // }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i = 0, len = education.onlineCourses.length, text = ""; i < len; i++){
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }

            // for (i in education.onlineCourses) {
            //     $("#education").append(HTMLschoolStart);
            //     var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
            //     var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            //     var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            //     var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

            //     $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            //     $(".education-entry:last").append(formattedOnlineDates);
            //     $(".education-entry:last").append(formattedOnlineURL);
            // }
        }

    }
};


bio.display();
work.display();
projects.display();
education.display();
