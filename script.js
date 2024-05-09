const students = [
  {
    nome: "Rastadev",
    firstTest: 7.0,
    secondTest: 8.0,
  },

  {
    nome: "Juliana",
    firstTest: 6.0,
    secondTest: 9.0,
  },

  {
    nome: "Bruno",
    firstTest: 2.0,
    secondTest: 6.0,
  },

  {
    nome: "Laura",
    firstTest: 9.0,
    secondTest: 5.5,
  },

  {
    nome: "Luiza",
    firstTest: 6.5,
    secondTest: 7.0,
  },
];

function media(firstTest, secondTest) {
  return (firstTest + secondTest) / 2;
}

function result(student) {
  return `
    A media do(a) ${student.nome} é ${media(
    student.firstTest,
    student.secondTest
  )}`;
}

for (let student of students) {
  let resultFinale = result(student);

  let mediaFinal = media(student.firstTest, student.secondTest).toFixed(2);

  if (mediaFinal >= 7) {
    alert(
      `${resultFinale} \nParabéns ${student.nome}, você foi APROVADO(A) no concurso!`
    );
  } else {
    alert(`${resultFinale} \nReprovado ${student.nome}! Tente Novamente`);
  }
}
