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
      if (this.guess < this.biggestNum) {
        window.prompt(`Lower! Previous guesses: ${this.prevGuesses}`)
      } else if (this.guess > this.smallestNum){
        window.prompt(`Higher! Previous guesses: ${this.prevGuesses}`)
      } else {
        window.prompt(`Correct! The secret number was ${this.secretNum}!`)
      }
      prevGuesses.push(this.guess)
    } while (this.guess !== this.secretNum)
  },
  
  
  getGuess() {
    let guessTest = window.prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}.`)
    guessTest = Number(guessTest)
    while (guessTest <= game.smallestNum || guessTest >= game.biggestNum){
      guessTest = window.prompt(`Try again: Enter a guess BETWEEN ${game.smallestNum} and ${game.biggestNum}`)
      guessTest = Number(guessTest)
    } 
    this.guess = guessTest
    console.log(this.guess)
    return this.guess
    },


  render(){

  }
}

game.play()