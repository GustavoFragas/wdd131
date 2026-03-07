const currentyear = document.querySelector("#current-year");
const lastupdated = document.querySelector("#last-updated");

currentyear.textContent = new Date().getFullYear();
lastupdated.textContent = document.lastModified;

