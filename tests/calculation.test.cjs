const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function runtime(favorites = []) {
  const context = vm.createContext({
    localStorage: { getItem: key => key.includes('favorites') ? JSON.stringify(favorites) : null },
    document: { querySelector: () => ({}) }
  });
  const source = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
  vm.runInContext(source.replace(/init\(\);\s*$/, ''), context);
  return expression => vm.runInContext(expression, context);
}
const meal = `buildMeal(DATA.proteins[0], DATA.carbs[0], byId(DATA.flavors, 'miso-sesame'),
  [DATA.vegetables[0], DATA.vegetables[2]], 750, 30, true)`;

test('750 kcal with soy stays within 25–35 g protein for every carbohydrate', () => {
  const run = runtime();
  const meals = run(`DATA.carbs.map(c => buildMeal(DATA.proteins[0], c, DATA.flavors[0],
    [DATA.vegetables[0], DATA.vegetables[2]], 750, 30, true))`);
  for (const result of meals) {
    assert.ok(result.protein >= 25 && result.protein <= 35, result.carbId);
    assert.ok(Math.abs(result.kcal - 750) <= 15, result.carbId);
  }
});

test('miso and sesame contribute nutrition rather than only flavor text', () => {
  const run = runtime();
  const result = run(`(() => { const m = ${meal}; recalculateTotals(m);
    const before = {kcal:m.kcal, protein:m.protein};
    m.seasonings = m.seasonings.filter(e => !['miso','sesame'].includes(e.id));
    recalculateTotals(m); return {kcal:before.kcal-m.kcal, protein:before.protein-m.protein}; })()`);
  assert.ok(Math.abs(result.kcal - (7 * 1.79 + 3 * 5.73)) < 1e-8);
  assert.ok(Math.abs(result.protein - (7 * 0.076 + 3 * 0.18)) < 1e-8);
});

test('protein and carbs compensate calories in both directions', () => {
  const run = runtime();
  const result = run(`(() => { const m = ${meal}; const carbs = m.carbGrams;
    rebalanceMeal(m, 'protein', m.proteinGrams + 10, 1);
    const afterProtein = { carbs:m.carbGrams, protein:m.proteinGrams, kcal:m.kcal };
    rebalanceMeal(m, 'carb', m.carbGrams - 20, 1);
    return { carbs, afterProtein, protein:m.proteinGrams, kcal:m.kcal }; })()`);
  assert.ok(result.afterProtein.carbs < result.carbs);
  assert.ok(result.protein > result.afterProtein.protein);
  assert.ok(Math.abs(result.afterProtein.kcal - 750) < 0.3);
  assert.ok(Math.abs(result.kcal - 750) < 0.3);
});

test('batch edits use total grams; compensation stops at zero and invalid input is rejected', () => {
  const run = runtime();
  const result = run(`(() => { const m = ${meal}; rebalanceMeal(m, 'seasoning:miso', 80, 4);
    const batch = {miso:m.seasonings.find(e=>e.id==='miso').grams, kcal:m.kcal};
    const unchanged = JSON.stringify(m);
    const invalid = rebalanceMeal(m, 'protein', -1, 1);
    const unchangedAfter = JSON.stringify(m);
    rebalanceMeal(m, 'protein', 1000, 1);
    return { batch, invalid, unchanged, unchangedAfter, carbs:m.carbGrams, kcal:m.kcal }; })()`);
  assert.equal(result.batch.miso, 20);
  assert.ok(Math.abs(result.batch.kcal - 750) < 0.3);
  assert.equal(result.invalid, false);
  assert.equal(result.unchanged, result.unchangedAfter);
  assert.equal(result.carbs, 0);
  assert.ok(result.kcal > 750);
});

test('saved edited amounts survive loading; older favorites gain seasoning nutrition', () => {
  const run = runtime();
  const edited = run(`(() => { const m = ${meal}; rebalanceMeal(m, 'protein', 45, 1); return m; })()`);
  const loaded = runtime([edited])('state.favorites[0]');
  assert.equal(loaded.proteinGrams, edited.proteinGrams);
  assert.equal(loaded.carbGrams, edited.carbGrams);
  assert.ok(Math.abs(loaded.kcal - edited.kcal) < 1e-8);
  const old = JSON.parse(JSON.stringify(edited));
  delete old.seasonings;
  const migrated = runtime([old])('state.favorites[0]');
  assert.ok(migrated.seasonings.some(e => e.id === 'miso'));
  assert.ok(Number.isFinite(migrated.kcal));
});
