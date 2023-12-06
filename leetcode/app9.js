let personas = [
  { nombre: "Diego", edad: 42, peso: 74 },
  { nombre: "Angelica", edad: 30, peso: 61 },
  { nombre: "Checho", edad: 39, peso: 70 },
];

const personaEncontrada = personas.find(
  (persona) => persona.nombre === "Diego"
);

personaEncontrada.nombre = "Diego A.";

console.log(personas);
