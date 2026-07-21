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
