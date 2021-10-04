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
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum)
    game.getGuess()
    this.prevGuesses.push(this.guess)  
    do {
      if (this.guess > this.secretNum) {
        this.result = 'High'
        this.render('incorrect')
      } else if (this.guess < this.secretNum){
        this.result = 'Low'
        this.render('incorrect')
      } else {
        this.result = 'correct'
        this.render('correct')
        break;
      }
      this.prevGuesses.push(this.guess)
    } while (this.guess !== this.secretNum)
    return 
  },
  
  
  getGuess() {
    let guessTest = window.prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}.`)
    guessTest = Number(guessTest)
    while (guessTest <= game.smallestNum || guessTest >= game.biggestNum){
      guessTest = window.prompt(`Try again: Enter a guess BETWEEN ${game.smallestNum} and ${game.biggestNum}`)
      guessTest = Number(guessTest)
    } 
    this.guess = guessTest
    return this.guess
    },


  render(str){
    if (str === 'incorrect')
    this.guess = window.prompt(`Your guess is too ${this.result}. Previous guesses: ${this.prevGuesses}`)
    else if (str === 'correct') {
    window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guess(es)!`)
    }
  }
}

game.play()