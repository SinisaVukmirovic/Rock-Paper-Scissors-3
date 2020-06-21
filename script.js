const selectionBtns = document.querySelectorAll('[data-selection]');

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
    console.log(selection);
}