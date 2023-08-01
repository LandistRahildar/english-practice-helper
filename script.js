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

{
    const randomDatesButton = document.getElementById("randomDatesButton");
    const randomDatesParagraph = document.getElementById("randomDatesParagraph");

    const months = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

    const randomDate = function () {

        const randomDay = function (min = 1, max = 31) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        const firstRandomMonth = Math.floor(Math.random() * months.length);
        const secondRandomMonth = Math.floor(Math.random() * months.length);
        const thirdRandomMonth = Math.floor(Math.random() * months.length);

        // if (randomMonth == 'II') {
        //     alert("It's February, baybe! It have max 29 days, we need to do something with that code to fix it!");
        // }

        const generateRandomYear = function (min = 1000, max = 2022) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        //here should be one line instead of three; how to fix this stupid months?
        randomDatesParagraph.innerHTML = `
        ${randomDay()} ${months[firstRandomMonth]} ${generateRandomYear()}<br>
        ${randomDay()} ${months[secondRandomMonth]} ${generateRandomYear()}<br>
        ${randomDay()} ${months[thirdRandomMonth]} ${generateRandomYear()}<br>
        `;
    }

    randomDatesButton.addEventListener("click", randomDate);
}

{
    //here will be code for button 'Hint', where will be full names of the months, displyaing only when 'Random dates' button will be active
}