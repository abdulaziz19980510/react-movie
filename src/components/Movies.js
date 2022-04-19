import Movie from "./Movie";

export default function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : (
                <div>
                   <h4>Nothing found</h4>
                   <h4>Hech narsa topilmadi</h4>
                </div>
            )}
        </div>
    )
}