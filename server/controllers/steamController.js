import axios from'axios';
import { STEAM_API_URL } from '../constants/steamConstants.js';

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_USER_ID = process.env.STEAM_USER_ID;

const getProfile = async (req, res) => {
    try {
        console.log(`Fetching profile for user: ${STEAM_USER_ID}`);
        const response = await axios.get(`${STEAM_API_URL}/ISteamUser/GetPlayerSummaries/v0002/`, {
            params: {
                key: STEAM_API_KEY,
                steamids: STEAM_USER_ID
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch profile data' });
    }
};

export { getProfile };