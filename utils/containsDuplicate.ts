export function containsDuplicate(nums: number[]): boolean {
  const uniqueNums = new Set(nums);
  return uniqueNums.size !== nums.length;
}

const nums = [1, 2, 3, 3];
console.log(containsDuplicate(nums));

/*
アプローチの検討
① 二重ループ
配列の各要素について、残りの要素と比較
時間計算量は O(n^2) であり、効率が悪い
小さな配列には有効だが、大きな配列には不向き

② ソートして比較
配列をソートしてから隣接する要素を比較
時間計算量は O(n log n)
空間計算量はソートアルゴリズムに依存

③ ハッシュセット
配列の要素を Set に追加し、サイズを確認
重複がある場合、 Set のサイズは元の配列の長さよりも小さくなる
時間計算量は O(n) で、最も効率的
空間計算量は O(n) ですが、比較的メモリ使用量は少ない
*/