'use strict';
var name = prompt("Ваше имя:", "Александр");
while (name === "" || isNaN(name) === false){
	name = prompt("Нужно ввести имя (буквами):", "");
}

var surname = prompt("Ваша фамилия:", "Селюжицкий");
while (surname === "" || isNaN(surname) === false){
	surname = prompt("Нужно ввести Вашу фамилию (буквами):", "");
}

var patronymic = prompt("Ваше отчество:", "Сергеевич");
while (patronymic === "" || isNaN(patronymic) === false){
	patronymic = prompt("Нужно ввести Ваше отчество (буквами):", "");
}

var age = parseInt(prompt("Сколько Вам лет?", "28"));
while (age === "" || isNaN(age) || age <= 0){
	age = parseInt(prompt("Нужно ввести Ваш возраст в годах (используйте цифры):", ""));
}

var gender = confirm("Ваш пол - мужской?");

var ageDay = age * 365;
var ageBeforeFive = age + 5;

if(gender === true){
	var genderHuman = "мужской";
} else {
	genderHuman = "женский"
}

if(age >= 62){
	var pension = "да";
} else {
	pension = "нет";
}

console.log("ваше ФИО: " + surname + " " + name + " " + patronymic + "\n" 
			+ "ваш возраст в годах: " + age + "\n"
			+ "ваш возраст в днях: " + ageDay + "\n"
			+ "через 5 лет вам будет: " + ageBeforeFive + "\n"
			+ "ваш пол: " + genderHuman + "\n"
			+ "вы на пенсии: " + pension);
