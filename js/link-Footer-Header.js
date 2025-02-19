// Fonction pour inclure les fichiers HTML
function includeHTML(id, file) {
    fetch("../" + file)  // On ajuste le chemin pour accéder au fichier
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Erreur de chargement :', error));
}

// Charger le header et le footer
document.addEventListener("DOMContentLoaded", function () {
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
});
