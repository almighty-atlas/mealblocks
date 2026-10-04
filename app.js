const DATA = {
  proteins: [
    { id: "soy", name: "Soja-Schnetzel (trocken)", kcal: 345, protein: 52, min: 40, max: 110, step: 5, preferred: 60 },
    { id: "tofu", name: "Tofu natur", kcal: 145, protein: 16, min: 120, max: 320, step: 10, preferred: 180 },
    { id: "smoked-tofu", name: "Räuchertofu", kcal: 170, protein: 19, min: 120, max: 280, step: 10, preferred: 160 },
    { id: "tempeh", name: "Tempeh", kcal: 195, protein: 20, min: 100, max: 260, step: 10, preferred: 150 },
    { id: "edamame", name: "Edamame", kcal: 122, protein: 12.1, min: 160, max: 360, step: 10, preferred: 220 },
    { id: "kidney-beans", name: "Kidneybohnen (gekocht)", kcal: 127, protein: 8.7, min: 180, max: 380, step: 10, preferred: 260 },
    { id: "black-beans", name: "Schwarze Bohnen (gekocht)", kcal: 132, protein: 8.9, min: 180, max: 380, step: 10, preferred: 260 },
    { id: "chickpeas", name: "Kichererbsen (gekocht)", kcal: 164, protein: 8.9, min: 160, max: 330, step: 10, preferred: 230 },
    { id: "lentils", name: "Linsen (gekocht)", kcal: 116, protein: 9.0, min: 180, max: 400, step: 10, preferred: 260 }
  ],
  carbs: [
    { id: "potato", name: "Kartoffeln", kcal: 77, protein: 2, min: 100, max: 450, step: 10, preferred: 250 },
    { id: "sweet-potato", name: "Süßkartoffeln", kcal: 86, protein: 1.6, min: 100, max: 400, step: 10, preferred: 220 },
    { id: "rice", name: "Reis (trocken)", kcal: 360, protein: 7.2, min: 25, max: 120, step: 5, preferred: 55 },
    { id: "quinoa", name: "Quinoa (trocken)", kcal: 368, protein: 14.1, min: 25, max: 110, step: 5, preferred: 50 },
    { id: "buckwheat", name: "Buchweizen (trocken)", kcal: 343, protein: 13.3, min: 25, max: 120, step: 5, preferred: 55 },
    { id: "polenta", name: "Polenta (trocken)", kcal: 360, protein: 8.1, min: 25, max: 120, step: 5, preferred: 50 }
  ],
  vegetables: [
    { id: "broccoli", name: "Brokkoli", kcal: 34, protein: 2.8 },
    { id: "cauliflower", name: "Blumenkohl", kcal: 25, protein: 1.9 },
    { id: "pepper", name: "Paprika", kcal: 31, protein: 1.0 },
    { id: "zucchini", name: "Zucchini", kcal: 17, protein: 1.2 },
    { id: "carrot", name: "Karotten", kcal: 41, protein: 0.9 },
    { id: "mushroom", name: "Champignons", kcal: 22, protein: 3.1 },
    { id: "green-beans", name: "Grüne Bohnen", kcal: 31, protein: 1.8 },
    { id: "brussels", name: "Rosenkohl", kcal: 43, protein: 3.4 },
    { id: "eggplant", name: "Aubergine", kcal: 25, protein: 1.0 },
    { id: "pumpkin", name: "Kürbis", kcal: 26, protein: 1.0 },
    { id: "onion", name: "Zwiebeln", kcal: 40, protein: 1.1 },
    { id: "fennel", name: "Fenchel", kcal: 31, protein: 1.2 },
    { id: "corn", name: "Mais", kcal: 86, protein: 3.4 },
    { id: "peas", name: "Erbsen", kcal: 81, protein: 5.4 },
    { id: "cherry-tomatoes", name: "Cherrytomaten", kcal: 18, protein: 0.9 },
    { id: "red-cabbage", name: "Rotkohl", kcal: 31, protein: 1.4 },
    { id: "asparagus", name: "Spargel", kcal: 20, protein: 2.2 }
  ],
  flavors: [
    { id: "smoky-bbq", name: "Smoky BBQ", description: "Rauchig, herzhaft und paprika-lastig; erinnert an BBQ ohne süße Sauce.", spices: ["2 TL geräucherte Paprika", "1 TL Knoblauchpulver", "½ TL Zwiebelpulver", "Chili, Pfeffer & Salz"] },
    { id: "mediterranean", name: "Mediterran", description: "Kräutrig, zitronig und frisch mit Oregano, Basilikum und Rosmarin.", spices: ["1 TL Oregano", "1 TL Basilikum", "½ TL Rosmarin", "Knoblauch, Zitrone, Pfeffer & Salz"] },
    { id: "mexican", name: "Mexikanisch", description: "Warm-würzig, leicht rauchig und frisch durch Kreuzkümmel, Chili und Limette.", spices: ["1 TL Kreuzkümmel", "1 TL Paprika", "½ TL Oregano", "Chili, Knoblauch & Limette"] },
    { id: "curry", name: "Curry", description: "Wärmend und aromatisch mit klassischer Currywürze, Kurkuma, Ingwer und Knoblauch.", spices: ["2 TL Currypulver", "½ TL Kreuzkümmel", "½ TL Kurkuma", "Ingwer, Knoblauch & Salz"] },
    { id: "tandoori", name: "Tandoori", description: "Indisch inspiriert, kräftig-würzig und leicht säuerlich mit Garam Masala und Zitrone.", spices: ["1 TL Garam Masala", "1 TL Paprika", "½ TL Kreuzkümmel", "Ingwer, Knoblauch & Zitronensaft"] },
    { id: "shawarma", name: "Shawarma", description: "Levantinisch inspiriert: warm, würzig und leicht erdig mit Kreuzkümmel, Koriander und einer Spur Zimt.", spices: ["1 TL Kreuzkümmel", "1 TL Koriander", "1 TL Paprika", "Knoblauch & 1 Prise Zimt"] },
    { id: "harissa", name: "Harissa", description: "Nordafrikanisch inspiriert, deutlich pikant, würzig und zitronig.", spices: ["1–2 TL Harissa", "½ TL Kreuzkümmel", "Knoblauch & Zitronensaft", "Salz nach Geschmack"] },
    { id: "teriyaki", name: "Teriyaki-ish", description: "Japanisch inspiriert, salzig-süß mit Soja, Ingwer und einer milden Säure.", spices: ["1 EL glutenfreies Tamari", "Ingwer & Knoblauch", "1 TL Reisessig", "Etwas Süße nach Geschmack"] },
    { id: "miso-sesame", name: "Miso-Sesam", description: "Nussig, salzig und umami-reich mit Miso, Sesam und Tamari.", spices: ["1 TL glutenfreies Miso", "1 TL glutenfreies Tamari", "Ingwer & Reisessig", "1 TL Sesam"] },
    { id: "lemon-pepper", name: "Lemon Pepper", description: "Sehr frisch und zitronig mit deutlicher Pfefferschärfe.", spices: ["Viel schwarzer Pfeffer", "Knoblauch", "Zitronensaft & -abrieb", "Petersilie & Salz"] },
    { id: "herbs", name: "Kräuter-Knoblauch", description: "Mild, frisch und kräutrig; eine unkomplizierte Alltagsmischung.", spices: ["Petersilie & Dill", "Schnittlauch", "Knoblauch", "Zitrone, Pfeffer & Salz"] },
    { id: "umami", name: "Umami", description: "Tief herzhaft und würzig mit Miso, Tamari und Pilzaromen.", spices: ["1 EL glutenfreies Tamari", "1 TL glutenfreies Miso", "Knoblauch & Pfeffer", "Pilzpulver nach Geschmack"] }
  ]
};

