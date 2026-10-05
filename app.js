const DATA = {
  proteins: [
    { id: "soy", name: "Soja-Schnetzel (trocken)", kcal: 345, protein: 52, min: 40, max: 110, step: 5, preferred: 60 },
    { id: "tofu", name: "Tofu natur", kcal: 145, protein: 16, min: 120, max: 320, step: 10, preferred: 180 },
    { id: "smoked-tofu", name: "Räuchertofu", kcal: 170, protein: 19, min: 120, max: 280, step: 10, preferred: 160 },
    { id: "tempeh", name: "Tempeh", kcal: 195, protein: 20, min: 100, max: 260, step: 10, preferred: 150 },
    { id: "edamame", name: "Edamame", kcal: 122, protein: 12.1, min: 160, max: 360, step: 10, preferred: 220 },
    { id: "kidney-beans", name: "Kidneybohnen (gekocht)", kcal: 127, protein: 8.7, min: 180, max: 380, step: 10, preferred: 260 },
    { id: "black-beans", name: "Schwarze Bohnen (gekocht)", kcal: 132, protein: 8.9, min: 180, max: 380, step: 10, preferred: 260 },
    { id: "white-beans", name: "Weiße Bohnen (gekocht)", kcal: 139, protein: 9.7, min: 180, max: 360, step: 10, preferred: 250 },
    { id: "pinto-beans", name: "Pintobohnen (gekocht)", kcal: 143, protein: 9.0, min: 180, max: 360, step: 10, preferred: 250 },
    { id: "chickpeas", name: "Kichererbsen (gekocht)", kcal: 164, protein: 8.9, min: 160, max: 330, step: 10, preferred: 230 },
    { id: "lentils", name: "Linsen (gekocht)", kcal: 116, protein: 9.0, min: 180, max: 400, step: 10, preferred: 260 }
  ],
  carbs: [
    { id: "potato", name: "Kartoffeln", kcal: 77, protein: 2, min: 100, max: 450, step: 10, preferred: 250 },
    { id: "sweet-potato", name: "Süßkartoffeln", kcal: 86, protein: 1.6, min: 100, max: 400, step: 10, preferred: 220 },
    { id: "gnocchi", name: "Gnocchi (frisch)", kcal: 147, protein: 2.2, min: 80, max: 300, step: 10, preferred: 150 },
    { id: "sweet-potato-gnocchi", name: "Gnocchi mit Süßkartoffel (Bürger, frisch)", kcal: 148, protein: 2.4, min: 80, max: 300, step: 10, preferred: 150 },
    { id: "rice", name: "Reis (trocken)", kcal: 360, protein: 7.2, min: 25, max: 120, step: 5, preferred: 55 },
    { id: "wild-rice", name: "Wildreis (trocken)", kcal: 357, protein: 14.7, min: 25, max: 110, step: 5, preferred: 50 },
    { id: "quinoa", name: "Quinoa (trocken)", kcal: 368, protein: 14.1, min: 25, max: 110, step: 5, preferred: 50 },
    { id: "buckwheat", name: "Buchweizen (trocken)", kcal: 343, protein: 13.3, min: 25, max: 120, step: 5, preferred: 55 },
    { id: "millet", name: "Hirse (trocken)", kcal: 378, protein: 11.0, min: 25, max: 110, step: 5, preferred: 50 },
    { id: "amaranth", name: "Amaranth (trocken)", kcal: 371, protein: 13.6, min: 25, max: 105, step: 5, preferred: 45 },
    { id: "polenta", name: "Polenta (trocken)", kcal: 360, protein: 8.1, min: 25, max: 120, step: 5, preferred: 50 },
    { id: "gf-pasta", name: "Glutenfreie Pasta (trocken)", kcal: 350, protein: 7.0, min: 30, max: 120, step: 5, preferred: 60 },
    { id: "rice-noodles", name: "Reisnudeln (trocken)", kcal: 364, protein: 6.0, min: 25, max: 115, step: 5, preferred: 55 }
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
    { id: "asparagus", name: "Spargel", kcal: 20, protein: 2.2 },
    { id: "spinach", name: "Spinat", kcal: 23, protein: 2.9 },
    { id: "kale", name: "Grünkohl", kcal: 49, protein: 4.3 },
    { id: "leek", name: "Lauch", kcal: 61, protein: 1.5 },
    { id: "celeriac", name: "Knollensellerie", kcal: 42, protein: 1.5 },
    { id: "beetroot", name: "Rote Bete", kcal: 43, protein: 1.6 },
    { id: "pak-choi", name: "Pak Choi", kcal: 13, protein: 1.5 },
    { id: "savoy", name: "Wirsing", kcal: 27, protein: 2.0 },
    { id: "white-cabbage", name: "Weißkohl", kcal: 25, protein: 1.3 },
    { id: "kohlrabi", name: "Kohlrabi", kcal: 27, protein: 1.7 },
    { id: "sugar-snap", name: "Zuckerschoten", kcal: 42, protein: 2.8 },
    { id: "parsnip", name: "Pastinaken", kcal: 75, protein: 1.2 },
    { id: "artichoke", name: "Artischockenherzen", kcal: 47, protein: 3.3 }
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
    { id: "umami", name: "Umami", description: "Tief herzhaft und würzig mit Miso, Tamari und Pilzaromen.", spices: ["1 EL glutenfreies Tamari", "1 TL glutenfreies Miso", "Knoblauch & Pfeffer", "Pilzpulver nach Geschmack"] },
    { id: "cajun", name: "Cajun", description: "Würzig, pfeffrig und leicht scharf mit Paprika, Thymian und Oregano.", spices: ["1 TL Paprika", "½ TL Thymian", "½ TL Oregano", "Knoblauchpulver", "Cayenne, Pfeffer & Salz"] },
    { id: "ras-el-hanout", name: "Ras el Hanout", description: "Warm, orientalisch und komplex mit Kreuzkümmel, Koriander, Zimt und Kurkuma.", spices: ["1 TL Ras el Hanout", "½ TL Kreuzkümmel", "½ TL Paprika", "Knoblauch", "Zitronensaft & Salz"] },
    { id: "zaatar", name: "Za’atar", description: "Kräutrig, säuerlich und leicht nussig durch Thymian, Sumach und Sesam.", spices: ["1½ TL Za’atar", "Knoblauch", "Zitronensaft", "Pfeffer & Salz"] },
    { id: "mustard-herbs", name: "Senf-Kräuter", description: "Herzhaft, leicht säuerlich und kräutrig; besonders passend zu Kartoffeln und Ofengemüse.", spices: ["1 TL glutenfreier Senf", "Dill oder Petersilie", "Knoblauch", "Zitronensaft", "Pfeffer & Salz"] }
  ]
};

