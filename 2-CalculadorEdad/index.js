


const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];
const dateToday = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;



function dateCalculation() {
    const dateBirthday = document.querySelector('#dateBirthday').value;
    const dateTodayObj = new Date(dateToday);
    const dateBirthdayObj = new Date(dateBirthday);

    const ageInMilliseconds = dateTodayObj - dateBirthdayObj;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); 

    const age = Math.floor(ageInYears);
    document.getElementById('result').textContent = `${age}`;

}