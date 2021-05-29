var services = document.getElementById("homme");

services.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../projet front/js/JSON.js');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
    };
    ourRequest.send();
})

