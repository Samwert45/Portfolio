const links = document.querySelectorAll('.TextNav a');
links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Enlever la classe active de toutes les images
        document.querySelectorAll('.image-hover').forEach(img => {
            img.classList.remove('active');
        });
       
        // Ajouter la classe active à l'image correspondante
        const imageName = this.getAttribute('data-image');
        let targetImage = null;
       
        switch(imageName) {
            case 'about':
                targetImage = document.getElementById('model-about');
                break;
            case 'competences':
                targetImage = document.getElementById('model-competences');
                break;
            case 'projets':
                targetImage = document.getElementById('model-projets');
                break;
            case 'experiences':
                targetImage = document.getElementById('model-experiences');
                break;
        }
        
        if (targetImage) {
            targetImage.classList.add('active');
        }
    });
    
    link.addEventListener('mouseleave', function() {
        // Enlever la classe active de toutes les images
        document.querySelectorAll('.image-hover').forEach(img => {
            img.classList.remove('active');
        });
    });
});