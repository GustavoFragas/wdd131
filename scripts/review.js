document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const reviewNumElement = document.getElementById("reviewNum");

let reviewCount = Number(window.localStorage.getItem("reviewCounter-wdd131")) || 0;

reviewCount++;

window.localStorage.setItem("reviewCounter-wdd131", reviewCount);

reviewNumElement.textContent = reviewCount;