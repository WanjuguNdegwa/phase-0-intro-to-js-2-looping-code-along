function writeCards(arr, text) {
    return arr.map((item) => `Thank you, ${item}, for the wonderful ${text} gift!`)    
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}