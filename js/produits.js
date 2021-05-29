var container = document.getElementById("container")
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://lestox.github.io/Coiffeur/js/JSON.json');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    };
    ourRequest.send();
})

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.lenght; i++) {
        htmlString += "<h2>" + data[i].name + "</h2>";
        htmlString += "<h3>Description</h3>";
        htmlString += "<p>" + data[i].description + "</p>";
    }
}