const OIL = { name: "Öl", grams: 5, kcal: 884, protein: 0 };
const VEG_TOTAL = 300;
const storageKey = "mealblocks-favorites-v1";

const state = {
  vegetables: ["broccoli", "pepper"],
  meal: null,
  scale: 1,
  favorites: loadFavorites()
};

const el = {
  protein: document.querySelector("#protein-select"),
  carb: document.querySelector("#carb-select"),
  flavor: document.querySelector("#flavor-select"),
  vegetables: document.querySelector("#vegetable-chips"),
  calories: document.querySelector("#calorie-target"),
  proteinTarget: document.querySelector("#protein-target"),
  oil: document.querySelector("#oil-toggle"),
  generate: document.querySelector("#generate"),
  randomize: document.querySelector("#randomize"),
  title: document.querySelector("#meal-title"),
  kcal: document.querySelector("#result-kcal"),
  proteinResult: document.querySelector("#result-protein"),
  status: document.querySelector("#target-status"),
  ingredients: document.querySelector("#ingredient-list"),
  spices: document.querySelector("#spice-list"),
  favorite: document.querySelector("#favorite"),
  favoritesCard: document.querySelector("#favorites-card"),
  favoritesList: document.querySelector("#favorites-list"),
  clearFavorites: document.querySelector("#clear-favorites"),
  flavorDescription: document.querySelector("#flavor-description"),
  nutritionLegend: document.querySelector("#nutrition-legend"),
  flavorGuide: document.querySelector("#flavor-guide")
};

