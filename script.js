// In den Entwickler tooles (F12 im Broswer) Reiter -> Application -> reiter
//  Local srorage, sieht man die Key und Value Paare die abgelegt werden in dem Local Storage

// Hauot thema wie spiecher ich etwas im Local Storage
// ("Key", "Value") beides required
// localStorage.setItem("lastname", "smith") -> reinschreiben
// localStorage.getItem("lastname") -> auslesen

// Test Array
let myData = ["Banana", "not Banana", "Apple"];

// Initial Fuction onload auf dem Body
function init() {
  // Holt aus dem LocalStorage
  getFromLocalStorage();
  // macht es sichtbar
  render();
}

// Speichert die eingabe aus dem Inputfeld in fas myData Array
function saveData() {
  // referenz auf data_input / <input> feld
  let inputRef = document.getElementById("data_input");

  // ist die eingabe im Inputfeld nicht = leer dann ....
  if (inputRef.value != "") {
    //pusht die eingabe aus dem inputfeld in das Array myData
    myData.push(inputRef.value);
  }

  // aufruf der function saveToLocalStorage
  saveToLocalStorage();
  // aufruf der function render(), welches die sachen im Div mit der ID="content" sichtbar macht
  render();
  // leeren des values aus dem Inputfeld.
  inputRef.value = "";
}

function saveToLocalStorage() {}

function getFromLocalStorage() {}

// inhalte in etwas rendern.
function render() {
  //referenz auf das element mit der Id "content" (das ist ein div)
  let contentRef = document.getElementById("content");
  // leeren des innerHTML von dem Element mit der ID "content" damit wenn neue
  // hinhalte hinzukommen, nicht die alten wieder mit reingeworfen werden die schon da sind
  contentRef.innerHTML = "";

  // Forschleife zum durchiterieren durch das Array myData
  // solange index größer als Array länge dann ...
  for (let index = 0; index < myData.length; index++) {
    // schreibe in das innerHtml von contentRef also dem Element mit der id="content", also dem div folgendes ...
    contentRef.innerHTML += `<p>${myData[index]}</p>`;
  }
}
