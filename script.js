const links = document.querySelectorAll('.TextNav a');

links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Enlever la classe active de toutes les images
        document.querySelectorAll('.image-hover').forEach(img => {
            img.classList.remove('active');
        });
        
        // Ajouter la classe active à l'image correspondante
        const imageName = this.getAttribute('data-image');
        const targetImage = document.getElementById('img-' + imageName);
        if (targetImage) {
            targetImage.classList.add('active');
        }
    });
});