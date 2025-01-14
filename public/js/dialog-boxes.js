// Confirmation Dialog
const confirmationDialog = document.getElementById("confirmation-dialog");
const openConfirmationDialog = document.getElementById("open-confirmation-dialog");
const confirmYes = document.getElementById("confirm-yes");
const confirmNo = document.getElementById("confirm-no");

openConfirmationDialog.addEventListener("click", () => {
    confirmationDialog.style.display = "flex";
});

confirmYes.addEventListener("click", () => {
    alert("Action Confirmed!");
    confirmationDialog.style.display = "none";
});

confirmNo.addEventListener("click", () => {
    confirmationDialog.style.display = "none";
});

// Input Dialog
const inputDialog = document.getElementById("input-dialog");
const openInputDialog = document.getElementById("open-input-dialog");
const submitInput = document.getElementById("submit-input");
const closeInputDialog = document.getElementById("close-input-dialog");

openInputDialog.addEventListener("click", () => {
    inputDialog.style.display = "flex";
});

submitInput.addEventListener("click", () => {
    const inputValue = document.getElementById("input-field").value;
    if (inputValue) {
        alert(`You entered: ${inputValue}`);
    } else {
        alert("Please enter a value.");
    }
    inputDialog.style.display = "none";
});

closeInputDialog.addEventListener("click", () => {
    inputDialog.style.display = "none";
});

// Alert Dialog
const alertDialog = document.getElementById("alert-dialog");
const openAlertDialog = document.getElementById("open-alert-dialog");
const closeAlertDialog = document.getElementById("close-alert-dialog");

openAlertDialog.addEventListener("click", () => {
    alertDialog.style.display = "flex";
});

closeAlertDialog.addEventListener("click", () => {
    alertDialog.style.display = "none";
});
