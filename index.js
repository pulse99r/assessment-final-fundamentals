/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  if(movies.length === 0){
    return [];
  } 
  const newMovieArray = [];
  
  for (const eachMovie of movies) {
    newMovieArray.push(eachMovie.title);
  }
  return newMovieArray;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  if(movies.length === 0){
    return 0;
  } 

  let highestMetaScore = '0';
  for (const eachMovie of movies) { 
    let metascore = eachMovie.metascore
    if(highestMetaScore < metascore) {
      highestMetaScore = Number(metascore);
    }
  }
  return highestMetaScore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
// ****  N O T   Y E T   W O R K I N G  ****
function getAverageIMDBRating(movies) {
  if(movies.length === 0){
    return 0;
  } 
  let imdbRateAvg = 0;
  let allMovieRatings = []
  for (const eachMovie of movies) {
    allMovieRatings.push(Number(eachMovie.imdbRating))
  }
  for (const eachScore of allMovieRatings) {
    imdbRateAvg += eachScore;
  }
  imdbRateAvg = imdbRateAvg / allMovieRatings.length;
  imdbRateAvg = Math.round(imdbRateAvg,0);

  return imdbRateAvg;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  if(movies.length === 0) {return {}}
  const ratingResult = {};
  //let rating = []
  for (const eachMovie of movies) {
    if(ratingResult[eachMovie.rated]) {
      ratingResult[eachMovie.rated] += 1;
    } else {
      ratingResult[eachMovie.rated] = 1;
    }   
  }
  return ratingResult;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */

    // ****  N O T   Y E T   W O R K I N G  ****
function findById(movies,id) {
  if(movies.length === 0){
    return null;
  }
  let result = {}
  for (let i = 0; i < movies.length; i++) {
    const eachMovie = movies[i] 
    if(eachMovie.imdbID === id) {
      result = eachMovie;
      return result
    }
  }
  if(!result.length) {
    return null
  }
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies,genre) {
  if(movies.length === 0){
    return [];
  }
  const movieList = []
  for (const movie of movies) {
    if(movie.genre.includes(genre)){
      movieList.push(movie)
    }
  }
  if(!movieList.length){
    return [];
  }
return movieList
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies,year) {
  releaseYearArray = []
  if(movies.length ===0 ) {
    return []
  }

  return releaseYearArray
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if(movies.length ===0 ) {
    return null;
  }
  let biggestBoxOfficeName = "";
  let boxOffice = 0;
  let boxOffice2 = 0;
  for (const movie of movies) {
    boxOffice2 = movie.boxOffice
    boxOffice2 = boxOffice2.split(",")
    boxOffice2 = boxOffice2.join('')
    boxOffice2 = boxOffice2.slice(1);
    console.log('boxOffice2==>', boxOffice2)
    if (boxOffice < boxOffice2) {
      biggestBoxOfficeName = movie.title
    }
  }
  console.log('biggestBoxOfficeName ===> ', biggestBoxOfficeName)
  return biggestBoxOfficeName;
}






// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
