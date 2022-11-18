import Footer from "./Footer";
import Header from "./Header";

async function fetchData() {
    let result = null;
    try {
        const response = await fetch('/data/data.json');
        result = await response.json();
    } catch {}
} 

function App() {
    return (
        <div className="app">
            <Header/>
            <Footer/>
        </div>
    )
}

export default App;