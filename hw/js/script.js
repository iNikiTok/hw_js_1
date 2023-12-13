let firstName = prompt("Enter your first name: ");
let surName = prompt("Enter your last name: ");

let birthday = +prompt("Enter your date of birth (day): ");
let birthMonth = +prompt("Enter your month of birth: ");
let birthYear = +prompt("Enter your year of birth: ");
let zodiakSign;
let leapYear = " ";

if (
  isNaN(birthday) ||
  isNaN(birthMonth) ||
  isNaN(birthYear) ||
  !(1 <= Number(birthday) && Number(birthday) <= 31) ||
  !(1 <= Number(birthMonth) && Number(birthMonth) <= 12)
) {
  console.error(
    "Invalid input! Day should be between 1 and 31, and month should be between 1 and 12."
  );
} else {
  if (
    (birthMonth === 1 && birthday >= 20 && birthday <= 31) ||
    (birthMonth === 2 && birthday >= 1 && birthday <= 18)
  ) {
    zodiakSign = "Aquarius";
  } else if (
    (birthMonth === 2 && birthday >= 19 && birthday <= 31) ||
    (birthMonth === 3 && birthday >= 1 && birthday <= 20)
  ) {
    zodiakSign = "Pisces";
  } else if (
    (birthMonth === 3 && birthday >= 21 && birthday <= 31) ||
    (birthMonth === 4 && birthday >= 1 && birthday <= 19)
  ) {
    zodiakSign = "Aries";
  } else if (
    (birthMonth === 4 && birthday >= 20 && birthday <= 31) ||
    (birthMonth === 5 && birthday >= 1 && birthday <= 19)
  ) {
    zodiakSign = "Taurus";
  } else if (
    (birthMonth === 5 && birthday >= 20 && birthday <= 31) ||
    (birthMonth === 6 && birthday >= 1 && birthday <= 20)
  ) {
    zodiakSign = "Gemini";
  } else if (
    (birthMonth === 6 && birthday >= 21 && birthday <= 31) ||
    (birthMonth === 7 && birthday >= 1 && birthday <= 22)
  ) {
    zodiakSign = "Cancer";
  } else if (
    (birthMonth === 7 && birthday >= 23 && birthday <= 31) ||
    (birthMonth === 8 && birthday >= 1 && birthday <= 22)
  ) {
    zodiakSign = "Leo";
  } else if (
    (birthMonth === 8 && birthday >= 23 && birthday <= 31) ||
    (birthMonth === 9 && birthday >= 1 && birthday <= 22)
  ) {
    zodiakSign = "Virgo";
  } else if (
    (birthMonth === 9 && birthday >= 23 && birthday <= 31) ||
    (birthMonth === 10 && birthday >= 1 && birthday <= 22)
  ) {
    zodiakSign = "Libra";
  } else if (
    (birthMonth === 10 && birthday >= 23 && birthday <= 31) ||
    (birthMonth === 11 && birthday >= 1 && birthday <= 21)
  ) {
    zodiakSign = "Scorpio";
  } else if (
    (birthMonth === 11 && birthday >= 22 && birthday <= 31) ||
    (birthMonth === 12 && birthday >= 1 && birthday <= 21)
  ) {
    zodiakSign = "Sagittarius";
  } else if (
    (birthMonth === 12 && birthday >= 22 && birthday <= 31) ||
    (birthMonth === 1 && birthday >= 1 && birthday <= 19)
  ) {
    zodiakSign = "Capricorn";
  } else {
    console.error("Invalid birth date");
  }

  if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
    leapYear = "Leap year ,";
  }
  console.log(
    `${firstName} ${surName}, ${
      2022 - birthYear
    } years, ${leapYear} ${zodiakSign}`
  );

  document.write(
    `${firstName} ${surName}, ${
      2022 - birthYear
    } years, ${leapYear} ${zodiakSign}`
  );
}
