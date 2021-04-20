const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num * 100) / 100;
}


function FtoCandK() {

    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * 5 / 9;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);

}



















function main() {
    celciusInput.addEventListener('input', cToFToK);
    fahrenheitInput.addEventListener('input', FtoCandK);
    kelvinInput.addEventListener('input', kTofToc);
}

main();