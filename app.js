var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var txtOutputHodor = document.querySelector('#txt-output-hodor');
var txtOutputGroot = document.querySelector('#txt-output-groot');
var hodorURL = "https://api.funtranslations.com/translate/hodor.json"
var grootURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(input, serverURL){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText, hodorURL))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutputHodor.innerText = translatedText;
        }) 
    
    fetch(getTranslationURL(inputText, grootURL))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutputGroot.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);