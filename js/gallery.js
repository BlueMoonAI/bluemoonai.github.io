document.addEventListener('DOMContentLoaded', function () {
    // Number of artworks
    const numArtworks = 18;

    // Reference to the gallery container
    const galleryContainer = document.getElementById('galleryContainer');

    // Loop to create gallery cards
    for (let i = 1; i <= numArtworks; i++) {
        // Create card div
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.href = '#';

        // Create gallery info div
        const galleryInfoDiv = document.createElement('div');
        galleryInfoDiv.className = 'gallery-info';

        // Create gallery bio div
        const galleryBioDiv = document.createElement('div');
        galleryBioDiv.className = 'gallery-bio';

        // Set h3 and p content
        const heading = document.createElement('h3');
        heading.textContent = 'Artwork ' + i;
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Generative Art using Advanced AI';

        // Append h3 and p to gallery bio div
        galleryBioDiv.appendChild(heading);
        galleryBioDiv.appendChild(paragraph);

        // Append gallery bio div to gallery info div
        galleryInfoDiv.appendChild(galleryBioDiv);

        // Append gallery info div to card div
        cardDiv.appendChild(galleryInfoDiv);

        // Append card div to gallery container
        galleryContainer.appendChild(cardDiv);
    }
});