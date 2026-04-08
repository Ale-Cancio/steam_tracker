import { useNavigate } from 'react-router-dom';
import { useCompletedGames } from '../hooks/useCompletedGames';

function GameList({ games }) {
    const navigate = useNavigate();
    const { completedGames } = useCompletedGames();

    return (
        <div>
            <h2>My Games</h2>
            <ul>
                {games.map(game => (
                    <li key={game.appid} onClick={() => navigate(`/game/${game.appid}`)}>
                        {game.name} - {Math.round(game.playtime_forever / 60)} hours played
                        {completedGames.includes(game.appid) ? ' ✅':' ❌'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameList;