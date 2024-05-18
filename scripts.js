function calculateResult() {
  const form = document.getElementById('questionnaire');
  const formData = new FormData(form);
  const answers = { Crvena: 0, Žuta: 0, Zelena: 0, Plava: 0 };

  formData.forEach((value) => {
    answers[value]++;
  });

  let maxCount = 0;
  let maxAnswer = '';
  for (const [key, value] of Object.entries(answers)) {
    if (value > maxCount) {
      maxCount = value;
      maxAnswer = key;
    }
  }

  // Display the result and apply the corresponding look
  const result = document.getElementById('result');
  const resultText = document.getElementById('resultText');
  const wrapperDiv = document.getElementById('wrapper');
  const resultP = document.getElementById('yourResult');
  resultP.textContent = `${maxAnswer} osobnost`;
  if (maxAnswer === 'Crvena') {
    resultText.textContent = `Vi ste motivirani, asertivni i orijentirani na rezultate. Volite preuzimati odgovornost i učinkovito postizati ciljeve.`;
  } else if (maxAnswer === 'Žuta') {
    resultText.textContent = `Entuzijastični ste, društveni i kreativni. Uživate razmišljati i inspirirati druge svojom energijom.`;
  } else if (maxAnswer === 'Zelena') {
    resultText.textContent = `Brižni ste, pružate podršku i pouzdani ste. Cijenite sklad i dobro radite u timskim okruženjima.`;
  } else if (maxAnswer === 'Plava') {
    resultText.textContent = `Vi ste analitični, orijentirani na detalje i precizni. Preferirate strukturirana okruženja i cijenite točnost i podatke.`;
  }

  result.style.display = 'block';
  wrapperDiv.style.display = 'none';

  // Apply the corresponding look
  document.body.className = maxAnswer;
}
