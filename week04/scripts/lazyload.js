const CurrentYear = document.getElementById('CurrentYear');

const LastModified = document.getElementById('LastModified');

CurrentYear.textContent = new Date().getFullYear();

LastModified.textContent = `Last Modification: ${document.lastModified}`;
