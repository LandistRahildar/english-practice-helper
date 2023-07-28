{
    const randomNumbersButton = document.getElementById("randomNumbersButton");
    const randomNumbersParagraph = document.getElementById("randomNumbersParagraph");

    const generateRandomNumbers = function () {

        const firstRandomNumber = Math.floor(Math.random() * 1000 + 1);
        const secondRandomNumber = Math.floor(Math.random() * 1000 + 1);
        const thirdRandomNumber = Math.floor(Math.random() * 1000 + 1);

        randomNumbersParagraph.innerHTML = `
        ${firstRandomNumber}<br>
        ${secondRandomNumber}<br>
        ${thirdRandomNumber}<br>
        `;
    }

    randomNumbersButton.addEventListener("click", generateRandomNumbers);
}