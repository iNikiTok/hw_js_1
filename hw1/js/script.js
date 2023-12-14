let tellThreeWords = confirm("Tell me three most important words 💚");
let i = 0;
let threeWords = {
  firstWord: ["", ""],
  secondWord: ["", ""],
  thirdWord: ["", ""],
};

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function NaNWord(word) {
  for (let char of word) {
    if (!isNaN(parseInt(char))) {
      return false;
    }
  }
  return true;
}

function objectSelector(i, objectWord) {
  if (i === 0) {
    threeWords.firstWord[0] = objectWord;
  } else if (i === 1) {
    threeWords.secondWord[0] = objectWord;
  } else if (i === 2) {
    threeWords.thirdWord[0] = objectWord;
  }
}

function objectSelectorCase(i, wordFormation) {
  if (i === 0) {
    threeWords.firstWord[1] = wordFormation;
  } else if (i === 1) {
    threeWords.secondWord[1] = wordFormation;
  } else if (i === 2) {
    threeWords.thirdWord[1] = wordFormation;
  }
  for (let key in threeWords) {
    if (threeWords[key][1] === "uppercase") {
      threeWords[key][0] = threeWords[key][0].toUpperCase();
    } else if (threeWords[key][1] === "lowercase") {
      threeWords[key][0] = threeWords[key][0].toLowerCase();
    } else if (threeWords[key][1] === "capitalize") {
      threeWords[key][0] = capitalizeFirstLetter(threeWords[key][0]);
    }
  }
}

function wordCheck() {
  let validWord = false;
  do {
    let word = prompt("Enter word");
    if (word === null || word === "" || !NaNWord(word)) {
      validWord = false;
    } else {
      validWord = true;
      return word;
    }
  } while (!validWord);
}

if (tellThreeWords) {
  while (i != 3) {
    objectSelector(i, wordCheck());
    let j = false;
    while (!j) {
      let wordFormation = prompt(
        "Enter word register: (uppercase, lowercase, capitalize)"
      )?.toLowerCase();
      if (wordFormation !== null && wordFormation !== "") {
        if (
          wordFormation === "uppercase" ||
          wordFormation === "lowercase" ||
          wordFormation === "capitalize"
        ) {
          objectSelectorCase(i, wordFormation);
          j = true;
        }
      }
    }

    i++;
  }

  console.log(
    `${threeWords.firstWord[0]} ${threeWords.secondWord[0]} ${threeWords.thirdWord[0]}!`
  );
} else {
  console.error(tellThreeWords);
}
