

export default function MovieCard ({movie}) {


    return <div className="moviecard">
        <h3> {movie.Title} </h3>
        <img src={movie.Poster} />
        <dl>
            <dt>IMDB id</dt>
            <dd>{movie.imdbID}</dd>
            <dt>Year</dt>
            <dd>{movie.Year}</dd>
        </dl>
    </div>
}