function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let userInput = prompt("Введіть довільний рядок:");
let userId = parseInt(prompt("Введіть ID (ціле число):"));

switch (userId) {
  case 1:
    let index1 = prompt(
      "Введіть індекс символу для отримання Unicode значення:"
    );
    let unicodeValue = userInput.charCodeAt(index1);
    console.log(`Unicode значення символу: ${unicodeValue}`);
    break;

  case 2:
    let index2 = prompt("Введіть індекс символу, який потрібно видалити:");
    if (!isNaN(index2) && index2 >= 0 && index2 < userInput.length) {
      let stringWithoutChar =
        userInput.slice(0, index2) + userInput.slice(index2 + 1);
      console.log(`Рядок без символу: ${stringWithoutChar}`);
    } else {
      console.log("Неправильний індекс. Будь ласка, введіть коректний індекс.");
    }
    break;

  case 3:
    let index3 = prompt("Введіть індекс символу, який потрібно замінити:");
    let smileys = ["😊", "😁", "😄", "😃", "😆", "😅", "😂", "🤣", "😀", "😇"];
    let randomSmiley = smileys[getRandomIntInclusive(0, smileys.length - 1)];
    let stringWithRandomSmiley =
      userInput.slice(0, index3) + randomSmiley + userInput.slice(index3 + 1);
    console.log(`Рядок зі зміненим символом: ${stringWithRandomSmiley}`);
    break;

  case 4:
    let letterCount = userInput.replace(/ /g, "").length;
    console.log(`Кількість літер у рядку: ${letterCount}`);
    break;

  default:
    console.log("Неправильний ID. Будь ласка, введіть коректний ID.");
}
