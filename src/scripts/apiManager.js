console.log("apiManager working");

const postLego = (lego) => {
    fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(lego)
    }).then(() => getLegos()).then(parsedResponse => printoConsole(parsedResponse));
}

const getLegos = () => {
    return fetch(`http://localhost:8088/legos`).then(response => response.json())
}

const getColor = (index) => {
    return fetch(`http://localhost:8088/colors/${index}`).then(response => response.json())
}