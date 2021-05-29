var homme = document.getElementById("homme");

homme.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://lestox.github.io/Coiffeur/js/JSON.js');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
    };
    ourRequest.send();
})

