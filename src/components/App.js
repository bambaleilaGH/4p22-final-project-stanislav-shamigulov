import { useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';
import { Routes, Route, Outlet } from 'react-router-dom';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Cart from './pages/Cart';

function App() {
    const [ cartSession, setCartSession ] = useState([]);
    return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Content cartSession={cartSession} setCartSession={setCartSession}/>}/>
                    <Route path="game/:id" element={<Game cartSession={cartSession} setCartSession={setCartSession}/>}/>
                    <Route path="cart" element={<Cart cartSession={cartSession} setCartSession={setCartSession}/>}/>
                    <Route path="feedback" element={<Feedback/>}/>
                </Route>
            </Routes>
    )    
}

function Layout() {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App;