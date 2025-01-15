//const words = ["banana", "apple", "grape", "mango", "tomato", "spinach", "eggplant", "pumpkin", "hoodie", "shirt", "jacket", "shoes", "endrit", "ben", "ziyad", "minerals"];

const group1 = ["fruits", "banana", "apple", "grape", "mango"]
const group2 = ["vegetables", "tomato", "spinach", "eggplant", "pumpkin"]
const group3 = ["clothing", "hoodie", "shirt", "jacket", "shoes"]
const group4 = ["goats", "endrit", "ben", "ziyad", "minerals"]

const words = [];
for (let j = 1; j<5; j++){
	words.push(group1[j]);
}
for (let j = 1; j<5; j++){
	words.push(group2[j]);
}
for (let j = 1; j<5; j++){
	words.push(group3[j]);
}
for (let j = 1; j<5; j++){
	words.push(group4[j]);
}

//shuffle words
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

shuffle(words);

for (let i = 0; i<16; i++){
	document.body.innerHTML = document.body.innerHTML.replace("word" + (i+1), words[i]);
}

function changeColor(n) {
  var thisLabel = document.getElementById(n);
  var currentColor = thisLabel.style.backgroundColor; 
  if (!currentColor) {
    currentColor = "lightblue";
  }
  if (currentColor === "lightblue") {
    thisLabel.style.backgroundColor = "white";
  } else if (currentColor === "white"){
    thisLabel.style.backgroundColor = "lightblue"; 
  }
  console.log(thisLabel.style.backgroundColor);
}

/*function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    if (set1.size !== set2.size) return false;
    for (let value of set1) {
        if (!set2.has(value)) return false;
    }
    return true;
}*/

function submit(){
	var display = document.getElementById("message");
	display.textContent = "";
	var selected = [];
	var selectedNums = [];
	for (let p = 1; p<17; p++){
		var thisLabel = document.getElementById("" + p);
		if (thisLabel.style.backgroundColor == "white"){
			selected.push(thisLabel.textContent);
			selectedNums.push("" + p);
			console.log(thisLabel.textContent);
		}
	}
	console.log(selected.length);
	if (selected.length !== 4){
		//display.textContent = "";
		display.textContent = "You must select no greater or fewer than four words";
		return;
	}
	else{
		//console.log(selected);
		if(group1.slice(1).sort().join(",") == selected.sort().join(",")){
			display.textContent = "found " + group1[0];
			for (let s = 0; s<4; s++){
				console.log(selectedNums[s]);
				document.getElementById(selectedNums[s]).style.backgroundColor = "green";
			}
			return;
		}
		else if(group2.slice(1).sort().join(",") == selected.sort().join(",")){
			display.textContent = "found " + group2[0];
			for (let s = 0; s<4; s++){
				console.log(selectedNums[s]);
				document.getElementById(selectedNums[s]).style.backgroundColor = "yellow";
			}
			return;
		}
		else if(group3.slice(1).sort().join(",") == selected.sort().join(",")){
			display.textContent = "found " + group3[0];
			for (let s = 0; s<4; s++){
				console.log(selectedNums[s]);
				document.getElementById(selectedNums[s]).style.backgroundColor = "blue";
			}
			return;
		}
		else if(group4.slice(1).sort().join(",") == selected.sort().join(",")){
			display.textContent = "found " + group4[0];
			for (let s = 0; s<4; s++){
				console.log(selectedNums[s]);
				document.getElementById(selectedNums[s]).style.backgroundColor = "purple";
			}
			return;
		}
		else{
			display.textContent = "fail";
			return;
		}
	}
}

for (let k = 1; k<17; k++){
	document.getElementById("" + k).addEventListener("click", function () { changeColor("" + k); });
}

document.getElementById("submitButton").addEventListener("click", function() { submit(); });