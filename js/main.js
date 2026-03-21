async function loadCharacters() {
  const res = await fetch("data/characters_fnaf1.json");
  const characters = await res.json();
  renderCharacters(characters);
}

function renderCharacters(list) {
  const grid = document.getElementById("character-grid");
  grid.innerHTML = "";

  list.forEach(c => {
    const div = document.createElement("div");
    div.className = "character";

    div.innerHTML = `
      <img src="${c.image}" alt="${c.name}">
      <div class="tooltip">
        <strong>${c.name}</strong><br>
        <span>[${c.series}]</span><br>
        ${c.description}
      </div>
    `;
    div.addEventListener("click", () => {
      const tooltip = div.querySelector(".tooltip");
      const isVisible = tooltip.style.display === "block";
      tooltip.style.display = isVisible ? "none" : "block";
    });

    grid.appendChild(div);
  });
}

loadCharacters();