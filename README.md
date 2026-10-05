# Mealblocks

A tiny, static meal builder for simple vegan, protein-rich meals.

Pick a protein source, carbohydrate, 1–4 vegetables and a flavor profile. Mealblocks searches reasonable portion sizes and suggests a combination close to your calorie target while staying within ±5 g of the requested protein target when possible.

## Features

- Default target: **500 kcal / 30 ±5 g protein**
- Vegan ingredient set
- Gluten-free carb and seasoning choices, with label guidance for gnocchi
- 16 flavor profiles with short explanations
- 11 protein sources, 13 carbohydrate sources and 29 vegetables
- 300 g vegetables per serving
- Automatic portion calculation prioritizing the protein target band
- Editable ingredient amounts with automatic calorie compensation between protein and carbs
- Seasoning quantities included in calories and protein; add extra seasonings such as miso
- Edited quantities retained in favorites
- Pantry mode for vegetables currently at home
- Persistent dislike filters for proteins, carbs, vegetables and flavor profiles
- Smart meal generator that searches allowed combinations near the calorie/protein target
- ×1 / ×4 meal-prep view
- Favorites stored locally in the browser
- Nutrition reference per 100 g
- No account, backend, analytics or external API

## Nutrition data

Nutrition values are representative values per 100 g and intentionally kept simple. Brand-specific products can differ considerably, especially tofu, tempeh and soy products.

For precise calorie tracking, compare the generated meal once against the nutrition labels of the products you actually use.

Gnocchi portions refer to fresh product weight before cooking. The generic gnocchi entry uses [Bürger Kartoffel-Gnocchi](https://www.buerger.de/produkte/kartoffel-gnocchi-500g) as its nutrition reference (147 kcal / 2.2 g protein per 100 g). The preferred sweet-potato variant is [Bürger Gnocchi mit Süßkartoffel](https://www.buerger.de/produkte/gnocchi-mit-suesskartoffel-500g) (148 kcal / 2.4 g protein per 100 g). Manufacturer values checked on October 5, 2026. Both products are vegan but may contain traces of gluten; generic gnocchi can also contain wheat or egg, so check the chosen product's label.

Seasoning weights are approximate gram equivalents of the flavor suggestions. Dry spices/herbs are grouped; garlic, citrus, ginger, sauces, sesame and sugar are counted separately where used. The original teaspoon/tablespoon text is a flavor guide; the editable gram amounts determine nutrition. Miso uses [ARCHE Shiro Miso](https://www.arche-naturkueche.de/de/produkte/asiatische-spezialitaeten/miso/shiro-miso) as a reference (179 kcal / 7.6 g protein per 100 g); other seasonings use representative estimates. Actual brands can differ.

Automatic planning searches smaller protein portions and expands carbohydrate portions up to twice the original maximum for higher calorie targets. If both targets cannot be met, it prioritizes the protein band and shows the calorie difference. Manual edits keep the entered quantity and compensate calories with the other main ingredient (or carbs for vegetables, oil and seasonings). Compensation stops at zero; remaining calorie or protein deviations stay visible. ×4 inputs are total batch weights, while targets and status remain per serving. “Berechnen” restores automatic portions. Existing favorites keep their saved quantities and gain the default seasoning calculation when loaded.

## Development

There is no build step.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

Run calculation regression checks with Node.js:

```bash
node --test tests/calculation.test.cjs
```

## Deployment

The repository includes a GitHub Pages workflow. Every push to `main` deploys the static site.

## Privacy

Favorites, pantry settings and dislikes are stored only in `localStorage` in the current browser.

## License

MIT
