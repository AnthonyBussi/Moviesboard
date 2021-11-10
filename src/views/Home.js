import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

import './style/Home.css';


const Home = () => {
    const[movieData, setMovieData] = useState([]);

    const URL = "http://localhost:3000/movies"

    useEffect(() =>{
        axios.get(URL)
        .then((response) => setMovieData(response.data));
        }, [])
        console.log(movieData);

    return (
        <div className="home page">
            {/* <header>
                <h1>
                    MoviesBoard
                </h1>
                <Navbar />
            </header> */}
            <Header />
            <main className="home-container">
                <section className="home-form">
                    <h2>Rechercher un film</h2>
                    <form>
                        <select name="home-filter">
                            <option value="">Filtrer par</option>
                            <option value="title">Titre</option>
                            <option value="date">Date de sortie</option>
                            <option value="category">Catégorie</option>
                        </select>
                        <input type="text"
                                className="home-searchbar"
                                id="home-searchbar"
                                placeholder="Rechercher un film..."
                        />
                        <button type="submit" name="search-btn" className="search-btn">Rechercher</button>
                    </form>
                </section>
                <section className="home-results">                    
                    {movieData && <MovieCard movieData={ movieData }  />}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;