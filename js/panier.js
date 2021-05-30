var ajout = document.getElementsByClassName("add-to-cart");

var tbody = document.getElementById("cart-tablebody");
var id = document.querySelectorAll("[data-id]");
var nom = document.querySelectorAll("[data-name]");
var description = document.querySelectorAll("[data-description]");
var prix = document.querySelectorAll("[data-price]");
var insertion = "<tr>" + "<th>" + nom + "</th>" + "<th>" + description + "</th>" + "<th>" + prix + "</th>" + "</tr>";

for(var i = 0; i < id.lenght-1; i++){
    ajout[i].addEventListener("click", function() {
        this.innerHTML = insertion;
    })
}