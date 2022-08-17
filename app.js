var inputText = document.querySelector("#input-text");

var btnTranslate = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#outputDiv");

var url = "https://api.funtranslations.com/translate/minion.json"

// var combUrl = url + "?" + "text="

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Something went wrong")
}

function getTranslationUrl (input) {
    return url + "?" + "text=" +input
}

function clickHandler() {
    // console.log("Clicked")
    // alert("Clicked " + inputText.value)


    fetch(getTranslationUrl(inputText.value))
        .then( response => response.json())
        .then( json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

    // outputDiv.innerText = "Inner Text"
}

btnTranslate.addEventListener("click", clickHandler)