function option(item) {
  const node = document.createElement("option");
  node.value = item.id;
  node.textContent = item.name;
  return node;
}

function byId(list, id) {
  return list.find(function (item) { return item.id === id; });
}

function nutrition(item, grams) {
  return {
    kcal: item.kcal * grams / 100,
    protein: item.protein * grams / 100
  };
}

function selectedVegetables() {
  return state.vegetables.map(function (id) { return byId(DATA.vegetables, id); });
}

function renderFlavorDescription() {
  const flavor = byId(DATA.flavors, el.flavor.value);
  el.flavorDescription.textContent = flavor ? flavor.description : "";
}

function renderNutritionLegend() {
  const groups = [
    ["Proteinquellen", DATA.proteins],
    ["Kohlenhydrate", DATA.carbs],
    ["Gemüse", DATA.vegetables]
  ];

  el.nutritionLegend.innerHTML = groups.map(function (group) {
    const rows = group[1].map(function (item) {
      return "<tr><td>" + item.name + "</td><td>" + item.kcal + " kcal</td><td>" +
        String(item.protein).replace(".", ",") + " g</td></tr>";
    }).join("");

    return "<div class=\"legend-group\"><h3>" + group[0] + "</h3>" +
      "<div class=\"table-scroll\"><table><thead><tr><th>Zutat</th><th>kcal</th><th>Protein</th></tr></thead>" +
      "<tbody>" + rows + "</tbody></table></div></div>";
  }).join("");
}

function renderFlavorGuide() {
  el.flavorGuide.innerHTML = DATA.flavors.map(function (flavor) {
    return "<div class=\"flavor-guide-item\"><strong>" + flavor.name + "</strong><p>" +
      flavor.description + "</p></div>";
  }).join("");
}

function vegetableNutrition() {
  const vegetables = selectedVegetables();
  const gramsEach = VEG_TOTAL / vegetables.length;
  return vegetables.reduce(function (sum, vegetable) {
    const value = nutrition(vegetable, gramsEach);
    sum.kcal += value.kcal;
    sum.protein += value.protein;
    return sum;
  }, { kcal: 0, protein: 0 });
}

function scoreCandidate(candidate, calorieTarget, proteinTarget, proteinSource, carbSource) {
  const calorieDifference = Math.abs(candidate.kcal - calorieTarget);
  const proteinShortfall = Math.max(0, proteinTarget - candidate.protein);
  const proteinSurplus = Math.max(0, candidate.protein - proteinTarget);
  const portionPenalty =
    Math.abs(candidate.proteinGrams - proteinSource.preferred) * 0.025 +
    Math.abs(candidate.carbGrams - carbSource.preferred) * 0.015;
  return calorieDifference * 2 + proteinShortfall * 150 + proteinSurplus * 0.15 + portionPenalty;
}

function calculateMeal() {
  const proteinSource = byId(DATA.proteins, el.protein.value);
  const carbSource = byId(DATA.carbs, el.carb.value);
  const flavor = byId(DATA.flavors, el.flavor.value);
  const calorieTarget = Number(el.calories.value) || 500;
  const proteinTarget = Number(el.proteinTarget.value) || 30;
  const vegetables = selectedVegetables();
  const vegetableValues = vegetableNutrition();
  const oilValues = el.oil.checked ? nutrition(OIL, OIL.grams) : { kcal: 0, protein: 0 };

  let best = null;

  for (let proteinGrams = proteinSource.min; proteinGrams <= proteinSource.max; proteinGrams += proteinSource.step) {
    for (let carbGrams = carbSource.min; carbGrams <= carbSource.max; carbGrams += carbSource.step) {
      const p = nutrition(proteinSource, proteinGrams);
      const c = nutrition(carbSource, carbGrams);
      const candidate = {
        proteinGrams: proteinGrams,
        carbGrams: carbGrams,
        kcal: p.kcal + c.kcal + vegetableValues.kcal + oilValues.kcal,
        protein: p.protein + c.protein + vegetableValues.protein + oilValues.protein
      };
      candidate.score = scoreCandidate(candidate, calorieTarget, proteinTarget, proteinSource, carbSource);
      if (!best || candidate.score < best.score) best = candidate;
    }
  }

  const gramsEach = VEG_TOTAL / vegetables.length;
  state.meal = {
    proteinId: proteinSource.id,
    carbId: carbSource.id,
    flavorId: flavor.id,
    vegetableIds: state.vegetables.slice(),
    oil: el.oil.checked,
    calorieTarget: calorieTarget,
    proteinTarget: proteinTarget,
    proteinGrams: best.proteinGrams,
    carbGrams: best.carbGrams,
    vegetableGramsEach: gramsEach,
    kcal: best.kcal,
    protein: best.protein
  };
  state.scale = 1;
  renderMeal();
}

