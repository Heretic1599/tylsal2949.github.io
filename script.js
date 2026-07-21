/*
    Author: Tyler Salvador
    Date: 07/21/2026
    Purpose: Add interactivity to the portfolio using JavaScript.
*/

// Welcome Message

document.getElementById("welcomeMessage").textContent =
    "Welcome to My Portfolio!";

// Welcome Modal

const modal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Skills Array

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];

const skillsList = document.getElementById("skillsList");

skills.forEach(function (skill) {

    const li = document.createElement("li");

    li.textContent = skill;

    skillsList.appendChild(li);

});

// Featured Content

const resources = document.getElementById("resources");
const personalProjects = document.getElementById("personalProjects");

const projectCount = 3;

if (projectCount < 3) {

    resources.style.display = "block";
    personalProjects.style.display = "block";

} else {

    resources.style.display = "none";
    personalProjects.style.display = "block";

}

// Dark Mode with localStorage

const darkMode = document.getElementById("darkMode");

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");

    darkMode.checked = true;

}

darkMode.addEventListener("change", function () {

    if (this.checked) {

        document.body.classList.add("dark-mode");

        localStorage.setItem("darkMode", "enabled");

    } else {

        document.body.classList.remove("dark-mode");

        localStorage.setItem("darkMode", "disabled");

    }

});

// Contact Form

const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + ", your message has been sent!");

});
// Project Objects

const project1 = {
    title: "Gaming Backlog Tracker",
    summary: "A web application designed to help users organize and track their video game collections.",
    image: "https://via.placeholder.com/200",
    repository: "https://github.com/Heretic1599"
};


const project2 = {
    title: "Bill Splitter Application",
    summary: "A JavaScript application that calculates tips, totals, and splits bills between users.",
    image: "https://via.placeholder.com/200",
    repository: "https://heretic1599.github.io/Tyler_Salvador%20Bill%20Splitter/BillSplitter.html"
};


const project3 = {
    title: "Portfolio Website",
    summary: "A personal portfolio website created using HTML, CSS, and JavaScript.",
    image: "https://via.placeholder.com/200",
    repository: "https://github.com/Heretic1599"
};


// Array containing project objects

const projectArray = [
    project1,
    project2,
    project3
];


// Session Storage

let storedProjects = sessionStorage.getItem("projects");


if (storedProjects === null) {

    sessionStorage.setItem(
        "projects",
        JSON.stringify(projectArray)
    );

    storedProjects = JSON.stringify(projectArray);

}


// Retrieve and parse data

const projects = JSON.parse(storedProjects);



// Dynamically display projects

const projectSection = document.getElementById("projects");


projects.forEach(function(project) {


    const projectDiv = document.createElement("div");


    projectDiv.innerHTML = `

        <h3>${project.title}</h3>

        <img src="${project.image}" 
             alt="${project.title}">

        <p>${project.summary}</p>

        <a href="${project.repository}" target="_blank">
            View Repository
        </a>

    `;


    projectSection.appendChild(projectDiv);


});
