{
    const randomHundredsNumbersButton = document.getElementById("randomHundredsNumbersButton");
    const randomHundredsNumbersParagraph = document.getElementById("randomHundredsNumbersParagraph");

    const displayRandomHundredNumber = function () {

        const generateRandomHundredNumber = function (min = 111, max = 999) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }

        randomHundredsNumbersParagraph.innerHTML = `
        ${generateRandomHundredNumber()}<br>
        ${generateRandomHundredNumber()}<br>
        ${generateRandomHundredNumber()}<br>
        ${generateRandomHundredNumber()}<br>
        ${generateRandomHundredNumber()}<br>
        `;
    }

    //idea: text in button after click can change for 'another random numbers'
    randomHundredsNumbersButton.addEventListener("click", displayRandomHundredNumber);
}

{
    //here will be code for random numbers > 1111 < 9999, because it's readen differently than years
    
    const randomThousandsNumbersButton = document.getElementById("randomThousandsNumbersButton");
    const randomThousandsNumbersParagraph = document.getElementById("randomThousandsNumbersParagraph");

    const displayRandomThousandNumber = function () {
        
        const generateRandomThousandNumber = function (min = 1111, max = 9999) {
            const difference = max - min;
            let random = Math.random();
            random = Math.floor(random * difference);
            random = random + min;
            return random;
        }
        
        randomThousandsNumbersParagraph.innerHTML = `
        ${generateRandomThousandNumber()}<br>
        ${generateRandomThousandNumber()}<br>
        ${generateRandomThousandNumber()}<br>
        ${generateRandomThousandNumber()}<br>
        ${generateRandomThousandNumber()}<br>
        `;
    }
  
    //idea: text in button after click can change for 'another random numbers'
    randomThousandsNumbersButton.addEventListener("click", displayRandomThousandNumber);

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

        //here should be one line instead of three; how to make better version code of this stupid months?
        randomDatesParagraph.innerHTML = `
        ${randomDay()} ${months[firstRandomMonth]} ${generateRandomYear()}<br>
        ${randomDay()} ${months[secondRandomMonth]} ${generateRandomYear()}<br>
        ${randomDay()} ${months[thirdRandomMonth]} ${generateRandomYear()}<br>
        `;
    }

    //idea: text in button after click can change for 'another random dates'
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
            hintButton.innerHTML = "Hide months hint";
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