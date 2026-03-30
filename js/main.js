async function loadSeries(series, gridId) {
  const res = await fetch(`data/characters_${series}.json`);
  const characters = await res.json();
  renderCharacters(characters, gridId);
}

function renderCharacters(list, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";

  list.forEach(c => {
    const div = document.createElement("div");
    div.className = "character";

    div.innerHTML = `
      <img src="${c.image}" alt="${c.name}">
      <div class="char-name">${c.name}</div>
      <div class="char-desc">
        <span>[${c.series}]</span><br>
        ${c.description.replace(/\n/g, "<br>")}
      </div>
    `;

    div.addEventListener("click", () => {
      const desc = div.querySelector(".char-desc");
      desc.classList.toggle("open");
    });

    grid.appendChild(div);
  });
}

// jsonを読み込む
loadSeries("fnaf1", "fnaf1-grid");
loadSeries("fnaf2", "fnaf2-grid");
loadSeries("fnaf3", "fnaf3-grid");