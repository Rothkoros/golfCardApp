import { apiGetFox } from "./api_func.js";
import { apiGet2 } from "./api_func2.js";

export function courseFunc1() {
    apiGetFox();
}
// apiGetOaks()
// apiGetThanks()
apiGet2()

// function courseFunc1() {
//     document.getElementById("MyButton").onclick = apiGetFox()

// }
// document.getElementById("MyButton").onclick = function() {
//     alert("Button Clicked");
// }
// document.getElementById("MyButton").onclick = function() {
//         alert("Button Clicked");
//     }
// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://golf-courses-api.herokuapp.com/courses', true)

// ourRequest.onload = function() {
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(responseText[0])
// }

// ourRequest.send();