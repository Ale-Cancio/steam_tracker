export const calculateTotalPlaytime = (games) => {
    const totalMinutes = games.reduce((acc, game) => acc + game.playtime_forever, 0);
    const hours = Math.floor(totalMinutes / 60);
    return hours;
};