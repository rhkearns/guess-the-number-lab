const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
  getGuess: function() {
    let guess;
    let guessTest = window.prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
    guessTest = Number(guessTest)
    if (guessTest < game.smallestNum || guessTest > game.biggestNum){
      window.prompt(`Try again: Enter a guess BETWEEN ${game.smallestNum} and ${game.biggestNum}`)
    } else {
      guess = guessTest
    }
    console.log(guess)
    },
  render: function(){
    }
}


console.log(game.play())