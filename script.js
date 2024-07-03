//buttons for closing lists of numbers

{
    const randomTeensButton = document.getElementById("randomTeensButton");
    const randomTeensParagraph = document.getElementById("randomTeensParagraph");
    const randomDigitsCompleteButton = document.getElementById("randomDigitsCompleteButton");

    const displayRandomTeen = function () {

        const generateRandomTeen = function (min = 11, max = 19) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        //function to not generate the same numbers

        randomTeensParagraph.innerHTML = `
        ${generateRandomTeen()}<br>
        ${generateRandomTeen()}<br>
        ${generateRandomTeen()}<br>
        ${generateRandomTeen()}<br>
        ${generateRandomTeen()}<br>
        `;

        if (randomTeensParagraph.style.display === "none") {
            randomTeensButton.innerHTML = "Random teens";
        } else {
            randomTeensButton.innerHTML = "Another teens";
        }
    }

    const displayCompleteButton = function () {
        randomDigitsCompleteButton.style.display = "block";
    }

    randomTeensButton.addEventListener("click", displayRandomTeen, displayCompleteButton);
}

{
    const randomTensButton = document.getElementById("randomTensButton");
    const randomTensParagraph = document.getElementById("randomTensParagraph");

    const displayRandomTen = function () {

        const generateRandomTen = function (min = 20, max = 99) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random
        }

        randomTensParagraph.innerHTML = `
        ${generateRandomTen()}<br>
        ${generateRandomTen()}<br>
        ${generateRandomTen()}<br>
        ${generateRandomTen()}<br>
        ${generateRandomTen()}<br>
        `;

        if (randomTensParagraph.style.display === "none") {
            randomTensButton.innerHTML = "Random tens";
        } else {
            randomTensButton.innerHTML = "Another tens";
        }
    }

    randomTensButton.addEventListener("click", displayRandomTen);
}

{
    const randomHundredsButton = document.getElementById("randomHundredsButton");
    const randomHundredsParagraph = document.getElementById("randomHundredsParagraph");

    const displayRandomHundred = function () {

        const generateRandomHundred = function (min = 111, max = 999) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        randomHundredsParagraph.innerHTML = `
        ${generateRandomHundred()}<br>
        ${generateRandomHundred()}<br>
        ${generateRandomHundred()}<br>
        ${generateRandomHundred()}<br>
        ${generateRandomHundred()}<br>
        `;

        if (randomHundredsParagraph.style.display === "none") {
            randomHundredsButton.innerHTML = "Random hundreds";
        } else {
            randomHundredsButton.innerHTML = "Another hundreds";
        }
    }

    randomHundredsButton.addEventListener("click", displayRandomHundred);
}

{
    const randomThousandsButton = document.getElementById("randomThousandsButton");
    const randomThousandsParagraph = document.getElementById("randomThousandsParagraph");

    const displayRandomThousand = function () {

        const generateRandomThousand = function (min = 1111, max = 9999) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        randomThousandsParagraph.innerHTML = `
        ${generateRandomThousand()}<br>
        ${generateRandomThousand()}<br>
        ${generateRandomThousand()}<br>
        ${generateRandomThousand()}<br>
        ${generateRandomThousand()}<br>
        `;

        if (randomThousandsParagraph.style.display === "none") {
            randomThousandsButton.innerHTML = "Random thousands";
        } else {
            randomThousandsButton.innerHTML = "Another thousands";
        }
    }

    randomThousandsButton.addEventListener("click", displayRandomThousand);
}

{
    const randomTimesButton = document.getElementById("randomTimesButton");
    const randomTimesParagraph = document.getElementById("randomTimesParagraph");

    const randomTime = function () {

        const randomHour = function (min = 0, max = 12) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        const randomMinute = function (min = 1, max = 60) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        const timeType = ['AM', 'PM'];

        const firstRandomTimeType = Math.floor(Math.random() * timeType.length);
        const secondRandomTimeType = Math.floor(Math.random() * timeType.length);
        const thirdRandomTimeType = Math.floor(Math.random() * timeType.length);
        const fourthRandomTimeType = Math.floor(Math.random() * timeType.length);
        const fifthRandomTimeType = Math.floor(Math.random() * timeType.length);

        //additional '0' before single hour or minute digit here

        randomTimesParagraph.innerHTML = `
        ${randomHour()}:${randomMinute()} ${timeType[firstRandomTimeType]}<br>
        ${randomHour()}:${randomMinute()} ${timeType[secondRandomTimeType]}<br>
        ${randomHour()}:${randomMinute()} ${timeType[thirdRandomTimeType]}<br>
        ${randomHour()}:${randomMinute()} ${timeType[fourthRandomTimeType]}<br>
        ${randomHour()}:${randomMinute()} ${timeType[fifthRandomTimeType]}<br>
        `;

        if (randomTimesParagraph.style.display === "none") {
            randomTimesButton.innerHTML = "Random times";
        } else {
            randomTimesButton.innerHTML = "Another times";
        }
    }

    randomTimesButton.addEventListener("click", randomTime);
}

{
    const randomDatesButton = document.getElementById("randomDatesButton");
    const randomDatesParagraph = document.getElementById("randomDatesParagraph");

    const randomDate = function () {

        const randomDay = function (min = 1, max = 31) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        const months = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

        const firstRandomMonth = Math.floor(Math.random() * months.length);
        const secondRandomMonth = Math.floor(Math.random() * months.length);
        const thirdRandomMonth = Math.floor(Math.random() * months.length);
        const fourthRandomMonth = Math.floor(Math.random() * months.length);
        const fifthRandomMonth = Math.floor(Math.random() * months.length);

        const generateRandomYear = function (min = 1000, max = 2022) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        //additional '0' before single day digit here
        //function to not generate non-existing dates here

        randomDatesParagraph.innerHTML = `
        ${randomDay()} ${months[firstRandomMonth]} ${generateRandomYear()}<br>
        ${randomDay()} ${months[secondRandomMonth]} ${generateRandomYear()}<br>
        ${randomDay()} ${months[thirdRandomMonth]} ${generateRandomYear()}<br>
        ${randomDay()} ${months[fourthRandomMonth]} ${generateRandomYear()}<br> 
        ${randomDay()} ${months[fifthRandomMonth]} ${generateRandomYear()}<br>
        `;

        if (randomDatesParagraph.style.display === "none") {
            randomDatesButton.innerHTML = "Random dates";
        } else {
            randomDatesButton.innerHTML = "Another dates";
        }
    }

    randomDatesButton.addEventListener("click", randomDate);
}

{
    const hintButton = document.getElementById("hintButton");
    const hintParagraph = document.getElementById("hintParagraph");

    const displayHint = function () {
        if (hintParagraph.display === "block") {
            hintParagraph.display = "none";
            hintButton.innerHTML = "Months hint";
            hintParagraph.innerHTML = ``;
        } else {
            hintParagraph.display = "block";
            hintButton.innerHTML = "Hide hint";
            hintParagraph.innerHTML = `
            I - January<br>
            II - February<br>
            III - March<br>
            IV - April<br>
            V - May<br>
            VI - June<br>
            VII - July<br>
            VIII - August<br>
            IX - September<br>
            X - October<br>
            XI - November<br>
            XII - December<br>
            `;
        }
    }

    hintButton.addEventListener("click", displayHint);
}