var fName = document.getElementById("first-name");
var lName = document.getElementById("last-name");
var sName = document.getElementById("show-name");
var aInfo = document.getElementById("additional-info");
var addBtn = document.getElementById("add-character");
var outputArea = document.getElementById("output-area");
var cartoonForm = document.getElementById("cartoon-form");
var characters = [];


var Character = function Character(first, last, show, info){
    this.firstName = first;
    this.lastName = last;
    this.showName = show;
    this.addInfo = info;

    this.getCharacterText = function getCharacterText(){
        return "<strong>Character Name: </strong>" + this.firstName + " " + this.lastName + "  <strong>Show Name: </strong>" 
        + this.showName +  " " + "  <strong>Additional Info: </strong>" + this.addInfo;
    }
}


addBtn.addEventListener("click", function(){
  // alert("hello");
    if (fName.value == ""){
        alert("Please enter a first name.")
        return;
    }
    if (sName.value == ""){
        alert("Please enter a cartoon name.")
        return;
    }
    newCharacter = new Character(fName.value, lName.value, sName.value, aInfo.value);
    characters.push(newCharacter);
    displayList();

})

var displayList = function displayList(){
    outputArea.innerHTML = "";
   characters.forEach(function(item, index, array){
    outputArea.innerHTML += item.getCharacterText() + "<br>";
    cartoonForm.reset();

   });
}
    