// Representative seasoning values per 100 g; miso reference: ARCHE Shiro Miso.
const SEASONINGS = [
  { id: "miso", name: "Glutenfreie Miso-Paste", kcal: 179, protein: 7.6, grams: 7 },
  { id: "tamari", name: "Glutenfreies Tamari", kcal: 60, protein: 10, grams: 15 },
  { id: "sesame", name: "Sesam", kcal: 573, protein: 18, grams: 3 },
  { id: "sugar", name: "Zucker", kcal: 400, protein: 0, grams: 4 },
  { id: "harissa", name: "Harissa-Paste", kcal: 100, protein: 2, grams: 10 },
  { id: "mustard", name: "Glutenfreier Senf", kcal: 100, protein: 6, grams: 5 },
  { id: "zaatar", name: "Za’atar", kcal: 400, protein: 12, grams: 5 },
  { id: "spice-mix", name: "Trockene Gewürze / Kräuter", kcal: 300, protein: 10, grams: 5 },
  { id: "garlic", name: "Knoblauch", kcal: 149, protein: 6.4, grams: 3 },
  { id: "ginger", name: "Ingwer", kcal: 80, protein: 1.8, grams: 3 },
  { id: "lemon", name: "Zitronen- / Limettensaft", kcal: 22, protein: 0.4, grams: 10 },
  { id: "vinegar", name: "Reisessig", kcal: 20, protein: 0, grams: 5 },
  { id: "mushroom-powder", name: "Pilzpulver", kcal: 300, protein: 25, grams: 2 }
];

