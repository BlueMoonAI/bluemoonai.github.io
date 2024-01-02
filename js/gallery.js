document.addEventListener('DOMContentLoaded', function () {
    const numArtworks = 18;
    const galleryContainer = document.getElementById('galleryContainer');
    const seeMoreButton = document.getElementById('seeMoreButton');
    let displayedArtworks = 6; // Initial number of displayed artworks

    function createGalleryCard(index) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.href = '#';

        const galleryInfoDiv = document.createElement('div');
        galleryInfoDiv.className = 'gallery-info';

        const galleryBioDiv = document.createElement('div');
        galleryBioDiv.className = 'gallery-bio';

        const heading = document.createElement('h3');
        heading.textContent = 'Artwork ' + index;
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Generative Art using BlueMoon AI';

        galleryBioDiv.appendChild(heading);
        galleryBioDiv.appendChild(paragraph);

        galleryInfoDiv.appendChild(galleryBioDiv);
        cardDiv.appendChild(galleryInfoDiv);

        galleryContainer.appendChild(cardDiv);
    }

    function displayArtworks(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            createGalleryCard(i + 1);
        }
    }

    // Initial display
    displayArtworks(0, displayedArtworks);

    seeMoreButton.addEventListener('click', function () {
        if (displayedArtworks < numArtworks) {
            const nextDisplayedArtworks = Math.min(displayedArtworks + 6, numArtworks);
            displayArtworks(displayedArtworks, nextDisplayedArtworks);
            displayedArtworks = nextDisplayedArtworks;

        }
        else {

            if (displayedArtworks === numArtworks) {
                // If all artworks are displayed, change button behavior
                seeMoreButton.href = 'https://github.com/orgs/BlueMoonAI/discussions';
                seeMoreButton.target = '_blank';
            }
        }


    });
});
