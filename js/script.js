const pseudo = document.getElementById('pseudo');

if(localStorage.getItem('pseudo')){
    var name = localStorage.getItem('pseudo');
} else {
    var name = prompt("Quel est votre nom ?", "");
}

if(!(name === "") || !(name === null)) {
    name = name.toLowerCase();
    localStorage.setItem("pseudo", name);
    if (name == "evan" || name == "sébastien") {
        pseudo.innerHTML = "Bienvenue le créateur du site";
    }
    else if (name == "jean-charles zunino" || name == "jc zunino" || name == "jcharles zunino"){
        pseudo.innerHTML = "Bonjour <strong>" + name + "</strong>, et bienvenue sur notre site. Vous êtes le meilleur professeur du monde";
    }
    else {
        pseudo.innerHTML = "Bienvenue " + name  ;
    }
} else {
    pseudo.innerHTML = "Bienvenue visiteur";
}
function button() {
    localStorage.removeItem('pseudo')
    document.location.reload(true)
}