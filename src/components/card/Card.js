import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card(props) {
    const [ cartSession, setCartSession ] = useState([]);
    useEffect(() => {
        console.log(cartSession);
    }, [cartSession]);
    function test(event) {
        if (event.target.id === 'notpressed') {
            event.target.id = 'pressed'
            event.target.innerHTML = 'убрать';  
            setCartSession(cartSession.concat(props.id));     
        } else {
            event.target.id = 'notpressed'
            event.target.innerHTML = 'в корзину';
        }   
    }
    return (
        <div className="сard">
            <div className="card__container">
                <div><img src={props.img} alt={props.title} className="сard__container-img"/></div>
                <div className="сard__container-title">{props.title}</div>
                <div className="сard__container-descripton">{props.description}</div>
                <div className="card__container-more"><Link to = { `game/` + props.id}>Подробнее</Link></div>
                <div className="card__container-price">{props.price} <span id="notpressed" onClick={test} >в корзину</span></div>       
                <div className="card__container-split">___</div>  
            </div>  
        </div>
    )
};

export default Card;