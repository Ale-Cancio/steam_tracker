import { useNavigate } from 'react-router-dom';

function GameList({ games }) {
    const navigate = useNavigate();

    return (
        <div>
            <h2>My Games</h2>
            <ul>
                {games.map(game => (
                    <li key={game.appid} onClick={() => navigate(`/game/${game.appid}`)}>
                        {game.name} - {Math.round(game.playtime_forever / 60)} hours played
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameList;