import { useState } from 'react';

export const useCompletedGames = () => {
    const [completedGames, setCompletedGames] = useState(() => {
        const saved = localStorage.getItem('completedGames');
        return saved ? JSON.parse(saved) : [];
    });

    const toggleComplete = (appid) => {
        if (completedGames.includes(appid)) {
            const updated = completedGames.filter(id => id !== appid);
            setCompletedGames(updated);
            localStorage.setItem('completedGames', JSON.stringify(updated));
        } else {
            const updated = [...completedGames, appid];
            setCompletedGames(updated);
            localStorage.setItem('completedGames', JSON.stringify(updated));
        }
    };

    return { completedGames, toggleComplete };
};