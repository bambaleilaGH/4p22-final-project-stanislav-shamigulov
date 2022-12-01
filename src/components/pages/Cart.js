import { useState, useEffect } from 'react';
import './cart.css';


function Cart(props) {
    const [ games, setGames ] = useState([]);
    useEffect(() => {
        fetch('https://637d04719c2635df8f7fc543.mockapi.io/api/games')
            .then((response) => response.json())
            .then((result) => setGames(result)); 
    }, []);

    function delFromCart(event) {
        let position = props.cartSession.indexOf(props.id);
        let newCartSession = [...props.cartSession];
        newCartSession.splice(position, 1);
        props.setCartSession(newCartSession);
    }

    return (
        <div className="cart">
            <div className="cart__container">
                {
                    props.cartSession.map((id) => {
                        const game = games.find(item => item.id === id) || {};
                        return (
                            <div key={id} className="cart__container-row">
                                <div className="cart__container-img"><img src={game.img} alt={game.name}/></div>
                                <div className="cart__container-description">
                                    <div className="cart__container-title">{game.name}</div>
                                    <div className="cart__container-price">{game.price}</div>
                                    <div onClick={delFromCart} className="cart__container-del">Удалить</div>    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="cart__container-summ">Общая цена: 
                {
                    props.cartSession.reduce((accumulator, id) => {
                        const game = games.find(item => item.id === id) || {price: 0};
                        return accumulator + game.price * 100;
                    }, 0) /100
                }
            </div> 
        </div>
    )
}

export default Cart;
