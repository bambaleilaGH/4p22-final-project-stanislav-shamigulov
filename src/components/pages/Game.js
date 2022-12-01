import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './game.css';

function Game(props) {
    const { id } = useParams();
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        fetch('https://637d04719c2635df8f7fc543.mockapi.io/api/games/' + id)
            .then((response) => response.json())
            .then((result) => setGames(result)); 
    }, [id]);

    function addToCart(event) {
        props.setCartSession(props.cartSession.concat(games.id));     
    }

    function delFromCart(event) {
        let position = props.cartSession.indexOf(games.id);
        let newCartSession = [...props.cartSession];
        newCartSession.splice(position, 1);
        props.setCartSession(newCartSession);
    }

    useEffect(() => {
        console.log(props.cartSession);

    }, [props.cartSession])

    return (
        <div className="game">
            <div className="game__container">
                <img src={games.img} alt={games.name} className="game__container-img"/>
                <div className="game__container-card">
                    <div className="game__container-title">{games.name}</div>
                    <div className="game__container-description">{games.description}</div>
                    <div className="game__container-price">{games.price}</div>
                    {props.cartSession.includes(games.id) ? (
                            <div className="game__container-add" onClick={delFromCart}>убрать</div>
                         ) :(
                            <div className="game__container-add" onClick={addToCart}>в корзину</div>
                         )
                    }
                </div>        
            </div>
        </div>

    )
}

export default Game;