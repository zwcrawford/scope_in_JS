
// I worked out of 

// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x <= cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjunction Function
const conjunction = function (firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`;
  console.log(conjoinedWord);
}
conjunction("Master", "Card");
conjunction("Easter", "Egg");

// Mod Squad

const ModSquad = {
  "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
  "series": {
      "start": "1968",
      "end": "1973"
  }
};

let infoClass = document.querySelector(".show-info");
let HTMLRepresentation = document.createElement("h3");

infoClass.appendChild(HTMLRepresentation);
HTMLRepresentation.innerHTML = "The Mod Squad";

function mob(member) {
let squad = document.createElement("p");
HTMLRepresentation.appendChild(squad);
squad.innerHTML = member;
};

ModSquad.members.forEach(member => {
  mob(member);
});

// Simon Says

// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]];
let invalidLocation = true;

for (let k = 0; k < locations.length; k++) {
  let currentLocation = locations[k];
    if (currentLocation[0] > 2) {
      invalidLocation = true
    }
    if (invalidLocation) {
      console.log("This location is invalid")
    }
    if (k === 5) {
      console.log(`There were ${k} invalid locations`)
    }
}
/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