function mealName(meal) {
  const flavor = byId(DATA.flavors, meal.flavorId);
  const protein = byId(DATA.proteins, meal.proteinId);
  return flavor.name + " · " + protein.name;
}

function formatGrams(value) {
  const rounded = Math.round(value);
  return rounded + " g";
}

function ingredientRows(meal) {
  const scale = state.scale;
  const rows = [
    [byId(DATA.proteins, meal.proteinId).name, meal.proteinGrams * scale],
    [byId(DATA.carbs, meal.carbId).name, meal.carbGrams * scale]
  ];

  meal.vegetableIds.forEach(function (id) {
    rows.push([byId(DATA.vegetables, id).name, meal.vegetableGramsEach * scale]);
  });

  if (meal.oil) rows.push([OIL.name, OIL.grams * scale]);
  return rows;
}

function renderMeal() {
  const meal = state.meal;
  if (!meal) return;

  el.title.textContent = mealName(meal);
  el.kcal.textContent = Math.round(meal.kcal * state.scale);
  el.proteinResult.textContent = (meal.protein * state.scale).toFixed(1);

  const kcalDelta = Math.round(meal.kcal - meal.calorieTarget);
  const proteinOkay = meal.protein >= meal.proteinTarget;
  const calorieOkay = Math.abs(kcalDelta) <= 15;

  el.status.className = "status " + (proteinOkay && calorieOkay ? "good" : "warn");
  if (proteinOkay && calorieOkay) {
    el.status.textContent = "Ziel getroffen · " + (kcalDelta >= 0 ? "+" : "") + kcalDelta + " kcal";
  } else if (!proteinOkay) {
    el.status.textContent = "Mit dieser Kombination sind " + meal.proteinTarget + " g Protein im sinnvollen Portionsbereich nicht erreichbar.";
  } else {
    el.status.textContent = "Nächste sinnvolle Portion · " + (kcalDelta >= 0 ? "+" : "") + kcalDelta + " kcal zum Ziel";
  }

  el.ingredients.innerHTML = "";
  ingredientRows(meal).forEach(function (row) {
    const li = document.createElement("li");
    const name = document.createElement("span");
    const amount = document.createElement("span");
    name.textContent = row[0];
    amount.textContent = formatGrams(row[1]);
    amount.className = "amount";
    li.append(name, amount);
    el.ingredients.append(li);
  });

  el.spices.innerHTML = "";
  byId(DATA.flavors, meal.flavorId).spices.forEach(function (spice) {
    const li = document.createElement("li");
    li.textContent = state.scale === 4 ? "×4 · " + spice : spice;
    el.spices.append(li);
  });

  document.querySelectorAll("[data-scale]").forEach(function (button) {
    button.classList.toggle("active", Number(button.dataset.scale) === state.scale);
  });

  updateFavoriteButton();
}

function setupVegetables() {
  DATA.vegetables.forEach(function (vegetable) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.dataset.id = vegetable.id;
    button.textContent = vegetable.name;
    button.addEventListener("click", function () {
      const selected = state.vegetables.includes(vegetable.id);
      if (selected && state.vegetables.length === 1) return;
      if (!selected && state.vegetables.length === 4) return;

      state.vegetables = selected
        ? state.vegetables.filter(function (id) { return id !== vegetable.id; })
        : state.vegetables.concat(vegetable.id);

      syncVegetableChips();
      calculateMeal();
    });
    el.vegetables.append(button);
  });
  syncVegetableChips();
}

