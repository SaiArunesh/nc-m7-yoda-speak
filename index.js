const minion_output = document.getElementById("minion-input");
const human_input = document.getElementById("human-input");
const translate_button = document.getElementById("translate");

const api_url =  "https://api.funtranslations.com/translate/yoda.json";


translate_button.addEventListener("click", getTranslation);

function getTranslation(){
    minion_output.innerText = "Loading...............";
    textQuery = "?text="+encodeText(human_input.value);
    queryUrl = api_url + textQuery;
    fetch(queryUrl).then(response=>response.json()).then(
        responseJson=>{
            if(responseJson.hasOwnProperty("contents")){
                minion_output.innerText = responseJson.contents.translated;
            }
            else{
                console.log("Error occurred");
                minion_output.innerText = responseJson.error.message;
            }
        }
    ).catch(error=>{
        alert(error);
    });
}

function encodeText(text){
    return encodeURI(text);
}
