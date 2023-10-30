import Image from "next/image";
export default async function MovieDatail({ params }: { params: any }) {
    const { movie } = params;
    const data = await fetch(`${process.env.MVDB_URL}3/movie/${movie}?api_key=${process.env.API_KEY}`
    )
    const res = await data.json()
    const imagePath = `https://image.tmdb.org/t/p/original${res?.poster_path}`
    // console.log(res)
    return <div style={{ height: "100%" }} >
        <h1>Movie Details</h1>
        <h3>{res?.title}</h3>
        <h3>Released at: {res?.release_date}</h3>
        <h3>Points/Vote:   {res?.vote_average}/{res?.vote_count}</h3>

        <h3>Overview</h3>
        <div>
            {res?.overview}
        </div>
        <Image src={imagePath} height={200} width={300} alt={res?.title}/>

    </ div>
}