function solution(str1, str2) {
    return str1.endsWith(str2);
  }
  console.log(solution("abc", "bc"));
  console.log(solution("abc", "d"))



  function averages(arr) {
    return arr.map((num, i) => (num + arr[i+1]) / 2).slice(0, -1);
  }
  console.log(averages([2, -2, 2, -2, 2]));
  console.log(averages([1, 3, 5, 1, -10])); 


  function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return str.split("").filter(char => vowels.includes(char)).length;
  }
  console.log(countVowels("Celebration")); // 5
  console.log(countVowels("Palm"))



  function calculateDifference(items, policyLimit) {
    const totalValue = Object.values(items).reduce((acc, val) => acc + val, 0);
    return totalValue > policyLimit ? totalValue - policyLimit : 0;
  }
  console.log(calculateDifference({"baseball bat": 20}, 5)); 
  console.log(calculateDifference({skate: 10, painting: 20}, 19)); 
  console.log(calculateDifference({skate: 200, painting: 200, shoes: 1}, 400));