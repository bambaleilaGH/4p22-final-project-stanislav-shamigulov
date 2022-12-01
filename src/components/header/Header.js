import { Link } from 'react-router-dom';
import './header.css';

function Header(props) {
    return ( 
        <div className="header">
            <img className="logo" src="img/logo.svg" alt="Логотип Gamestore" />
            <div className="navigation">
                <ul>
                    <li><Link to="/">Витрина</Link></li>
                    <li><Link to="/cart">Корзина</Link></li>
                    <li><Link to="/feedback">Обратная связь</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;