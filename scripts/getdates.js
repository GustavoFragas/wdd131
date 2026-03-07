const currentyear = document.querySelector("#current-year");
const lastupdated = document.querySelector("#last-updated");

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth() + 1;
const hours = date.getHours();
const minutes = date.getMinutes();

currentyear.textContent = year;
lastupdated.textContent = `Last Updated: ${month}/${day}/${year} ${hours}:${minutes}`;

