//use rest op to accept any num of score ant return the total score
//use rest op to accept any num of score ant return the total score
function totalScore(...scores) {
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  });
  return sum;
}
//use rest op to accept any num of score ant return the total score
console.log(totalScore(1,2,3,4,54,4));