import MovieCard from './MovieCard.tsx'

export default function DisplayMovies ({movies}) {


    return <>
        <h2>Movies:</h2>
        { movies ?
            movies.map(movie => <MovieCard movie={movie} />)
            :
            "No movies found."
        }
    </>
}