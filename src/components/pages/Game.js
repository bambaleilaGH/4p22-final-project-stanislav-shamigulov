import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './game.css';

function Game() {
    const { id } = useParams();
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        fetch('https://637d04719c2635df8f7fc543.mockapi.io/api/games/' + id)
            .then((response) => response.json())
            .then((result) => setGames(result)); 
    }, [id]);

    
    return (
        <div className="game">
            <div className="game__container">
                <img src={games.img} alt={games.name} className="game__container-img"/>
                <div className="game__container-card">
                    <div className="game__container-title">{games.name}</div>
                    <div className="game__container-description">{games.description}</div>
                    <div className="game__container-price">{games.price}</div>
                    <div className="game__container-add">в корзину</div>
                </div>        
            </div>
        </div>

    )
}

export default Game;