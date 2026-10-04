# Mealblocks

A tiny, static meal builder for simple vegan, protein-rich meals.

Pick a protein source, carbohydrate, 1–4 vegetables and a flavor profile. Mealblocks searches reasonable portion sizes and suggests a combination close to your calorie target while meeting the requested minimum protein target when possible.

## Features

- Default target: **500 kcal / 30 g+ protein**
- Vegan ingredient set
- Gluten-free carb and seasoning choices
- 12 flavor profiles
- 300 g vegetables per serving
- Automatic portion calculation
- ×1 / ×4 meal-prep view
- Random meal generator
- Favorites stored locally in the browser
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

Favorites are stored only in `localStorage` in the current browser.

## License

MIT
