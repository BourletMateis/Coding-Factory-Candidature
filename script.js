document.addEventListener("DOMContentLoaded", function() {
    const pageSelector = document.querySelector('.page-selector');
    const pages = document.querySelectorAll('.page');

    // Création des boutons "Précédent" et "Suivant"
    const prevButton = document.createElement('button');
    prevButton.textContent = '';
    prevButton.classList.add('nav-button', 'prev-button');
    pageSelector.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = '';
    nextButton.classList.add('nav-button', 'next-button');
    pageSelector.appendChild(nextButton);

    // Création des boutons de page (ronds) et gestion des clics
    pages.forEach((page, index) => {
        const pageButton = document.createElement('div');
        pageButton.classList.add('section');
        pageButton.dataset.page = index + 1;
        pageSelector.appendChild(pageButton);

        pageButton.addEventListener('click', () => {
            showPage(index);
        });
    });

    // Fonction pour afficher une page spécifique
    function showPage(index) {
        if (index >= 0 && index < pages.length) {
            // Désactiver tous les boutons et pages
            document.querySelectorAll('.section, .page').forEach(el => el.classList.remove('active'));

            // Activer le bouton et la page correspondants
            pages[index].classList.add('active');
            document.querySelector(`.section[data-page="${index + 1}"]`).classList.add('active');

            // Gérer l'état des boutons "Précédent" et "Suivant"
            prevButton.disabled = index === 0;
            nextButton.disabled = index === pages.length - 1;

            // Déclencher l'animation de logo
            setTimeout(() => {
                pages[index].querySelector(".logos").classList.add("active");
            }, 10);
        
             // Déclencher l'animation de timeline-content
             setTimeout(() => {
                pages[index].querySelector(".timeline-content").classList.add("active");
            }, 10);


            // Déclencher l'animation de timeline-content.right
            setTimeout(() => {
                pages[index].querySelector(".timeline-content.right").classList.add("active");
            }, 10);
                
            // Déclencher l'animation de timeline-contents
                 setTimeout(() => {
                    pages[index].querySelector(".timeline-contents").classList.add("active");
                }, 10);
                

        }
        }











        "use strict";
window.addEventListener("DOMContentLoaded", (event) => {
  animate_text();
});
// -------------------
function animate_text() 
{
  let delay = 20,
      delay_start = 0,
      contents,
      letters;

  document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        // ---------
        // effet machine à écrire (SIMPLE)
        elem.textContent += letter;
        // ---------
        // OU :
        // effet machine à écrire + animation CSS (SPECIAL)
        /*
        var span = document.createElement('span');
        span.innerHTML = letter.replace(/ /,'&nbsp;');
        elem.appendChild(span);
*/
        // ---------
      }, delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}























    // Gestionnaires d'événements pour "Précédent" et "Suivant"
    prevButton.addEventListener('click', () => {
        const currentIndex = Array.from(pages).findIndex(page => page.classList.contains('active'));
        showPage(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        const currentIndex = Array.from(pages).findIndex(page => page.classList.contains('active'));
        showPage(currentIndex + 1);
    });

    // Afficher la première page par défaut
    showPage(0);
});
