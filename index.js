let numberMines = Number(prompt(`Select Difficulty: 1 for I'm Too Young to Die, 2 for Give me Plenty or 3 for Nightmare`));
let n = 10;
let lastArrayNumber = n - 1;
let arr1 = Array.from(Array(n).keys())
let state = arr1.slice();
let counter = 1;

for (let i = 0; i < numberMines; i++) {
let rng = Math.floor(Math.random() * (10 - 1) + 1);
arr1[rng] = 'mine';
}

for (let i = 0; i < arr1.length; i++) {
    let position = Number(prompt(`choose a position to plant the flag from 0 to ${lastArrayNumber}`));
    state[position] = 'mine';
    if (state[position] == arr1[position]) {
        console.log(`gg you hit a mine on turn ${counter}`)
        break
    } else if (counter == (n - numberMines)){
        console.log(`gg you have won!`)      
        break
    } else {
        counter ++
    }
}