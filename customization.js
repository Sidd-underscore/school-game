var colors = JSON.parse(localStorage.getItem('colors'))
var colorsDiv = document.querySelector('.colors')
var ball = document.querySelector('.ball')
var prefferedColor = localStorage.getItem('p-color')
colors.forEach(element => colorsDiv.innerHTML += `<div class="color" onclick="changeColor('${element}')" style="background-color: ${element}"></div>`);

if (prefferedColor) {
    ball.style.background = prefferedColor
}


function changeColor(hex) {
    ball.style.background = hex
    localStorage.setItem('p-color', hex)

}