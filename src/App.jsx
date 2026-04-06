import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import GameDetail from './pages/GameDetail.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:appid" element={<GameDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
