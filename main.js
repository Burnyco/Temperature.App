const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function main() {
    celciusInput.addEventListener('input', cToFToK);
    fahrenheitInput.addEventListener('input', FtoCandK);
    kelvinInput.addEventListener('input', kTofToc);
}

main();