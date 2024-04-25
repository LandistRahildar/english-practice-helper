{
    const randomDigitsButton = document.getElementById("randomDigitsButton");
    const randomDigitsParagraph = document.getElementById("randomDigitsParagraph");

    const displayRandomDigit = function () {

        const generateRandomDigit = function (min = 1, max = 9) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        //additional '0' before every digit here and to not generate the same numbers

        randomDigitsParagraph.innerHTML = `
        ${generateRandomDigit()}<br>
        ${generateRandomDigit()}<br>
        ${generateRandomDigit()}<br>
        ${generateRandomDigit()}<br>
        ${generateRandomDigit()}<br>
        `;

        if (randomDigitsParagraph.style.display === "none") {
            randomDigitsButton.innerHTML = "Random digits";
        } else {
            randomDigitsButton.innerHTML = "Another digits";
        }
    }

    randomDigitsButton.addEventListener("click", displayRandomDigit);
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