{
    const formElement = document.querySelector(".js-form");
    const amountFirstElement = document.querySelector(".js-amountFirst");
    const amountSecondElement = document.querySelector(".js-amountSecond");
    const currencyFirstElement = document.querySelector(".js-currencyFirst");
    const currencySecondElement = document.querySelector(".js-currencySecond");
    const textResultElement = document.querySelector(".js-textResult");
    const textRateElement = document.querySelector(".js-textRate");
    const bodyElement = document.querySelector(".js-body");
    const themeButton = document.querySelector(".js-themeButton");
    const circleMove = document.querySelector(".js-circleMove");

    const getRateFromEUR = (currencySecond) => {
        const ratePLN = 4.28;
        const rateEUR = 1;
        const rateUSD = 1.08;
        const rateGBP = 0.85;
        const rateCHF = 0.97;
        const rateAUD = 1.61;

        switch (currencySecond) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "GBP":
                return rateGBP;

            case "CHF":
                return rateCHF;

            case "AUD":
                return rateAUD;
        }
    }

    const getRateFromPLN = (currencySecond) => {
        const rateEUR = 0.23;
        const ratePLN = 1;
        const rateUSD = 0.25;
        const rateGBP = 0.20;
        const rateCHF = 0.23;
        const rateAUD = 0.38;

        switch (currencySecond) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "GBP":
                return rateGBP;

            case "CHF":
                return rateCHF;

            case "AUD":
                return rateAUD;
        }
    }

    const getRateFromUSD = (currencySecond) => {
        const ratePLN = 3.96;
        const rateEUR = 0.92;
        const rateUSD = 1;
        const rateGBP = 0.78;
        const rateCHF = 0.90;
        const rateAUD = 1.49;

        switch (currencySecond) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "GBP":
                return rateGBP;

            case "CHF":
                return rateCHF;

            case "AUD":
                return rateAUD;
        }
    }

    const getRateFromGBP = (currencySecond) => {
        const ratePLN = 5.05;
        const rateEUR = 1.18;
        const rateUSD = 1.28;
        const rateGBP = 1;
        const rateCHF = 1.15;
        const rateAUD = 1.90;

        switch (currencySecond) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "GBP":
                return rateGBP;

            case "CHF":
                return rateCHF;

            case "AUD":
                return rateAUD;
        }
    }

    const getRateFromCHF = (currencySecond) => {
        const ratePLN = 4.40;
        const rateEUR = 1.03;
        const rateUSD = 1.11;
        const rateGBP = 0.87;
        const rateCHF = 1;
        const rateAUD = 1.65;

        switch (currencySecond) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "GBP":
                return rateGBP;

            case "CHF":
                return rateCHF;

            case "AUD":
                return rateAUD;
        }
    }

    const getRateFromAUD = (currencySecond) => {
        const ratePLN = 2.66;
        const rateEUR = 0.62;
        const rateUSD = 0.67;
        const rateGBP = 0.53;
        const rateCHF = 0.61;
        const rateAUD = 1;

        switch (currencySecond) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "GBP":
                return rateGBP;

            case "CHF":
                return rateCHF;

            case "AUD":
                return rateAUD;
        }
    }

    const getRate = (currencyFirst, currencySecond) => {
        switch (currencyFirst) {
            case "PLN":
                return getRateFromPLN(currencySecond);

            case "EUR":
                return getRateFromEUR(currencySecond);

            case "USD":
                return getRateFromUSD(currencySecond);

            case "GBP":
                return getRateFromGBP(currencySecond);

            case "CHF":
                return getRateFromCHF(currencySecond);

            case "AUD":
                return getRateFromAUD(currencySecond);
        }
    }

    const setTextResult = (amountFrom, currencyFirst, result, currencySecond) => {
        textResultElement.innerHTML = `
            <span>
                ${amountFrom.toFixed(2)} ${currencyFirst} to w przeliczeniu <br>
                <span class="form__paragraph--fontSize">
                    <strong>${result.toFixed(2)} ${currencySecond}</strong>
                </span>
            </span>
        `;
    }

    const setTextRate = (currencyFirst, currencySecond, rate) => {
        textRateElement.innerHTML = `
            <span>Obecny kurs waluty<br><strong>1 ${currencyFirst}
                </strong> wynosi <strong>${rate} ${currencySecond}</strong>
            </span>`;
    }

    const calculate = () => {
        const currencyFirst = currencyFirstElement.value;
        const currencySecond = currencySecondElement.value;

        amountFirstElement.addEventListener("input", () => {
            const rate = getRate(currencyFirst, currencySecond);
            const amountFrom = +amountFirstElement.value;
            const result = amountFrom * rate;
            amountSecondElement.value = result.toFixed(2);
            setTextResult(amountFrom, currencyFirst, result, currencySecond);
            setTextRate(currencyFirst, currencySecond, rate);
        });

        amountSecondElement.addEventListener("input", () => {
            const amountTo = +amountSecondElement.value;
            const amountFrom = +amountFirstElement.value;
            const rate = getRate(currencyFirst, currencySecond);
            const result = amountTo / rate;
            amountFirstElement.value = result.toFixed(2);
            setTextResult(amountFrom, currencyFirst, amountTo, currencySecond);
            setTextRate(currencyFirst, currencySecond, rate);
        });

        currencyFirstElement.addEventListener("change", () => {
            const amountTo = +amountSecondElement.value;
            const rate = getRate(currencyFirst, currencySecond);
            const result = amountTo / rate;
            amountFirstElement.value = result.toFixed(2);
            setTextResult(result, currencyFirst, amountTo, currencySecond);
            setTextRate(currencyFirst, currencySecond, rate);
        });

        currencySecondElement.addEventListener("change", () => {
            const amountTo = +amountSecondElement.value;
            const rate = getRate(currencyFirst, currencySecond);
            const result = amountTo / rate;
            amountFirstElement.value = result.toFixed(2);
            setTextResult(result, currencyFirst, amountTo, currencySecond);
            setTextRate(currencyFirst, currencySecond, rate);
        });
    }

    formElement.addEventListener("input", () => {
        calculate();
    });

    themeButton.addEventListener("click", () => {
        bodyElement.classList.toggle("dark");
        circleMove.classList.toggle("header__circle--circleMove");
        formElement.classList.toggle("form--backgroundChange");
    })
}