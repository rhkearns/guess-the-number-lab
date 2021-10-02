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
      console.log(this.secretNum)
    game.getGuess()
    this.prevGuesses.push(this.guess)  
    do {
      if (this.guess > this.secretNum) {
        this.guess = Number(window.prompt(`Lower! Previous guesses: ${this.prevGuesses}`))
      } else if (this.guess < this.secretNum){
        this.guess = Number(window.prompt(`Higher! Previous guesses: ${this.prevGuesses}`))
      } else {
        this.render()
        break;
      }
      this.prevGuesses.push(this.guess)
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
    console.log(`Correct! You guessed the number in ${this.prevGuesses.length} guess!`)
  }
}

game.play()