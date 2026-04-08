import { useState, useEffect } from "react";
import { getProfile, getOwnedGames } from "../services/steamService.js"; 
import ProfileCard from "../components/ProfileCard.jsx";
import StatsOverview from "../components/StatsOverview.jsx";
import GameList from "../components/GameList.jsx";

function Home() {
    const [profile, setProfile] = useState(null);
    const [games, setGames] = useState([]);
    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await getProfile();
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        const loadGames = async () => {
            try {
                const data = await getOwnedGames();
                setGames(data.response.games);
            } catch (error) {
                console.error('Error fetching owned games:', error);
            }
        };


        loadProfile();
        loadGames();
    }, []);

    return (
    <div className="min-h-screen text-white p-8" style={{backgroundColor: '#1b2838'}}>
        <h1 className="text-3xl font-bold text-blue-500">Steam Profile</h1>
        {profile && (
            <ProfileCard profile={profile.response.players[0]} />
        )}
        {games.length > 0 && (
            <div>
                <StatsOverview games={games} />
                <GameList games={games} />
            </div>
        )}
    </div>
);
}

export default Home;
    