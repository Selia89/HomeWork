'use strict';
let name = prompt("Ваше имя:", "Александр");
while (name === "" || isNaN(name) === false){
	name = prompt("Нужно ввести имя (буквами):", "");
}

let surname = prompt("Ваша фамилия:", "Селюжицкий");
while (surname === "" || isNaN(surname) === false){
	surname = prompt("Нужно ввести Вашу фамилию (буквами):", "");
}

let patronymic = prompt("Ваше отчество:", "Сергеевич");
while (patronymic === "" || isNaN(patronymic) === false){
	patronymic = prompt("Нужно ввести Ваше отчество (буквами):", "");
}

let age = parseInt(prompt("Сколько Вам лет?", "28"));
while (age === "" || isNaN(age) || age <= 0){
	age = parseInt(prompt("Нужно ввести Ваш возраст в годах (используйте цифры):", ""));
}

let gender = confirm("Ваш пол - мужской?");

console.log(`ваше ФИО: ${surname} ${name} ${patronymic}\nваш возраст в годах: ${age}\nваш возраст в днях: ${age * 365}\nчерез 5 лет вам будет: ${age + 5}\nваш пол: ${gender === true ? gender = "мужской" : gender = "женский"}\nвы на пенсии: ${age >= 62 ? age = "да" : age = "нет"}`);