var homme = document.getElementById("homme");

services.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'file:///C:/Users/melis/Documents/GitHub/Coiffeur/js/JSON.js');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
    };
    ourRequest.send();
})

