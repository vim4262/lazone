
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;

        if (name && email && destination && date) {
            alert(`Réservation effectuée avec succès pour ${name}!`);
            // Ajoutez ici le code pour envoyer les données du formulaire à votre serveur
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });

    // Animation pour les cartes de destination
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
});
