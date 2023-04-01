
const operations = ['+', '-', '*']

function generateNumber() {
  const multiplier = [10, 100]
  const index = parseInt(`${((Math.random() * 10) / 2) % 2}`)
  return parseInt(`${Math.random() * multiplier[index]}`)
}

function getOperator() {
  const index = parseInt(`${((Math.random() % 0.33) * 10) % 3}`)
  return operations[index]
}

function calculateAnswer(number1, operator, number2) {
  switch (operator) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
  }
}

function prepareQuestion() {
  const number1Div = document.querySelector('#number1')
  const number2Div = document.querySelector('#number2')
  const operatorDiv = document.querySelector('#operator')
  const answerInput = document.querySelector('#answer')
  const correctAnswerInput = document.querySelector('#correct-answer')

  const [number2, number1] = [generateNumber(), generateNumber()].sort()
  const operator = getOperator()
  const correctAnswer = calculateAnswer(number1, operator, number2)

  number1Div.innerHTML = number1
  number2Div.innerHTML = number2
  operatorDiv.innerHTML = operator
  correctAnswerInput.value = correctAnswer
  answerInput.value = ''
  answerInput.placeholder = '0'
  setAnswerStatus()
}

function setAnswerStatus(status) {
  const answerInput = document.querySelector('#answer')
  switch(status) {
    case 'correct':
      answerInput.classList.remove('incorrect')
      answerInput.classList.add('correct')
      break;
    case 'incorrect':
      answerInput.classList.remove('correct')
      answerInput.classList.add('incorrect')
      break;
    default:
      answerInput.classList.remove('correct')
      answerInput.classList.remove('incorrect')
  }
}

function submit() {
  const answerInput = document.querySelector('#answer')
  const correctAnswerInput = document.querySelector('#correct-answer')
  const answer = answerInput.value
  const correctAnswer = correctAnswerInput.value
  const isCorrect = answer === correctAnswer
  setAnswerStatus(isCorrect ? 'correct' : 'incorrect')
  answerInput.placeholder = correctAnswer
}

prepareQuestion()