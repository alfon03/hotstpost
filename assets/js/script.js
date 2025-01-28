const infoBox = document.getElementById("info-box");
const planetData = {
  sun: "El Sol: Es la estrella del sistema solar y su fuente de energía.",
  mercurio: "Mercurio: Es el planeta más cercano al Sol.",
  venus: "Venus: Segundo planeta, conocido como la estrella del alba.",
  earth: "La Tierra: Nuestro planeta, hogar de miles de millones de seres vivos.",
  mars: "Marte: Conocido como el planeta rojo.",
  jupiter: "Júpiter: El planeta más grande del sistema solar.",
  saturno: "Saturno: Un planeta gigante con hermosos anillos.",
  urano: "Urano: Un gigante helado con un color azul verdoso.",
  neptuno: "Neptuno: El planeta más lejano del Sol.",
  pluton: "Plutón: Considerado un planeta enano, se encuentra más allá de Neptuno."
};

// Añadir eventos a cada planeta
document.querySelectorAll(".planet, #sun").forEach((planet) => {
  planet.addEventListener("click", (e) => {
    const planetId = e.target.id;
    infoBox.textContent = planetData[planetId] || "Información no disponible.";
    zoomPlanet(planetId);
    playSound();
  });
});

function zoomPlanet(planetId) {
  const svg = document.querySelector("svg");
  const planet = document.getElementById(planetId);

  // Obtener posición y tamaño del planeta
  const { x, y, width, height } = planet.getBoundingClientRect();
  const svgBox = svg.getBoundingClientRect();

  // Calcular el centro relativo del planeta dentro del SVG
  const centerX = x + width / 2 - svgBox.x;
  const centerY = y + height / 2 - svgBox.y;

  svg.style.transformOrigin = `${centerX}px ${centerY}px`;
  svg.style.transition = "transform 0.5s";
  svg.style.transform = "scale(1.5)";
}

// Restaurar el zoom al hacer clic fuera del SVG
document.body.addEventListener("click", (e) => {
  if (!e.target.closest("svg")) {
    const svg = document.querySelector("svg");
    svg.style.transform = "scale(1)";
  }
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

function playSound() {
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();
}
