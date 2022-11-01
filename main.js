const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const buttonTry = document.querySelector("#btnTry");
const buttonReset = document.querySelector("#btnReset");

let randomNumber = Math.floor(11 * Math.random());
let attempts = 1;

buttonTry.addEventListener('click', handleTryClick);
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyDownEnter)

function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        screenTwo.querySelector("h2").innerText = `Acetou em ${attempts} tentativa(s)`
    }

    inputNumber.value = ""
    attempts++
};

function handleResetClick() {
    toggleScreen();
    attempts = 1;
    randomNumber = Math.floor(11 * Math.random());
};

function toggleScreen() {
    screenOne.classList.toggle("hide");
    screenTwo.classList.toggle("hide");
}

function handleKeyDownEnter(e) {
    if(e.key == 'Enter' && screenOne.classList.contains('hide')) {
        handleResetClick();
    }
}