function defaultSeasonings(flavor) {
  const recipes = {
    "smoky-bbq": [["spice-mix", 9]],
    mediterranean: [["spice-mix", 2], ["garlic", 3], ["lemon", 10]],
    mexican: [["spice-mix", 5], ["garlic", 3], ["lemon", 10]],
    curry: [["spice-mix", 7], ["garlic", 3], ["ginger", 3]],
    tandoori: [["spice-mix", 5], ["garlic", 3], ["ginger", 3], ["lemon", 10]],
    shawarma: [["spice-mix", 7], ["garlic", 3]],
    harissa: [["harissa", 10], ["spice-mix", 1], ["garlic", 3], ["lemon", 10]],
    teriyaki: [["tamari", 15], ["garlic", 3], ["ginger", 3], ["vinegar", 5], ["sugar", 4]],
    "miso-sesame": [["miso", 7], ["tamari", 5], ["ginger", 3], ["vinegar", 5], ["sesame", 3]],
    "lemon-pepper": [["spice-mix", 2], ["garlic", 3], ["lemon", 15]],
    herbs: [["spice-mix", 2], ["garlic", 3], ["lemon", 10]],
    umami: [["miso", 7], ["tamari", 15], ["garlic", 3], ["spice-mix", 1], ["mushroom-powder", 2]],
    cajun: [["spice-mix", 6]],
    "ras-el-hanout": [["spice-mix", 5], ["garlic", 3], ["lemon", 10]],
    zaatar: [["zaatar", 5], ["garlic", 3], ["lemon", 10]],
    "mustard-herbs": [["mustard", 5], ["spice-mix", 2], ["garlic", 3], ["lemon", 10]]
  };
  return (recipes[flavor.id] || []).map(function (entry) { return { id: entry[0], grams: entry[1] }; });
}

function seasoningNutrition(entries) {
  return entries.reduce(function (sum, entry) {
    const values = nutrition(byId(SEASONINGS, entry.id), entry.grams);
    sum.kcal += values.kcal;
    sum.protein += values.protein;
    return sum;
  }, { kcal: 0, protein: 0 });
}

const OIL = { name: "Öl", grams: 5, kcal: 884, protein: 0 };
const VEG_TOTAL = 300;
const favoriteStorageKey = "mealblocks-favorites-v1";
const preferenceStorageKey = "mealblocks-preferences-v1";

function defaultPreferences() {
  return {
    pantryEnabled: false,
    unavailableVegetables: [],
    dislikes: { proteins: [], carbs: [], vegetables: [], flavors: [] }
  };
}

function loadPreferences() {
  const defaults = defaultPreferences();
  try {
    const saved = JSON.parse(localStorage.getItem(preferenceStorageKey) || "{}");
    return {
      pantryEnabled: Boolean(saved.pantryEnabled),
      unavailableVegetables: Array.isArray(saved.unavailableVegetables) ? saved.unavailableVegetables : [],
      dislikes: {
        proteins: Array.isArray(saved.dislikes?.proteins) ? saved.dislikes.proteins : [],
        carbs: Array.isArray(saved.dislikes?.carbs) ? saved.dislikes.carbs : [],
        vegetables: Array.isArray(saved.dislikes?.vegetables) ? saved.dislikes.vegetables : [],
        flavors: Array.isArray(saved.dislikes?.flavors) ? saved.dislikes.flavors : []
      }
    };
  } catch {
    return defaults;
  }
}

const state = {
  vegetables: ["broccoli", "pepper"],
  meal: null,
  scale: 1,
  favorites: loadFavorites(),
  preferences: loadPreferences()
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
  flavorGuide: document.querySelector("#flavor-guide"),
  pantryToggle: document.querySelector("#pantry-toggle"),
  pantryPanel: document.querySelector("#pantry-panel"),
  pantryVegetables: document.querySelector("#pantry-vegetable-chips"),
  pantryAll: document.querySelector("#pantry-all"),
  pantryNone: document.querySelector("#pantry-none"),
  dislikeProteins: document.querySelector("#dislike-proteins"),
  dislikeCarbs: document.querySelector("#dislike-carbs"),
  dislikeVegetables: document.querySelector("#dislike-vegetables"),
  dislikeFlavors: document.querySelector("#dislike-flavors"),
  resetPreferences: document.querySelector("#reset-preferences")
};

function byId(list, id) {
  return list.find(function (item) { return item.id === id; });
}

function nutrition(item, grams) {
  return { kcal: item.kcal * grams / 100, protein: item.protein * grams / 100 };
}

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.map(function (meal) {
      meal.seasonings = meal.seasonings || defaultSeasonings(byId(DATA.flavors, meal.flavorId));
      recalculateTotals(meal);
      return meal;
    });
  }
  catch { return []; }
}

