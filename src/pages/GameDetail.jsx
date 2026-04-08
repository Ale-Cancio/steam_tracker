import { useState, useEffect, use } from 'react';
import { useParams } from 'react-router-dom';
import { getAchievements } from '../services/steamService.js';
import { useCompletedGames } from '../hooks/useCompletedGames.jsx';

function GameDetail() {
    const { appid } = useParams();
    const [achievements, setAchievements] = useState([]);
    const [gameStats, setGameStats] = useState(null);
    const { completedGames, toggleComplete } = useCompletedGames();
    const isCompleted = completedGames.includes(Number(appid));
    
    

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

        loadAchievements();
    }, []);

    return (
    <div>
        <h1>{achievements.length > 0 && gameStats?.gameName}</h1>
        <ul>
            {achievements.map((achievement) => (
                <li key={achievement.apiname}>
                    {achievement.apiname} - {achievement.achieved ? '✅' : '❌'}
                </li>
            ))}
        </ul>
        <button onClick={() => toggleComplete(Number(appid))}>
            {isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
    </div>
);
}

export default GameDetail;