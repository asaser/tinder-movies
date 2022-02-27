
const SingleMovieCard = ({title, vote_average, poster_path, overview}) => {

    const POSTER_API = "https://image.tmdb.org/t/p/original/";

    return (
        <div style={{position: 'absolute', backgroundColor: 'red'}}>
            <img style={{ width: '400px'}} src={POSTER_API + poster_path} alt={title} />

            <div>
                <span>{title}</span>
                <span>{vote_average}</span>
            </div>
            {/* dodać tutaj coś z biblioteki material lub bootstrap */}
            <div style={{
                position: 'absolute',
                backgroundColor: 'white',
                }}
            >
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default SingleMovieCard;