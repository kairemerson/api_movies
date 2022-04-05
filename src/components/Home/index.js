import React from "react";
import { Container, MovieList,Movie } from "./styles";

function Home(){
    const movies = [
        {
            id: 1,
            title: 'spider man',
            image_url: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png'
        },
        {
            id: 2,
            title: 'batman',
            image_url: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png'
        },
        {
            id: 3,
            title: 'avengers',
            image_url: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png'
        }
    ]
    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                    <Movie key={movie.id}>
                        <a href="http://google.com">
                            <img src={movie.image_url} alt={movie.title}/>
                        </a>
                        <span>{movie.title}</span>
                    </Movie>
                    )
                })}
                
                
                
            </MovieList>
        </Container>
    )
}

export default Home