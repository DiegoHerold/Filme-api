import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import CategoryButton from "../Category/CategoryButton"; // Importa o botão de categoria

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    // Busca filmes populares
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
    
    // Busca categorias de filmes
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => setCategories(data.genres));
  }, [KEY]);

  return (
    <Container>
      <h1>Movies</h1>
      
      <div>
        {categories.map((category) => (
          <CategoryButton key={category.id} category={category} />
        ))}
      </div>

      <MovieList>
        {movies.map((movie) => (
          <Movie key={movie.id}>
            <img src={`${imagePath}${movie.poster_path}`} alt="{movie.title}" />
            <span>{movie.title}</span>
            <Link to={`/${movie.id}`}>
              <Btn>Detalhes</Btn>
            </Link>
          </Movie>
        ))}
      </MovieList>
    </Container>
  );
}

export default Home;
