import { Link } from 'react-router-dom';
import './card.css';

function Card(props) {
    function addToCart(event) {
        props.setCartSession(props.cartSession.concat(props.id));     
    }

    function delFromCart(event) {
        let position = props.cartSession.indexOf(props.id);
        let newCartSession = [...props.cartSession];
        newCartSession.splice(position, 1);
        props.setCartSession(newCartSession);
    }

    return (
        <div className="сard">
            <div className="card__container">
                <div><img src={props.img} alt={props.title} className="сard__container-img"/></div>
                <div className="сard__container-title">{props.title}</div>
                <div className="сard__container-descripton">{props.description}</div>
                <div className="card__container-more"><Link to = { `game/` + props.id}>Подробнее</Link></div>
                {props.cartSession.includes(props.id) ? (
                    <div className="card__container-price">{props.price} <span onClick={delFromCart} >убрать</span></div> 
                ) :(
                    <div className="card__container-price">{props.price} <span onClick={addToCart} >в корзину</span></div>
                )}      
                <div className="card__container-split">___</div>  
            </div>  
        </div>
    )
};

export default Card;