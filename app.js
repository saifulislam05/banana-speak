const translateButton = document.querySelector("#btn-translate"); // translate button
const translateInput = document.querySelector("#input"); //target input
const translateOutput = document.querySelector("#output");// target output

// API url
const url = `https://api.funtranslations.com/translate/minion.json`;

// click handler function
function clickHandle() {
    let input = translateInput.value;
    let finalUrl = constructURL(input);
    fetch(finalUrl)
        .then(res => res.json())
        .then(json => { translateOutput.innerText = json.contents.translated })
    .catch(()=>alert("something went wrong with server. please try again later"))
}

// click event listener
translateButton.addEventListener("click", clickHandle)

// converto input text to encodeUri
function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}