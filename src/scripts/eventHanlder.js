console.log("eventHandler working");

const createLego = () => {
    //variables storing the values of the returned input form used to build the new lego object.
    const legoCreator = document.querySelector("#lego__creator").value
    const legoShape = document.querySelector("#lego__shape").value
    const legoCreation = document.querySelector("#lego__creation").value
    const legoColor = document.querySelector("#lego__color").value
    //fetches color from a separate color resource API, then begins the process of building the object with the other values by calling a new function in objectManager.js.
    // getColor(legoColor).then(parsedResponse => {
    //     console.log("color resource API response", parsedResponse);
    //     newLego(legoCreator, parsedResponse, legoShape, legoCreation);
    // })
    newLego(legoCreator, legoColor, legoShape, legoCreation)
}

const printoConsole = (list) => {
    list.forEach(lego => {
        console.log(lego);
    })
}

//another fetch call for lego colors.