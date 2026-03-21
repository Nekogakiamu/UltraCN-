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
      <div class="char-name">${c.name}</div>
      <div class="char-desc">
        <span>[${c.series}]</span><br>
        ${c.description}
      </div>
    `;

    // クリックで説明を開閉
    div.addEventListener("click", () => {
      const desc = div.querySelector(".char-desc");
      desc.classList.toggle("open");
    });

    grid.appendChild(div);
  });
}

loadCharacters();