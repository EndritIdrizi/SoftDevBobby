const words = ["banana", "apple", "grape", "mango", "tomato", "spinach", "eggplant", "pumpkin", "hoodie", "shirt", "jacket", "shoes", "endrit", "ben", "ziayd", "minerals"];

const group1 = ["fruits", "banana", "apple", "grape", "mango"]
const group2 = ["vegetables", "tomato", "spinach", "eggplant", "pumpkin"]
const group3 = ["clothing", "hoodie", "shirt", "jacket", "shoes"]
const group4 = ["goats", "endrit", "ben", "ziyad", "minerals"]

for (let i = 0; i<16; i++){
  document.body.innerHTML.replace("word" + (i+1), words[i]);
}
