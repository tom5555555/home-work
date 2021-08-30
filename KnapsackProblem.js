const main = (input) => {

  input = input.split('\n');
  const [n, W] = input[0].split(' ').map(Number);
  const items = input.slice(1).map((line) => line.split(' ').map(Number)); 
  
  // DP初期条件: dp[i][j] = 0（配列数を確保）
  let dp = [];
  for(let i=0; i<=n; i++) dp[i]=[];
  for(let j=0; j<=W; j++) dp[0][j]=0;
  for(let i=0; i<=n; i++) dp[i][0]=0;

  const valueArray = [null];
  const weightArray = [null];

  //重量と金額をまとめる（漸化式での場合分けに使用）
  items.forEach(item => {
    let [value, weight] = item;
    valueArray.push(value);
    weightArray.push(weight);  
  })

  for (let i = 1; i <= n; i++){
     // DPループ
    for (let j = 1; j <= W; j++){
      if (j >= weightArray[i]) dp[i][j] = Math.max(dp[i-1][j-weightArray[i]] + valueArray[i], dp[i-1][j]);
      else dp[i][j] = dp[i-1][j];
    }
}
    return dp[n][W];
}


module.exports = main;