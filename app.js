const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      return this.secretNum
  },
  getGuess: function(){
    window.prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)

  }
}

console.log(game.play())
game.getGuess()
