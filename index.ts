// Adjust this as you want

const score = [[10, 6, 9, 1], [7, 5, 11, 2], [4, 8, 3, 15]]
const k = 0

// ---

const sortStudentsByExamScoreFirst = (score: number[][], k: number): number[][] => {
  const n = score.length;
  // We need to get indices of the students first
  const indices = [];
  for (let i = 0; i < n; i++) {
    indices.push(i);
  }
  // Then we sort the indices based on the score of the k-th exam
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (score[indices[j]][k] > score[indices[i]][k]) {
        const tmp = indices[i];
        indices[i] = indices[j];
        indices[j] = tmp;
      }
    }
  }
  // Finally, we sort the students based on the indices
  const sortedStudents: number[][] = [];
  for (let i = 0; i < n; i++) {
    sortedStudents.push(score[indices[i]]);
  }

  return sortedStudents;
}

// Or you can just use >>> Magic <<<
const sortStudentsByExamScoreSecond = (score: number[][], k: number): number[][] => { 
  return score.sort((a, b) => b[k] - a[k])
}

console.log('Algorithm 1 : ', sortStudentsByExamScoreFirst(score, k))
console.log('\nAlgorithm 2 : ', sortStudentsByExamScoreSecond(score, k))