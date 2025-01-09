const BASE_URL = "http://localhost:5555"; // Replace with your backend URL

// Load characters when the page loads
document.addEventListener("DOMContentLoaded", fetchCharacters);
// Fetch all characters
async function fetchCharacters() {
    try {
        const response = await fetch(`${BASE_URL}/`);
        if (!response.ok) throw new Error("Failed to fetch characters.");

        const characters = await response.json();
        const charactersContainer = document.getElementById("characters");

        // Update characters container with fetched data
        charactersContainer.innerHTML = characters.map(char => `
            <img src="${BASE_URL}/${char.mugshot}" alt="${char.name}" title="${char.name}" onclick="fetchCharacterDetails('${char.name}')">
        `).join('');

        // Scroll to the end to show the last character
        charactersContainer.scrollLeft = charactersContainer.scrollWidth;

    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}


// Fetch and display character details
async function fetchCharacterDetails(name) {
    try {
        const response = await fetch(`${BASE_URL}/${name}`);
        if (!response.ok) throw new Error("Character not found.");

        const char = await response.json();
        const backgroundImageUrl = `${BASE_URL}/${char.background}`.replace(/\\/g, '/');

        // Update the background image
        const backgroundDiv = document.getElementById("backgroundImage");
        backgroundDiv.style.backgroundImage = `url('${backgroundImageUrl}')`;
        backgroundDiv.style.backgroundSize = "cover";
        backgroundDiv.style.backgroundPosition = "center";

        // Load main image
        document.getElementById("mid").innerHTML = `
            <img src="${BASE_URL}/${char.mainImage}" alt="${char.name}" id="mainImg">
        `;

        // Load artifacts
        document.getElementById("artifact").innerHTML = char.artifacts.map(artifact => `
            <div class="artifact">
                <img src="${BASE_URL}/${artifact.image}" alt="${artifact.name}">
                <span>${artifact.name} (${artifact.type}): ${artifact.effect || 'N/A'}</span>
            </div>
        `).join('');

        // Load roles
        document.getElementById("roles").innerHTML = char.roles.map(role => `
            <div class="roles">
                <img src="${BASE_URL}/${role.image}" alt="${role.name}">
                <span>${role.name}</span>
            </div>
        `).join('');

        // Load weapons
        document.getElementById("weapon").innerHTML = char.weapons.map(weapon => `
            <div class="weapon">
                <img src="${BASE_URL}/${weapon.image}" alt="${weapon.name}">
                <span>${weapon.name}</span>
            </div>
        `).join('');

        // Load materials
        document.getElementById("materials").innerHTML = char.materials.map(material => `
            <div class="materials">
                <img src="${BASE_URL}/${material.image}" alt="${material.name}">
                <span>${material.name} (x${material.quantity})</span>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error fetching character details:", error);
    }
}