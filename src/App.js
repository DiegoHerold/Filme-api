import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import MoviesCategory from "./pages/Category/MoviesCategory"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
                <Route path="/categoria/:categoryId" exact element={<MoviesCategory />} />
            </Routes>
        </div>
    );
};

export default App;
