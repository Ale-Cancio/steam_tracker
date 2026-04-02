import { useState, useEffect } from "react";
import { getProfile } from "../services/steamService.js"; 

function Home() {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await getProfile();
                setProfile(data);
                console.log('Profile data:', data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        loadProfile();
    }, []);

    return (
    <div>
        <h1>Steam Profile</h1>
        {profile && (
            <div>
                <img src={profile.response.players[0].avatarfull} />
                <h2>{profile.response.players[0].personaname}</h2>
                <p>{profile.response.players[0].realname}</p>
            </div>
        )}
    </div>
);
}

export default Home;
    