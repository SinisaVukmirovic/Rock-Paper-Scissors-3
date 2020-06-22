const selectionBtns = document.querySelectorAll('[data-selection]');
const resultColumn = document.querySelector('[data-result-column]');
const yourScore = document.querySelector('[data-your-score]');
const compScore = document.querySelector('[data-comp-score]');

const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
];

selectionBtns.forEach(selectionBtn => {
    selectionBtn.addEventListener('click', () => {
        const selectedOption = selectionBtn.dataset.selection;

        const selection = SELECTIONS.find(selection => selection.name === selectedOption);

        makeSelection(selection);
    });
});

function makeSelection(selection) {
    const compSelection = randomSelection();
    // console.log(selection);
    // console.log(compSelection);
    const youAreWinner = isWinner(selection, compSelection);
    const compIsWinner = isWinner(compSelection, selection);

    addSelectionResult(compSelection, compIsWinner);
    addSelectionResult(selection, youAreWinner);

    if (youAreWinner) incrementScore(yourScore);
    if (compIsWinner) incrementScore(compScore);
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');

    div.innerText = selection.emoji;
    div.classList.add('past-result');

    if (winner) div.classList.add('winner');

    resultColumn.after(div);
}

function isWinner(selection, oponentsSelection) {
    return selection.beats === oponentsSelection.name;
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);

    return SELECTIONS[randomIndex];
}