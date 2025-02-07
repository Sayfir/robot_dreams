//Object level example
const movieData = {
    movieTitle: 'Inception',
    releaseDate: '2010-07-16',
    director: 'Christopher Nolan',
    additionalInfo: {
        genre: 'Sci-Fi',
        duration: 148,
        rating: 8.8,
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page']
    },

    get title() {
        return this.movieTitle;
    },

    set title(title) {
        if (!title || typeof title !== 'string') {
            throw new Error('Invalid movie title.');
        } else {
            this.movieTitle = title;
        }
    },
    addActor(newActor) {
        if (!newActor || typeof newActor !== 'string') {
            throw new Error('Invalid actor name.');
        }
        this.additionalInfo.actors.push(newActor);
        return this.additionalInfo.actors;
    }
};

console.log(movieData.title); // Output: 'Inception'

movieData.title = 'Interstellar'; // Updates the title
console.log(movieData.title); // Output: 'Interstellar'

console.log(movieData.addActor('Tom Hardy')); // Outputs array with Tom Hardy name

//Class level example
class Movie {
    #title;

    constructor(title, releaseDate, director, additionalInfo) {
        this.#title = title;
        this.releaseDate = releaseDate;
        this.director = director;
        this.additionalInfo = additionalInfo;
    }

    get title() {
        return this.#title;
    }

    set title(titleVal) {
        if (!titleVal || typeof titleVal !== 'string') {
            throw new Error('Invalid movie title.');
        }
        this.#title = titleVal;
    }
    addActor(newActor) {
        if (!newActor || typeof newActor !== 'string') {
            throw new Error('Invalid actor name.');
        }
        this.additionalInfo.actors.push(newActor);
        return this.additionalInfo.actors;
    }
}

const movieDataObj = new Movie('Inception', '2010-07-16', 'Christopher Nolan', {
    genre: 'Sci-Fi',
    duration: 148,
    rating: 8.8,
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page']
});

console.log(movieDataObj.title); // Output: 'Inception'

movieDataObj.title = 'Interstellar'; // Updates the title
console.log(movieDataObj.title); // Output: 'Interstellar'

console.log(movieDataObj.addActor('Tom Hardy')); // Outputs array with Tom Hardy name
