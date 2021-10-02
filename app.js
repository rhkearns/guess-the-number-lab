const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  guess: '',
  play() {
    this.secretNum = (Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum)
      
    do {
      game.getGuess()
      prevGuesses.push(this.guess)
    } while (this.guess !== this.secretNum)
  },
  
  
  getGuess() {
    let guessTest = window.prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}.`)
    guessTest = Number(guessTest)
    if (guessTest < game.smallestNum || guessTest > game.biggestNum){
      guessTest = window.prompt(`Try again: Enter a guess BETWEEN ${game.smallestNum} and ${game.biggestNum}`)
      guessTest = Number(guessTest)
    } else {
    this.guess = guessTest
    }
    console.log(this.guess)
    },


  render(){
    }
}

game.getGuess()