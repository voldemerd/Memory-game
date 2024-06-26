const board = document.querySelector('.board');
const gameCharacters = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
let x = [];
const shuffledCharacters = gameCharacters.sort(() => Math.random() - 0.5);

shuffledCharacters.forEach((character) => {
    const img = document.createElement('img');
    img.className = 'image';
    img.src = './assets/download.png';

    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = character;

    board.appendChild(card);
    card.style.display = 'none';
    board.appendChild(img);
    img.addEventListener('click', function () {
        img.style.display = 'none';
        card.style.display = 'flex';
        x.push(card.textContent);
        console.log(x);

        if (x.length === 2) {
            console.log('CHECK FOR MATCH');
            if (x[0] === x[1]) {
                console.log('match');
            } else {
                
            }
            x = []; // Reset the state
        }
    });
});
