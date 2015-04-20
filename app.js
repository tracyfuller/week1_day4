console.log(document.write(document.getElementById("testing").value));

var monster = {
	name: document.write(document.getElementById("name").value),
	strength: document.write(document.getElementById("strength").value),
	dexterity: document.write(document.getElementById("dexterity").value,
	constitution: document.write(document.getElementById("constitution").value),
	wisdom: document.write(document.getElementById("wisdom").value),
	intelligence: document.write(document.getElementById("intelligence").value),
	charisma: document.write(document.getElementById("charisma").value)
};

var player = {
	name: monster.name,
	strength: monster.strength,
	dexterity: monster.dexterity,
	constitution: monster.constitution,
	wisdom: monster.wisdom,
	intelligence: monster.intelligence,
	charisma: monster.charisma,
	playerClass: document.write(document.getElementById("class").value)
};

var storageArray = [];

var nameInput = document.write(document.getElementById("name").value);
var strengthInput = document.write(document.getElementById("strength").value);
var dexterityInput = document.write(document.getElementById("dexterity").value);
var constitutionInput = document.write(document.getElementById("constitution").value);
var wisdomInput = document.write(document.getElementById("wisdom").value);
var intelligenceInput = document.write(document.getElementById("intelligence").value);
var charismaInput = document.write(document.getElementById("charisma").value);

console.log(nameInput);

if (document.write(document.getElementById("class").value) !== "") {
	//put the values in as a player
} else {
	//put the values in as a monster
}

function createMonster(name, strength, dexterity, constitution, wisdom, intelligence, charisma){

}

document.getElementById("addMonster").addEventListener('click', <functionNameGoesHere>);
