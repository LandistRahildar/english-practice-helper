{
    const randomNumbersButton = document.getElementById("randomNumbersButton");
    const randomNumbersParagraph = document.getElementById("randomNumbersParagraph");

    const displayRandomNumbers = function () {

        const generateRandomNumber = function (min = 111, max = 999) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        randomNumbersParagraph.innerHTML = `
        ${generateRandomNumber()}<br>
        ${generateRandomNumber()}<br>
        ${generateRandomNumber()}<br>
        ${generateRandomNumber()}<br>
        ${generateRandomNumber()}<br>
        `;
    }

    randomNumbersButton.addEventListener("click", displayRandomNumbers);
}