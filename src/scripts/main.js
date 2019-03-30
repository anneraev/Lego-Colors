console.log("main working");

//reference to submit button.
const button = document.querySelector("#lego__submit");

// Call create lego when the button is clicked
button.addEventListener("click", event => {
    //prevents page from reloading when clicking submit.
    event.preventDefault();
    createLego();
})