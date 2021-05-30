var product1 = document.getElementById("1");
var product2 = document.getElementById("2");
var product3 = document.getElementById("3");

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
    for (i = 0; i < data.length; i++) {
        i = 0;
        htmlString += "<h2>" + data[i].name + "</h2>";
        htmlString += "<h3>Description</h3>";
        htmlString += "<p>" + data[i].description + "</p>";
        htmlString += "<p>" + data[i].price + "</p>";
        product1.insertAdjacentHTML("beforeend", htmlString);
        i++;

    }

    btn.classList.add("hide-me");

}