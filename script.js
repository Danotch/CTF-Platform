document.addEventListener("DOMContentLoaded", function () {
    const flagForm = document.getElementById("flagForm");
    const flagInput = document.getElementById("flagInput");
    const submitButton = document.getElementById("submitButton");
    const result = document.getElementById("result");

    submitButton.addEventListener("click", function () {
        const enteredFlag = flagInput.value;
        const correctFlag = "CTF{WebFlag1234}";

        if (enteredFlag === correctFlag) {
            result.innerHTML = "Congratulations! You've found the correct flag.";
            result.style.color = "green";
        } else {
            result.innerHTML = "Oops, the flag is incorrect. Keep searching!";
            result.style.color = "red";
        }
    });
});
