var product1 = document.getElementById("1");
var product2 = document.getElementById("2");
var product3 = document.getElementById("3");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://lestox.github.io/Coiffeur/js/prestation.json');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    };
    ourRequest.send();
})

function renderHTML(data) {
    htmlString0 = "";
    htmlString1 = "";
    htmlString2 = "";
    for (i = 0; i < data.length; i++) {
        window['htmlString' + i] += "<h2>" + data[i].name + "</h2>" + "<h3>Description</h3>" + "<p>" + data[i].description + "</p>" + "<p>" + data[i].price + "</p>";
    }
    product1.insertAdjacentHTML("beforeend", htmlString0);
    product2.insertAdjacentHTML("beforeend", htmlString1);
    product3.insertAdjacentHTML("beforeend", htmlString2);
    btn.classList.add("hide-me");

}