function isAnagram(s: string, t: string): boolean {
  // 文字列の長さが異なる場合はアナグラムになりえない
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
}


const s1 = "racecar";
const t1 = "carrace";
console.log(isAnagram(s1, t1));

const s2 = "jar";
const t2 = "jam";
console.log(isAnagram(s2, t2));
