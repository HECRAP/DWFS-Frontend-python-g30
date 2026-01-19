const API_URL = "https://dragonball-api.com/api/characters";

const container = document.getElementById("characters");
const pageInfo = document.getElementById("page-info");

const btnFirst = document.getElementById("first");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const btnLast = document.getElementById("last");

let currentPage = 1;
let totalPages = 1;

// Obtener personajes
async function getCharacters(page = 1) {
    try {
    const response = await fetch(`${API_URL}?page=${page}`);
    const data = await response.json();

    totalPages = data.meta.totalPages;
    currentPage = data.meta.currentPage;

    renderCharacters(data.items);
    updatePageInfo();
    } catch (error) {
    console.error("Error al obtener personajes:", error);
    }
}

// Renderizar personajes
function renderCharacters(characters) {
    container.innerHTML = "";

    characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>Raza: ${character.race}</p>
        <p>Género: ${character.gender}</p>
        <button>⭐</button>
    `;

    container.appendChild(card);
    });
}

// Actualizar info de página
function updatePageInfo() {
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
}

// Eventos de paginación
btnNext.addEventListener("click", () => {
    if (currentPage < totalPages) {
    getCharacters(currentPage + 1);
    }
});

btnPrev.addEventListener("click", () => {
    if (currentPage > 1) {
    getCharacters(currentPage - 1);
    }
});

btnFirst.addEventListener("click", () => {
    getCharacters(1);
});

btnLast.addEventListener("click", () => {
    getCharacters(totalPages);
});

// Cargar primera página
getCharacters();
