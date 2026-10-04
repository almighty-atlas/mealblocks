# Mealblocks

A tiny, static meal builder for simple vegan, protein-rich meals.

Pick a protein source, carbohydrate, 1–4 vegetables and a flavor profile. Mealblocks searches reasonable portion sizes and suggests a combination close to your calorie target while meeting the requested minimum protein target when possible.

## Features

- Default target: **500 kcal / 30 g+ protein**
- Vegan ingredient set
- Gluten-free carb and seasoning choices
- 16 flavor profiles with short explanations
- 11 protein sources, 11 carbohydrate sources and 29 vegetables
- 300 g vegetables per serving
- Automatic portion calculation
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

## Development

There is no build step.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The repository includes a GitHub Pages workflow. Every push to `main` deploys the static site.

## Privacy

Favorites, pantry settings and dislikes are stored only in `localStorage` in the current browser.

## License

MIT
