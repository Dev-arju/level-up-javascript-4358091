// Write your code here

// function Movie(title, director, genre, releaseYear, rating){
//   this.Title = title;
//   this.Director = director;
//   this.Genre = genre;
//   this.Release_year = releaseYear;
//   this.Rating = rating
// }

// Movie.prototype.getOverview = function (){
//   const { Title, Genre, Director, Release_year, Rating } = this
//   return `${Title} a ${Genre} film directed by ${Director} was released
//   in ${Release_year}. It recived a rating of ${Rating}`
// }

class Movie {
  constructor(title, director, genre, releaseYear, rating){
    this.Title = title;
    this.Director = director;
    this.Genre = genre;
    this.Release_year = releaseYear;
    this.Rating = rating
  }

  get overview(){
    return this.getOverview();
  }

  getOverview(){
    const { Title, Genre, Director, Release_year, Rating } = this
    return `${Title} a ${Genre} film directed by ${Director} was released 
    in ${Release_year}. It recived a rating of ${Rating}`
  }
}

const spiderMan = new Movie('Spider Man', 'Sam Raimi', 'Action', 2002, 87);
const batMan = new Movie('The Dark Night', 'Christopher Nolan', 'Action', 2008, 83)

console.log(spiderMan);
console.log(spiderMan.overview);