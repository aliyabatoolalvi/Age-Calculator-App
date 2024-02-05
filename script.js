// document.getElementById("calculateAge").addEventListener("click", function () {
//     const birthDay = parseInt(document.getElementById("birthDay").value);
//     const birthMonth = parseInt(document.getElementById("birthMonth").value);
//     const birthYear = parseInt(document.getElementById("birthYear").value);
//     if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
//         document.getElementById("result").textContent = "Please enter valid date values.";
//         return;
//     }
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
//     const currentDay = currentDate.getDate();

//     let years = currentYear - birthYear;
//     let months = currentMonth - birthMonth;
//     let days = currentDay - birthDay;

//     // if (days < 0) {
//     //     months--;
//     //     days += new Date(currentYear, currentMonth - 1, 0).getDate();
//     // }

//     // if (months < 0) {
//     //     years--;
//     //     months += 12;
//     // }
    
//     document.getElementById("result").textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
// });

function calculateAge() {
    var birthDay = document.getElementById('birthDay').value;
    var birthMonth = document.getElementById('birthMonth').value;
    var birthYear = document.getElementById('year').value;

    var today = new Date();
    var age = today.getFullYear() - birthYear;
    return age;
}   
