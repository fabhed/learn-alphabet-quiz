const nato = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'];
const swedish = ['Adam', 'Bertil', 'Cesar', 'David', 'Erik', 'Filip', 'Gustav', 'Helge', 'Ivar', 'Johan', 'Kalle', 'Ludvig', 'Martin', 'Niklas', 'Olof', 'Petter', 'Quintus', 'Rikard', 'Sigurd', 'Tore', 'Urban', 'Viktor', 'Wilhelm', 'Xerxes', 'Yngve', 'Zäta', 'Åke', 'Ärlig', 'Östen'];

let currentLetter;
let currentAnswer;
let score = 0;
let attempts = 0;

const letterEl = document.getElementById('letter');
const formEl = document.getElementById('quiz-form');
const answerEl = document.getElementById('answer');
const resultEl = document.getElementById('result');
const historyEl = document.getElementById('history');
const natoTableEl = document.getElementById('nato-table').querySelector('table');
const swedishTableEl = document.getElementById('swedish-table').querySelector('table');

function startQuiz() {
  currentLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  letterEl.textContent = currentLetter;
  answerEl.value = '';
  resultEl.textContent = '';
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  attempts++;
  if (answerEl.value.toLowerCase() === currentAnswer.toLowerCase()) {
    score++;
    resultEl.textContent = 'Correct!';
    resultEl.className = 'correct';
  } else {
    resultEl.textContent = 'Incorrect!';
    resultEl.className = 'incorrect';
  }
  historyEl.innerHTML += `<div class="${resultEl.className}">${currentLetter}: ${answerEl.value} (${Math.round(score / attempts * 100)}%)</div>`;
  startQuiz();
});

document.getElementById('nato-table').querySelector('button').addEventListener('click', () => {
  natoTableEl.classList.toggle('hidden');
});

document.getElementById('swedish-table').querySelector('button').addEventListener('click', () => {
  swedishTableEl.classList.toggle('hidden');
});

function populateTable(tableEl, words) {
  tableEl.innerHTML = '';
  for (let i = 0; i < words.length; i++) {
    const row = document.createElement('tr');
    const letterCell = document.createElement('td');
    letterCell.textContent = String.fromCharCode(65 + i);
    const wordCell = document.createElement('td');
    wordCell.textContent = words[i];
    row.appendChild(letterCell);
    row.appendChild(wordCell);
    tableEl.appendChild(row);
  }
}

populateTable(natoTableEl, nato);
populateTable(swedishTableEl, swedish);

startQuiz();
