// JSON を読み込む関数（必ず必要）
async function loadCharacters() {
  const res = await fetch("data/characters_fnaf1.json");
  const characters = await res.json();
  renderCharacters(characters);
}

// キャラを表示し、タップで説明を開閉する関数
function renderCharacters(list) {
  const grid = document.getElementById("character-grid");
  grid.innerHTML = "";

  list.forEach(c => {
    const div = document.createElement("div");
    div.className = "character";
    div.style.position = "relative"; // tooltip の位置を正しくする

    div.innerHTML = `
      <img src="${c.image}" alt="${c.name}">
      <div class="tooltip">
        <strong>${c.name}</strong><br>
        <span>[${c.series}]</span><br>
        ${c.description}
      </div>
    `;

    // タップで説明を開閉
    div.addEventListener("click", (e) => {
      e.stopPropagation();
      const tooltip = div.querySelector(".tooltip");

      // 他の tooltip を閉じる
      document.querySelectorAll(".tooltip").forEach(t => {
        if (t !== tooltip) t.style.display = "none";
      });

      // このキャラだけ開閉
      tooltip.style.display =
        tooltip.style.display === "block" ? "none" : "block";
    });

    grid.appendChild(div);
  });

  // 画面のどこかをタップしたら全部閉じる
  document.addEventListener("click", () => {
    document.querySelectorAll(".tooltip").forEach(t => {
      t.style.display = "none";
    });
  });
}

// 最初に読み込む（これが無いと何も表示されない）
loadCharacters();