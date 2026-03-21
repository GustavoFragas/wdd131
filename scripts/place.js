document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;


const temperature = 10;
const windSpeed = 5;

const calculateWindChill = (t, s) => (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);

const windChillElement = document.getElementById('windChill');
if (windChillElement) {
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °C";
    } else {
        windChillElement.textContent = "N/A";
    }
}
