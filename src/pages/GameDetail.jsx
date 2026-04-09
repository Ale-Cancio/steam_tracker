import { useState, useEffect, use } from 'react';
import { useParams } from 'react-router-dom';
import { getAchievements, getGlobalAchievementPercentages, getGameSchema } from '../services/steamService.js';
import { useCompletedGames } from '../hooks/useCompletedGames.jsx';



function GameDetail() {
    const { appid } = useParams();
    const [achievements, setAchievements] = useState([]);
    const [gameStats, setGameStats] = useState(null);
    const [ percentages, setPercentages] = useState([]);
    const { completedGames, toggleComplete } = useCompletedGames();
    const isCompleted = completedGames.includes(Number(appid));
    const [schema, setSchema] = useState({});
    
    

useEffect(() => {
    const loadAchievements = async () => {
        try {
            const data = await getAchievements(appid);
            setGameStats(data.playerstats);
            setAchievements(data.playerstats.achievements);
        } catch (error) {
            console.error('Error fetching achievements:', error);
        }
    };

    const loadPercentages = async () => {
        try {
            const percentData = await getGlobalAchievementPercentages(appid);
            console.log('Fetched percentages:', percentData);
            const percentMap = {};
            percentData.achievementpercentages.achievements.forEach(a => {
                percentMap[a.name] = a.percent;
            });
            setPercentages(percentMap);
        } catch (error) {
            console.error('Error fetching percentages:', error);
        }
    };

    const loadSchema = async () => {
    try {
        console.log('load Called')
        const data = await getGameSchema(appid);
        console.log('Schema data:', data);
        const schemaMap = {};
        data.game.availableGameStats.achievements.forEach(a => {
            schemaMap[a.name] = {
                displayName: a.displayName,
                description: a.description,
                icon: a.icon,
                icongray: a.icongray
            };
        });
        setSchema(schemaMap);
    } catch (error) {
        console.error('Error fetching schema:', error);
    }
};

    loadSchema();
    loadAchievements();
    loadPercentages();
}, []);

return (
    <div className="min-h-screen bg-steam-dark text-white p-8">
        <h1 className="text-3xl font-bold mb-2">{gameStats?.gameName}</h1>
        
        <button 
            onClick={() => toggleComplete(Number(appid))}
            className={`mb-6 px-4 py-2 rounded-lg font-semibold ${
                isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
            }`}
        >
            {isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>

        <div className="flex flex-col gap-2">
            {achievements.map((achievement) => (
                <div 
                    key={achievement.apiname}
                    className={`flex items-center px-4 py-3 rounded-lg ${
                        achievement.achieved ? 'bg-blue-900' : 'bg-gray-800'
                    }`}
                >
                    <span className={`flex-1 font-semibold ${
                        achievement.achieved ? 'text-white' : 'text-gray-400'
                    }`}>
                        {schema[achievement.apiname]?.displayName || achievement.apiname}
                    </span>
                    <span className={`text-sm ${
                        achievement.achieved ? 'text-blue-300' : 'text-gray-500'
                    }`}>
                        {percentages[achievement.apiname] 
                            ? `${parseFloat(percentages[achievement.apiname]).toFixed(1)}% of players` 
                            : ''}
                    </span>
                </div>
            ))}
        </div>
    </div>
);
}

export default GameDetail;