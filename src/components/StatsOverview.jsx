import { calculateTotalPlaytime } from "../utils/steamUtil.js";

function StatsOverview({ games }) {
    return (
        <div>
            <h2>Stats Overview</h2>
            <p>Total Games Owned: {games.length}</p>
            <p>Total Playtime: {calculateTotalPlaytime(games)} hours</p>
        </div>
    );
}

export default StatsOverview;