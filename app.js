const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  guess: '',
  result: '',
  play() {
    this.setRange()

    this.secretNum = (Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum)

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
    this.biggestNum = this.prevGuesses[this.prevGuesses.length -1]
      } 
  
    else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum) {
    alert (`Your guess is too low. Previous guesses: ${this.prevGuesses}`)
    this.smallestNum = this.prevGuesses[this.prevGuesses.length -1]
      }   
    }  
  
  },

  setRange(){
    while (this.smallestNum >= this.biggestNum || isNaN(this.smallestNum) || isNaN(this.biggestNum)){
      this.smallestNum = parseInt(prompt('Please enter the lower end of the range.'))
      this.biggestNum = parseInt(prompt('Please enter the high end of the range.'))
    }
  },
}

game.play()