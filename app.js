const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  guess: '',
  result: '',
  play() {
    this.secretNum = (Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum +1)) + this.smallestNum)

    do {
      //game.getGuess()
      this.prevGuesses.push(this.getGuess())
      this.render()
      } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
    //return 
  },
  
  
  getGuess() {
    let guess 
    
    while (guess < game.smallestNum || guess > game.biggestNum || isNaN(guess)){
      guess = parseInt(prompt(`Enter a guess, between ${game.smallestNum} and ${game.biggestNum}`))
    } 
    return guess
    //return this.guess = guess
    },


  render(){
    if ((this.prevGuesses[this.prevGuesses.length -1] === this.secretNum)) {
    alert (`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
    } 
    
    else {
      if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum) {
    alert (`Your guess is too high! Previous guesses: ${this.prevGuesses}`)
  } 
  
    else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum) {
    alert (`Your guess is too low. Previous guesses: ${this.prevGuesses}`)
  }
}  
  
  }
}

game.play()