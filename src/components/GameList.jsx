import { useNavigate } from 'react-router-dom';
import { useCompletedGames } from '../hooks/useCompletedGames';

function GameList({ games }) {
    const navigate = useNavigate();
    const { completedGames } = useCompletedGames();

    return (
    <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">My Games</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map(game => (
                <div
                    key={game.appid}
                    onClick={() => navigate(`/game/${game.appid}`)}
                    className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
                >
                    {/* 🎮 Game Banner */}
                    <img
                        src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`}
                        alt={game.name}
                        className="w-full"
                    />

                    {/* 📊 Game Info */}
                    <div className="p-2">
                        <p className="text-sm font-semibold">{game.name}</p>
                        <p className="text-xs text-gray-400">
                            {Math.round(game.playtime_forever / 60)} hours played
                        </p>
                        <p>
                            {completedGames.includes(game.appid) ? '✅ Completed' : '❌ Not Completed'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default GameList;