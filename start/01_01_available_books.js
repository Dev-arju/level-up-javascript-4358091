// Write your code here

class Book {
  constructor(title, author, isbn, numCopies) {
    this.Title = title;
    this.Author = author;
    this.ISBN = isbn;
    this.numCopies = numCopies;
  }

  get availability(){
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    } else {
      return "In stock";
    }
  }

  sell(numSold = 1) {
    if (this.numCopies >= numSold) {
      this.numCopies -= numSold;
    } else {
      return "Stock limit is reached";
    }
  }

  reStock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

// function Book(title, author, isbn, numCopies){
//   this.Title = title;
//   this.Author = author;
//   this.ISBN = isbn;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//       return "Out of stock";
//     } else if (this.numCopies < 10) {
//       return "Low stock";
//     } else {
//       return "In stock";
//     }
// }

// Book.prototype.sell = function (numSold = 1){
//   if (this.numCopies >= numSold) {
//     this.numCopies -= numSold;
//   } else {
//     return "Stock limit is reached";
//   }
// }

// Book.prototype.reStock = function (numCopies = 5){
//   this.numCopies += numCopies
// }

const hungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);

console.log(hungerGames.availability);

hungerGames.reStock(12)
console.log(hungerGames.availability);

hungerGames.sell(17)
console.log(hungerGames.availability);