function syncVegetableChips() {
  document.querySelectorAll(".chip").forEach(function (button) {
    button.classList.toggle("selected", state.vegetables.includes(button.dataset.id));
  });
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomize() {
  el.protein.value = randomItem(DATA.proteins).id;
  el.carb.value = randomItem(DATA.carbs).id;
  el.flavor.value = randomItem(DATA.flavors).id;
  renderFlavorDescription();

  const shuffled = DATA.vegetables.slice().sort(function () { return Math.random() - 0.5; });
  const count = 2 + Math.floor(Math.random() * 2);
  state.vegetables = shuffled.slice(0, count).map(function (item) { return item.id; });
  syncVegetableChips();
  calculateMeal();
}

function favoriteSignature(meal) {
  return [
    meal.proteinId,
    meal.carbId,
    meal.flavorId,
    meal.vegetableIds.slice().sort().join(","),
    meal.oil,
    meal.calorieTarget,
    meal.proteinTarget
  ].join("|");
}

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(storageKey, JSON.stringify(state.favorites));
  renderFavorites();
  updateFavoriteButton();
}

function isCurrentFavorite() {
  if (!state.meal) return false;
  const signature = favoriteSignature(state.meal);
  return state.favorites.some(function (favorite) {
    return favoriteSignature(favorite) === signature;
  });
}

function updateFavoriteButton() {
  const active = isCurrentFavorite();
  el.favorite.classList.toggle("active", active);
  el.favorite.textContent = active ? "♥" : "♡";
  el.favorite.setAttribute("aria-label", active ? "Favorit entfernen" : "Als Favorit speichern");
}

function toggleFavorite() {
  if (!state.meal) return;
  const signature = favoriteSignature(state.meal);
  const index = state.favorites.findIndex(function (favorite) {
    return favoriteSignature(favorite) === signature;
  });

  if (index >= 0) state.favorites.splice(index, 1);
  else state.favorites.unshift(JSON.parse(JSON.stringify(state.meal)));

  saveFavorites();
}

function applyFavorite(meal) {
  el.protein.value = meal.proteinId;
  el.carb.value = meal.carbId;
  el.flavor.value = meal.flavorId;
  renderFlavorDescription();
  el.oil.checked = meal.oil;
  el.calories.value = meal.calorieTarget;
  el.proteinTarget.value = meal.proteinTarget;
  state.vegetables = meal.vegetableIds.slice();
  syncVegetableChips();
  calculateMeal();
  document.querySelector("#result-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderFavorites() {
  el.favoritesList.innerHTML = "";
  el.favoritesCard.hidden = state.favorites.length === 0;

  state.favorites.forEach(function (favorite, index) {
    const item = document.createElement("div");
    item.className = "favorite-item";

    const load = document.createElement("button");
    load.type = "button";
    const strong = document.createElement("strong");
    const small = document.createElement("small");
    strong.textContent = mealName(favorite);
    small.textContent = Math.round(favorite.kcal) + " kcal · " + favorite.protein.toFixed(1) + " g Protein";
    load.append(strong, small);
    load.addEventListener("click", function () { applyFavorite(favorite); });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "delete-favorite";
    remove.textContent = "×";
    remove.setAttribute("aria-label", "Favorit entfernen");
    remove.addEventListener("click", function () {
      state.favorites.splice(index, 1);
      saveFavorites();
    });

    item.append(load, remove);
    el.favoritesList.append(item);
  });
}

function init() {
  DATA.proteins.forEach(function (item) { el.protein.append(option(item)); });
  DATA.carbs.forEach(function (item) { el.carb.append(option(item)); });
  DATA.flavors.forEach(function (item) { el.flavor.append(option(item)); });

  el.protein.value = "soy";
  el.carb.value = "potato";
  el.flavor.value = "smoky-bbq";

  setupVegetables();
  renderNutritionLegend();
  renderFlavorGuide();
  renderFlavorDescription();

  el.generate.addEventListener("click", calculateMeal);
  el.randomize.addEventListener("click", randomize);
  el.favorite.addEventListener("click", toggleFavorite);

  [el.protein, el.carb, el.calories, el.proteinTarget, el.oil].forEach(function (control) {
    control.addEventListener("change", calculateMeal);
  });

  el.flavor.addEventListener("change", function () {
    renderFlavorDescription();
    calculateMeal();
  });

  document.querySelectorAll("[data-scale]").forEach(function (button) {
    button.addEventListener("click", function () {
      state.scale = Number(button.dataset.scale);
      renderMeal();
    });
  });

  el.clearFavorites.addEventListener("click", function () {
    state.favorites = [];
    saveFavorites();
  });

  renderFavorites();
  calculateMeal();
}

init();
