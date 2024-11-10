const links = document.querySelectorAll('.links1 a');

// Add click event to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});

function showText(container) {
    // Supprimer la classe 'active' de toutes les images
    document.querySelectorAll('.img-container').forEach(img => {
        img.classList.remove('active');
    });

    // Ajouter la classe 'active' à l'image cliquée
    container.classList.add('active');
}