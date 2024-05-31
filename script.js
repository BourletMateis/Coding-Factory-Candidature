window.addEventListener("load", function() {
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
            resetAndAnimateText();
            resetAndAnimateLogos();
        });
    });

    // Fonction pour afficher une page spécifique
    function showPage(index) {
        if (index >= 0 && index < pages.length) {
            document.querySelectorAll('.section, .page').forEach(el => el.classList.remove('active'));

            pages[index].classList.add('active');
            pageSelector.querySelector(`.section[data-page="${index + 1}"]`).classList.add('active');

            prevButton.disabled = index === 0;
            nextButton.disabled = index === pages.length - 1;

            pages[index].querySelectorAll(".logos, .timeline-content, .timeline-content.right, .timeline-contents").forEach(el => {
                el.classList.remove("active");
                requestAnimationFrame(() => el.classList.add("active"));
            });
        }
    }

    // Gestionnaires d'événements pour "Précédent" et "Suivant"
    prevButton.addEventListener('click', () => {
        const currentIndex = Array.from(pages).findIndex(page => page.classList.contains('active'));
        showPage(currentIndex - 1);
        resetAndAnimateText();
        resetAndAnimateLogos();
    });

    nextButton.addEventListener('click', () => {
        const currentIndex = Array.from(pages).findIndex(page => page.classList.contains('active'));
        showPage(currentIndex + 1);
        resetAndAnimateText();
        resetAndAnimateLogos();
    });

    // Afficher la première page par défaut
    showPage(0);
});

function resetAndAnimateText() {
    document.querySelectorAll(".animate-text").forEach(function(elem) {
        const originalText = elem.dataset.text || elem.textContent.replace(/\s+/g, ' ').trim();
        elem.dataset.text = originalText; // Stocker le texte original dans un attribut de données
        elem.textContent = ''; // Vider le contenu textuel
        elem.style.visibility = 'visible'; // Assurez-vous que le texte est visible

        animateText(elem, originalText);
    });
}

function animateText(elem, text) {
    let charIndex = 0;
    clearInterval(elem.intervalId); // Clear any previous interval to avoid overlapping animations

    elem.intervalId = setInterval(() => {
        if (charIndex < text.length) {
            elem.textContent += text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(elem.intervalId);
        }
    }, 15); // Délai entre chaque lettre (ajustez si nécessaire)
}

// Fonction pour réinitialiser et animer les logos
function resetAndAnimateLogos() {
    document.querySelectorAll(".logos").forEach(function(elem) {
        elem.classList.remove('animated'); // Enlever la classe d'animation

        // Utiliser requestAnimationFrame pour forcer le reflow
        requestAnimationFrame(() => {
            elem.classList.add('animated'); // Ajouter la classe d'animation
        });
    });
}
