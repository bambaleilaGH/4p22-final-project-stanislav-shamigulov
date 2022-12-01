import './content.css';
import { useEffect, useState } from 'react';
import Card from '../card/Card';

function Content(props) {
    const [ searchQueryString, setSearchQueryString ] = useState('');
    function searchQuery(event) {
        let searchQueryString = event.target.value; 
        setSearchQueryString(searchQueryString.toLowerCase());
    }
    const [ games, setGames ] = useState([]);
    useEffect(() => {
        fetch('https://637d04719c2635df8f7fc543.mockapi.io/api/games')
            .then((response) => response.json())
            .then((result) => setGames(result)); 
    }, []);
    return (
        <div className="content">
            <div className="content__sort">
                <label>Поиск</label>
                <input id="search" type="text" placeholder="введите название игры" onChange={searchQuery}/>
            </div>
            <div className="content__container">
                {
                    games.filter(item => item.name.toLowerCase().includes(searchQueryString)).map((item, id) => {
                        return <Card key={id} id={item.id} img={item.img} title={item.name} description={item.description} 
                        price={item.price} cartSession={props.cartSession} setCartSession={props.setCartSession}/>;
                    })
                } 
            </div>
        </div>
    )   
}

export default Content;