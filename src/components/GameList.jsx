import { useNavigate } from 'react-router-dom';
import { useCompletedGames } from '../hooks/useCompletedGames';
import { useState } from 'react';
import  Filter  from './Filter.jsx';

function GameList({ games }) {
    const navigate = useNavigate();
    const { completedGames } = useCompletedGames();
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const filteredGames = games
    .filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'playtime') return b.playtime_forever - a.playtime_forever;
        if (sortBy === 'completed') {
            return completedGames.includes(b.appid) - completedGames.includes(a.appid);
        }
    });


    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">My Games</h2>

            <Filter search={search} setSearch={setSearch} sortBy={sortBy} setSortBy={setSortBy} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGames.map(game => (
                    <div
                        key={game.appid}
                        onClick={() => navigate(`/game/${game.appid}`)}
                        className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
                    >
                        <img
                            src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`}
                            alt={game.name}
                            className="w-full"
                        />
                        <div className="p-2">
                            <p className="text-sm font-semibold">{game.name}</p>
                            <p className="text-xs text-gray-400">
                                {Math.round(game.playtime_forever / 60)} hours played
                            </p>
                            <p className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                completedGames.includes(game.appid)
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-600 text-gray-300'
                            }`}>
                        {completedGames.includes(game.appid) ? '✅ Completed' : '❌ Not Completed'}
                        </p>
                    </div>
        </div>
    ))
}
        </div >
    </div >
);
}

export default GameList;