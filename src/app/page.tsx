import styles from './page.module.css'
import Movie from './about/Movie'



export default async function Home() {
  const data = await fetch(`${process.env.MVDB_URL}3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  // console.log('===============++===============+====++===++===+=+====+=+', res)

  return (
    <main className={styles.main}>
      <h1 className='pb-0'>Home page </h1>
      ================================================================
      <div className='content'>
        {
          res?.results?.map((movie: any): any => (
            <Movie key={movie.id} movie={movie} />
          ))
        }
      </div>
    </main>
  )
}