function savePreferences() {
  localStorage.setItem(preferenceStorageKey, JSON.stringify(state.preferences));
}

function isDisliked(category, id) {
  return state.preferences.dislikes[category].includes(id);
}

function allowedItems(category) {
  return DATA[category].filter(function (item) { return !isDisliked(category, item.id); });
}

function allowedVegetables() {
  return DATA.vegetables.filter(function (item) {
    if (isDisliked("vegetables", item.id)) return false;
    if (state.preferences.pantryEnabled && state.preferences.unavailableVegetables.includes(item.id)) return false;
    return true;
  });
}

function refillSelect(select, items, previousValue) {
  select.innerHTML = "";
  items.forEach(function (item) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    select.append(option);
  });
  if (items.some(function (item) { return item.id === previousValue; })) select.value = previousValue;
  select.disabled = items.length === 0;
}

function renderFlavorDescription() {
  const flavor = byId(DATA.flavors, el.flavor.value);
  el.flavorDescription.textContent = flavor ? flavor.description : "Keine Geschmacksrichtung verfügbar.";
}

function renderNutritionLegend() {
  const groups = [
    ["Proteinquellen", DATA.proteins],
    ["Kohlenhydrate", DATA.carbs],
    ["Gemüse", DATA.vegetables],
    ["Würzung (Richtwerte)", SEASONINGS]
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

function renderPantryChips() {
  el.pantryToggle.checked = state.preferences.pantryEnabled;
  el.pantryPanel.hidden = !state.preferences.pantryEnabled;
  el.pantryVegetables.innerHTML = DATA.vegetables.map(function (vegetable) {
    const available = !state.preferences.unavailableVegetables.includes(vegetable.id);
    const disliked = isDisliked("vegetables", vegetable.id);
    return "<button type=\"button\" class=\"chip pantry-chip " +
      (available ? "selected " : "") + (disliked ? "excluded" : "") +
      "\" data-pantry-id=\"" + vegetable.id + "\">" + vegetable.name + "</button>";
  }).join("");
}

function renderDislikeGroup(container, category) {
  container.innerHTML = DATA[category].map(function (item) {
    const disliked = isDisliked(category, item.id);
    return "<button type=\"button\" class=\"chip dislike-chip " + (disliked ? "disliked" : "") +
      "\" data-dislike-category=\"" + category + "\" data-dislike-id=\"" + item.id + "\">" +
      item.name + "</button>";
  }).join("");
}

function renderPreferenceControls() {
  renderPantryChips();
  renderDislikeGroup(el.dislikeProteins, "proteins");
  renderDislikeGroup(el.dislikeCarbs, "carbs");
  renderDislikeGroup(el.dislikeVegetables, "vegetables");
  renderDislikeGroup(el.dislikeFlavors, "flavors");
}

function renderVegetableChoices() {
  const available = allowedVegetables();
  state.vegetables = state.vegetables.filter(function (id) {
    return available.some(function (vegetable) { return vegetable.id === id; });
  }).slice(0, 4);

  if (!state.vegetables.length && available.length) {
    state.vegetables = available.slice(0, Math.min(2, available.length)).map(function (item) { return item.id; });
  }

  if (!available.length) {
    el.vegetables.innerHTML = '<span class="empty-state">Kein Gemüse verfügbar – passe Vorrat oder Vorlieben an.</span>';
    return;
  }

  el.vegetables.innerHTML = available.map(function (vegetable) {
    return "<button type=\"button\" class=\"chip " +
      (state.vegetables.includes(vegetable.id) ? "selected" : "") +
      "\" data-builder-veg=\"" + vegetable.id + "\">" + vegetable.name + "</button>";
  }).join("");
}

function refreshBuilder() {
  const oldProtein = el.protein.value || "soy";
  const oldCarb = el.carb.value || "potato";
  const oldFlavor = el.flavor.value || "smoky-bbq";

  refillSelect(el.protein, allowedItems("proteins"), oldProtein);
  refillSelect(el.carb, allowedItems("carbs"), oldCarb);
  refillSelect(el.flavor, allowedItems("flavors"), oldFlavor);
  renderVegetableChoices();
  renderPreferenceControls();
  renderFlavorDescription();

  if (!el.protein.value || !el.carb.value || !el.flavor.value || !allowedVegetables().length) {
    renderUnavailable("Keine gültige Kombination mit deinen aktuellen Vorrats- und Vorlieben-Einstellungen.");
    return;
  }
  calculateMeal();
}

function selectedVegetables() {
  return state.vegetables.map(function (id) { return byId(DATA.vegetables, id); }).filter(Boolean);
}

function vegetableNutrition(vegetables) {
  const gramsEach = VEG_TOTAL / vegetables.length;
  return vegetables.reduce(function (sum, vegetable) {
    const value = nutrition(vegetable, gramsEach);
    sum.kcal += value.kcal;
    sum.protein += value.protein;
    return sum;
  }, { kcal: 0, protein: 0, gramsEach: gramsEach });
}

function scoreCandidate(candidate, calorieTarget, proteinTarget, proteinSource, carbSource) {
  const calorieDifference = Math.abs(candidate.kcal - calorieTarget);
  const outsideRange = Math.max(0, Math.abs(candidate.protein - proteinTarget) - 5);
  const portionPenalty =
    Math.abs(candidate.proteinGrams - proteinSource.preferred) * 0.025 +
    Math.abs(candidate.carbGrams - carbSource.preferred) * 0.015;
  // Prefer the requested protein band, then calories, then its center.
  return (outsideRange > 1e-9 ? 1000000 : 0) + outsideRange * 10000 + calorieDifference * 2 +
    Math.abs(candidate.protein - proteinTarget) * 0.5 + portionPenalty;
}

function buildMeal(proteinSource, carbSource, flavor, vegetables, calorieTarget, proteinTarget, useOil) {
  if (!proteinSource || !carbSource || !flavor || !vegetables.length) return null;

  const vegetableValues = vegetableNutrition(vegetables);
  const oilValues = useOil ? nutrition(OIL, OIL.grams) : { kcal: 0, protein: 0 };
  const seasonings = defaultSeasonings(flavor);
  const seasoningValues = seasoningNutrition(seasonings);
  const carbMax = Math.max(carbSource.max, Math.min(carbSource.max * 2,
    Math.ceil(calorieTarget * 100 / carbSource.kcal / carbSource.step) * carbSource.step));
  let best = null;

  for (let proteinGrams = proteinSource.step; proteinGrams <= proteinSource.max; proteinGrams += proteinSource.step) {
    for (let carbGrams = carbSource.min; carbGrams <= carbMax; carbGrams += carbSource.step) {
      const p = nutrition(proteinSource, proteinGrams);
      const c = nutrition(carbSource, carbGrams);
      const candidate = {
        proteinGrams: proteinGrams,
        carbGrams: carbGrams,
        kcal: p.kcal + c.kcal + vegetableValues.kcal + oilValues.kcal + seasoningValues.kcal,
        protein: p.protein + c.protein + vegetableValues.protein + oilValues.protein + seasoningValues.protein
      };
      candidate.score = scoreCandidate(candidate, calorieTarget, proteinTarget, proteinSource, carbSource);
      if (!best || candidate.score < best.score) best = candidate;
    }
  }

  return {
    proteinId: proteinSource.id,
    carbId: carbSource.id,
    flavorId: flavor.id,
    vegetableIds: vegetables.map(function (item) { return item.id; }),
    oil: useOil,
    seasonings: seasonings,
    calorieTarget: calorieTarget,
    proteinTarget: proteinTarget,
    proteinGrams: best.proteinGrams,
    carbGrams: best.carbGrams,
    vegetableGramsEach: vegetableValues.gramsEach,
    kcal: best.kcal,
    protein: best.protein,
    score: best.score
  };
}

function calculateMeal() {
  const meal = buildMeal(
    byId(DATA.proteins, el.protein.value),
    byId(DATA.carbs, el.carb.value),
    byId(DATA.flavors, el.flavor.value),
    selectedVegetables(),
    Number(el.calories.value) || 500,
    Number(el.proteinTarget.value) || 30,
    el.oil.checked
  );

  if (!meal) {
    renderUnavailable("Keine gültige Kombination verfügbar.");
    return;
  }

  state.meal = meal;
  state.scale = 1;
  renderMeal();
}

function renderUnavailable(message) {
  state.meal = null;
  el.title.textContent = "Keine Kombination";
  el.kcal.textContent = "—";
  el.proteinResult.textContent = "—";
  el.status.className = "status warn";
  el.status.textContent = message;
  el.ingredients.innerHTML = "";
  el.spices.innerHTML = "";
  el.favorite.classList.remove("active");
  el.favorite.textContent = "♡";
}

function mealName(meal) {
  const flavor = byId(DATA.flavors, meal.flavorId);
  const protein = byId(DATA.proteins, meal.proteinId);
  return (flavor ? flavor.name : "Meal") + " · " + (protein ? protein.name : "Protein");
}

function mealRows(meal) {
  const rows = [
    { key: "protein", item: byId(DATA.proteins, meal.proteinId), grams: meal.proteinGrams },
    { key: "carb", item: byId(DATA.carbs, meal.carbId), grams: meal.carbGrams }
  ];
  meal.vegetableIds.forEach(function (id) {
    rows.push({ key: "veg:" + id, item: byId(DATA.vegetables, id),
      grams: meal.vegetableGrams?.[id] ?? meal.vegetableGramsEach });
  });
  if (meal.oil) rows.push({ key: "oil", item: OIL, grams: meal.oilGrams ?? OIL.grams });
  (meal.seasonings || []).forEach(function (entry) {
    rows.push({ key: "seasoning:" + entry.id, item: byId(SEASONINGS, entry.id), grams: entry.grams });
  });
  return rows;
}

function recalculateTotals(meal) {
  meal.kcal = 0;
  meal.protein = 0;
  mealRows(meal).forEach(function (row) {
    const values = nutrition(row.item, row.grams);
    meal.kcal += values.kcal;
    meal.protein += values.protein;
  });
}

function setMealAmount(meal, key, grams) {
  if (key === "protein") meal.proteinGrams = grams;
  else if (key === "carb") meal.carbGrams = grams;
  else if (key === "oil") meal.oilGrams = grams;
  else if (key.startsWith("veg:")) {
    meal.vegetableGrams = meal.vegetableGrams || {};
    meal.vegetableGrams[key.slice(4)] = grams;
  } else {
    const entry = meal.seasonings.find(function (entry) { return entry.id === key.slice(10); });
    if (entry) entry.grams = grams;
  }
}

function rebalanceMeal(meal, changedKey, displayedGrams, scale) {
  if (!Number.isFinite(displayedGrams) || displayedGrams < 0) return false;
  setMealAmount(meal, changedKey, displayedGrams / scale);
  recalculateTotals(meal);
  const balanceKey = changedKey === "carb" ? "protein" : "carb";
  const row = mealRows(meal).find(function (row) { return row.key === balanceKey; });
  // Keep the user's amount; only the counterpart compensates calories.
  const grams = Math.max(0, row.grams + (meal.calorieTarget - meal.kcal) * 100 / row.item.kcal);
  setMealAmount(meal, balanceKey, Math.round(grams * 10) / 10);
  recalculateTotals(meal);
  return true;
}

function renderAmountRow(row, container) {
  const li = document.createElement("li");
  const label = document.createElement("label");
  label.className = "amount-row";
  const name = document.createElement("span");
  name.textContent = row.item.name;
  const amount = document.createElement("span");
  amount.className = "amount-control";
  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.step = row.key === "protein" || row.key === "carb" ? "5" : "1";
  input.value = String(Math.round(row.grams * state.scale * 10) / 10);
  input.setAttribute("aria-label", row.item.name + " in Gramm für " + state.scale + " Portionen");
  input.addEventListener("change", function () {
    if (input.value.trim() && rebalanceMeal(state.meal, row.key, Number(input.value), state.scale)) renderMeal();
    else input.value = String(Math.round(row.grams * state.scale * 10) / 10);
  });
  amount.append(input, document.createTextNode(" g"));
  label.append(name, amount);
  li.append(label);
  container.append(li);
}

function renderMeal() {
  const meal = state.meal;
  if (!meal) return;

  el.title.textContent = mealName(meal);
  el.kcal.textContent = Math.round(meal.kcal * state.scale);
  el.proteinResult.textContent = (meal.protein * state.scale).toFixed(1).replace(".", ",");

  const kcalDelta = Math.round(meal.kcal - meal.calorieTarget);
  const proteinOkay = Math.abs(meal.protein - meal.proteinTarget) <= 5 + 1e-9;
  const calorieOkay = Math.abs(kcalDelta) <= 15;

  el.status.className = "status " + (proteinOkay && calorieOkay ? "good" : "warn");
  if (proteinOkay && calorieOkay) {
    el.status.textContent = "Ziel getroffen · " + (kcalDelta >= 0 ? "+" : "") + kcalDelta + " kcal";
  } else if (!proteinOkay) {
    el.status.textContent = "Protein außerhalb des Zielbereichs " + (meal.proteinTarget - 5) + "–" + (meal.proteinTarget + 5) + " g pro Portion · " + (kcalDelta >= 0 ? "+" : "") + kcalDelta + " kcal. Mengen anpassen oder Kombination wechseln.";
  } else {
    el.status.textContent = "Nächste sinnvolle Portion · " + (kcalDelta >= 0 ? "+" : "") + kcalDelta + " kcal zum Ziel";
  }

  el.ingredients.innerHTML = "";
  el.spices.innerHTML = "";
  mealRows(meal).forEach(function (row) {
    renderAmountRow(row, row.key.startsWith("seasoning:") ? el.spices : el.ingredients);
  });
  const flavor = byId(DATA.flavors, meal.flavorId);
  document.querySelector("#seasoning-guide").textContent = "Würzidee: " + flavor.spices.join(" · ") +
    ". Berechnet werden die Gramm-Mengen oben; Salz nach Geschmack.";
  const seasoningSelect = document.querySelector("#seasoning-select");
  seasoningSelect.innerHTML = "";
  SEASONINGS.filter(function (item) {
    return !(meal.seasonings || []).some(function (entry) { return entry.id === item.id; });
  }).forEach(function (item) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    seasoningSelect.append(option);
  });
  document.querySelector("#add-seasoning").disabled = !seasoningSelect.options.length;

  document.querySelectorAll("[data-scale]").forEach(function (button) {
    button.classList.toggle("active", Number(button.dataset.scale) === state.scale);
  });

  updateFavoriteButton();
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffled(list) {
  return list.slice().sort(function () { return Math.random() - 0.5; });
}

function smartGenerate() {
  const proteins = allowedItems("proteins");
  const carbs = allowedItems("carbs");
  const flavors = allowedItems("flavors");
  const vegetables = allowedVegetables();

  if (!proteins.length || !carbs.length || !flavors.length || !vegetables.length) {
    renderUnavailable("Für ein passendes Meal fehlt mindestens eine verfügbare Zutaten-Kategorie.");
    return;
  }

  const targetKcal = Number(el.calories.value) || 500;
  const targetProtein = Number(el.proteinTarget.value) || 30;
  const candidates = [];

  for (let i = 0; i < 120; i += 1) {
    const count = Math.min(vegetables.length, 2 + Math.floor(Math.random() * 3));
    const vegSelection = shuffled(vegetables).slice(0, Math.max(1, count));
    const protein = randomItem(proteins);
    const carb = randomItem(carbs);
    const flavor = randomItem(flavors);
    const meal = buildMeal(protein, carb, flavor, vegSelection, targetKcal, targetProtein, el.oil.checked);
    if (meal) candidates.push(meal);
  }

  candidates.sort(function (a, b) { return a.score - b.score; });
  const shortlist = candidates.slice(0, Math.min(8, candidates.length));
  const meal = randomItem(shortlist);

  el.protein.value = meal.proteinId;
  el.carb.value = meal.carbId;
  el.flavor.value = meal.flavorId;
  state.vegetables = meal.vegetableIds.slice();
  state.meal = meal;
  state.scale = 1;

  renderVegetableChoices();
  renderFlavorDescription();
  renderMeal();
}

function favoriteSignature(meal) {
  return [
    meal.proteinId,
    meal.carbId,
    meal.flavorId,
    meal.vegetableIds.slice().sort().join(","),
    meal.oil,
    meal.calorieTarget,
    meal.proteinTarget,
    meal.proteinGrams,
    meal.carbGrams,
    JSON.stringify(meal.vegetableGrams || {}),
    meal.oilGrams ?? OIL.grams,
    JSON.stringify(meal.seasonings || [])
  ].join("|");
}

function saveFavorites() {
  localStorage.setItem(favoriteStorageKey, JSON.stringify(state.favorites));
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

function favoriteAllowed(meal) {
  if (isDisliked("proteins", meal.proteinId) || isDisliked("carbs", meal.carbId) || isDisliked("flavors", meal.flavorId)) return false;
  return meal.vegetableIds.every(function (id) {
    if (isDisliked("vegetables", id)) return false;
    if (state.preferences.pantryEnabled && state.preferences.unavailableVegetables.includes(id)) return false;
    return true;
  });
}

function applyFavorite(meal) {
  if (!favoriteAllowed(meal)) {
    renderUnavailable("Dieser Favorit enthält aktuell ausgeschlossene oder nicht vorrätige Zutaten.");
    return;
  }

  el.protein.value = meal.proteinId;
  el.carb.value = meal.carbId;
  el.flavor.value = meal.flavorId;
  el.oil.checked = meal.oil;
  el.calories.value = meal.calorieTarget;
  el.proteinTarget.value = meal.proteinTarget;
  state.vegetables = meal.vegetableIds.slice();
  renderVegetableChoices();
  renderFlavorDescription();
  state.meal = JSON.parse(JSON.stringify(meal));
  state.meal.seasonings = state.meal.seasonings || defaultSeasonings(byId(DATA.flavors, meal.flavorId));
  state.scale = 1;
  recalculateTotals(state.meal);
  renderMeal();
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
    small.textContent = Math.round(favorite.kcal) + " kcal · " + favorite.protein.toFixed(1).replace(".", ",") + " g Protein";
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

function togglePantryVegetable(id) {
  const list = state.preferences.unavailableVegetables;
  const index = list.indexOf(id);
  if (index >= 0) list.splice(index, 1);
  else list.push(id);
  savePreferences();
  refreshBuilder();
}

function toggleDislike(category, id) {
  const list = state.preferences.dislikes[category];
  const index = list.indexOf(id);
  if (index >= 0) list.splice(index, 1);
  else list.push(id);
  savePreferences();
  refreshBuilder();
}

function init() {
  renderNutritionLegend();
  renderFlavorGuide();
  renderPreferenceControls();
  refreshBuilder();

  document.querySelector("#add-seasoning").addEventListener("click", function () {
    if (!state.meal) return;
    const item = byId(SEASONINGS, document.querySelector("#seasoning-select").value);
    if (!item || state.meal.seasonings.some(function (entry) { return entry.id === item.id; })) return;
    state.meal.seasonings.push({ id: item.id, grams: 0 });
    rebalanceMeal(state.meal, "seasoning:" + item.id, item.grams * state.scale, state.scale);
    renderMeal();
  });

  el.generate.addEventListener("click", calculateMeal);
  el.randomize.addEventListener("click", smartGenerate);
  el.favorite.addEventListener("click", toggleFavorite);

  [el.protein, el.carb, el.calories, el.proteinTarget, el.oil].forEach(function (control) {
    control.addEventListener("change", calculateMeal);
  });

  el.flavor.addEventListener("change", function () {
    renderFlavorDescription();
    calculateMeal();
  });

  el.vegetables.addEventListener("click", function (event) {
    const button = event.target.closest("[data-builder-veg]");
    if (!button) return;
    const id = button.dataset.builderVeg;
    const selected = state.vegetables.includes(id);

    if (selected && state.vegetables.length === 1) return;
    if (!selected && state.vegetables.length === 4) return;

    state.vegetables = selected
      ? state.vegetables.filter(function (item) { return item !== id; })
      : state.vegetables.concat(id);

    renderVegetableChoices();
    calculateMeal();
  });

  el.pantryToggle.addEventListener("change", function () {
    state.preferences.pantryEnabled = el.pantryToggle.checked;
    savePreferences();
    refreshBuilder();
  });

  el.pantryVegetables.addEventListener("click", function (event) {
    const button = event.target.closest("[data-pantry-id]");
    if (button) togglePantryVegetable(button.dataset.pantryId);
  });

  el.pantryAll.addEventListener("click", function () {
    state.preferences.unavailableVegetables = [];
    savePreferences();
    refreshBuilder();
  });

  el.pantryNone.addEventListener("click", function () {
    state.preferences.unavailableVegetables = DATA.vegetables.map(function (item) { return item.id; });
    savePreferences();
    refreshBuilder();
  });

  [el.dislikeProteins, el.dislikeCarbs, el.dislikeVegetables, el.dislikeFlavors].forEach(function (container) {
    container.addEventListener("click", function (event) {
      const button = event.target.closest("[data-dislike-id]");
      if (button) toggleDislike(button.dataset.dislikeCategory, button.dataset.dislikeId);
    });
  });

  el.resetPreferences.addEventListener("click", function () {
    state.preferences = defaultPreferences();
    savePreferences();
    refreshBuilder();
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
}

init();
