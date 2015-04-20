var monster = {
	name: document.getElementById("name").value,
	strength: document.getElementById("strength").value,
	dexterity: document.getElementById("dexterity").value,
	constitution: document.getElementById("constitution").value,
	wisdom: document.getElementById("wisdom").value,
	intelligence: document.getElementById("intelligence").value,
	charisma: document.getElementById("charisma").value
};

var player = {
	name: monster.name,
	strength: monster.strength,
	dexterity: monster.dexterity,
	constitution: monster.constitution,
	wisdom: monster.wisdom,
	intelligence: monster.intelligence,
	charisma: monster.charisma,
	playerClass: document.getElementById("class").value
};

var storageArray = [];


if (document.write(document.getElementById("class").value) !== "") {
	//put the values in as a player
} else {
	//put the values in as a monster
}

function createMonster(input){
	input.name = document.getElementById("name").value,
	input.strength = document.getElementById("strength").value,
	input.dexterity = document.getElementById("dexterity").value,
	input.constitution = document.getElementById("constitution").value,
	input.wisdom = document.getElementById("wisdom").value,
	input.intelligence = document.getElementById("intelligence").value,
	input.charisma = document.getElementById("charisma").value

}

var buttonClick = document.getElementById("addMonster").addEventListener('click', <functionNameGoesHere>);

