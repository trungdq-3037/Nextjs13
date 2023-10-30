import Image from "next/image";
import Link from "next/link";

export default function Movie({ movie }: { movie: any }) {
    const imagePath = `https://image.tmdb.org/t/p/original${movie?.poster_path}`
    return (<div>
        ------
        <h3>{movie?.title}</h3>
        <h4>Vote / number: {movie?.vote_average}/{movie?.vote_count} </h4>
        <h4>Original title : {movie?.original_title}</h4>
        <h4>Release date : {movie?.release_date}</h4>

        <Link href={`/${movie.id}`}>
            <Image src={imagePath} alt={movie?.title} height={800} width={800} />
        </Link>
        <br></br>
        ------
    </div>)
}