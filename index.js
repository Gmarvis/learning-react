const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
  // Write your code here
  let newgrades = []
  newgrades = grades.map((grade) => {
    let nextMultFive = Math.ceil((grade + 1) / 5) * 5;
    console.log(nextMultFive);
    // if (nextMultFive - grade < 3 && grade > 38) {
    //   grade = nextMultFive;
    // }
    
    return (nextMultFive - grade < 3 && grade > 38) ? nextMultFive : grade
  });

  console.log(newgrades);
}
gradingStudents(grades);









// function gradingStudents(grades) {
//     // Write your code here
//     return grades.map(grade => {
//         let nextMultFive = Math.ceil((grade+1)/5)*5
//         console.log(nextMultFive)
//     })

// }
// gradingStudents([73,67,38,33])
