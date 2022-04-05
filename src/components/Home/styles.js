import styled from "styled-components";

export const Container = styled.div`
    h1{
        text-align: center;
        margin: 4rem 0;
    }

    
`

export const MovieList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    
    
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    img{
        max-width: 220px;
        border-radius: 1rem;
    }
    span{
        font-size: 1.4rem;
        margin-top: 1rem;
    }
    a{
        transition: 0.3s;
    }
    a:hover{
        transform: scale(1.1);
    }
`
