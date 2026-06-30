/*
    Author: Tyler Salvador
    Date: 6/30/2026
    Purpose: Add interactivity to the portfolio using JavaScript.
*/

// Ask the visitor for their name
let userName = prompt("Please enter your name:");

if (userName) {
    document.getElementById("welcomeMessage").textContent =
        "Welcome, " + userName + "!";
}

// -------------------------------
// Skills Array and Loop
// -------------------------------
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

const skillsList = document.getElementById("skillsList");

skills.forEach(function(skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// -------------------------------
// Featured Content Logic
// -------------------------------
const resources = document.getElementById("resources");
const personalProjects = document.getElementById("personalProjects");

// You currently have 3 projects
const projectCount = 3;

if (projectCount < 3) {
    resources.style.display = "block";
    personalProjects.style.display = "block";
} else {
    resources.style.display = "none";
    personalProjects.style.display = "block";
}

// -------------------------------
// Dark Mode Toggle
// -------------------------------
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});

// -------------------------------
// Contact Form
// -------------------------------
const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + ", your message has been sent!");

});
