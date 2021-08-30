const KnapsackProblem = require('./KnapsackProblem');

//共通　1 < n <= 100, weight[i],value[i]は整数, 1 <= weight[i],value[i] <= 1000, 1 <= W <= 10000
//テストケース1 
test('KnapsackProblemTest',  () => {
  expect(KnapsackProblem(require("fs").readFileSync("./input.txt", "utf8").trim())).toBe(9);
});

//テストケース2 (N = 100)
test('KnapsackProblemTest2',  () => {
  expect(KnapsackProblem(require("fs").readFileSync("./input2.txt", "utf8").trim())).toBe(12180);
});


