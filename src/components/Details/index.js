import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "./styles"

function Details(){
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81b80e6aef7f05f5e7fa29e42a150aa9&language=en-US`)
            .then(response => response.json())
            .then(data => {
                const {title, poster_path, overview, release_date} = data
                
                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }
                setMovie(movie)
            })
    },[id])
    return(
        <Container>
            <div className="movie">
                <image src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    
                </div>
            </div>
        </Container>
    )
}

export default Details