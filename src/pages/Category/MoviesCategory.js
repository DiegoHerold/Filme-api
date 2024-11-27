import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Movie, MovieList, Btn } from "../home/style";
import { Link } from "react-router-dom";

function MoviesCategory() {
  const { categoryId } = useParams();
  const [movies, setMovies] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    // Busca filmes por categoria
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${categoryId}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));

    // Busca o nome da categoria para o título
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        const category = data.genres.find((genre) => genre.id.toString() === categoryId);
        setCategoryName(category ? category.name : "Categoria");
      });
  }, [categoryId, KEY]);

  return (
    <Container>
     
      <button onClick={() => navigate(-1)} style={backButtonStyle}>
        Voltar
      </button>
      
      <h1>Filmes da Categoria: {categoryName}</h1>
      
      <MovieList>
        {movies.map((movie) => (
          <Movie key={movie.id}>
            <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
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

const backButtonStyle = {
  marginBottom: "16px",
  padding: "8px 16px",
  backgroundColor: "teal",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default MoviesCategory;
