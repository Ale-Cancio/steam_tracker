export const calculatePlaytime = (games) => {
    const totalPlaytime = games.reduce((total, game) => total + game.playtime_forever, 0);
    return Math.round(totalPlaytime / 60); // Convert to hours and round
};
