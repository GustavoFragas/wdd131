const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33 , 64, 29, 37, 44];

const currentDate = new Date();
const currentDay = currentDate.getDay();

switch (currentDay) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day of the week");
}
// const diasDaSemana = [
    //   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    // ];
    // const currentDate = new Date();
    // const nomeDoDia = diasDaSemana[currentDate.getDay()];
    // console.log("Today is " + nomeDoDia);
    

// for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//         console.log("Student " + (i + 1) + " has a score of " + studentReport[i]);
//     }
//     else {
//         console.log("Student " + (i + 1) + " has a score of " + studentReport[i] + " which is above the limit.");
//     }
// }


// let Beginning = 0;
// while (Beginning < studentReport.length) {
//     if (studentReport[Beginning] < LIMIT) {
//         console.log("Student " + (Beginning + 1) + " has a score of " + studentReport[Beginning]);
//     }
//     else {
//         console.log("Student " + (Beginning + 1) + " has a score of " + studentReport[Beginning] + " which is above the limit.");
//     }
//     Beginning++;
// }


// studentReport.forEach((score, index) => {
//     if (score < LIMIT) {
//         console.log("Student " + (index + 1) + " has a score of " + score);
//     }
//     else {
//         console.log("Student " + (index + 1) + " has a score of " + score + " which is above the limit.");
//     }
// });


// for (let score in studentReport) {
//     if (studentReport[score] < LIMIT) {
//         console.log("Student " + (parseInt(score) + 1) + " has a score of " + studentReport[score]);
//     }
//     else {
//         console.log("Student " + (parseInt(score) + 1) + " has a score of " + studentReport[score] + " which is above the limit.");
//     }
// }
