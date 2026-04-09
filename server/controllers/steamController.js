import axios from'axios';
import { STEAM_API_URL } from '../constants/steamConstants.js';
import { calculatePlaytime } from '../utils/steamHelpers.js';

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

const getRecentlyPlayedGames = async (req, res) => {
    try {
        const response = await axios.get(`${STEAM_API_URL}/IPlayerService/GetRecentlyPlayedGames/v0001/`, {
            params: {
                key: STEAM_API_KEY,
                steamid: STEAM_USER_ID,
                count: 5
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch recently played games data' });
    }
};

const getOwnedGames = async (req, res) => {
    try {
        const response = await axios.get(`${STEAM_API_URL}/IPlayerService/GetOwnedGames/v0001/`, {
            params: {
                key: STEAM_API_KEY,
                steamid: STEAM_USER_ID,
                include_appinfo: true,
                include_played_free_games: true
            }
        });
        const games = response.data.response.games || [];
        const totalPlaytime = calculatePlaytime(games);
        res.json(response.data);
        console.log(`Total playtime across all owned games: ${totalPlaytime} hours`);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch owned games data' });
    }
};

const getAchievements = async (req, res) => {
    try {
        const { appid } = req.params;
        console.log(`Fetching achievements for appid: ${appid}`);
        const response = await axios.get(`${STEAM_API_URL}/ISteamUserStats/GetPlayerAchievements/v0001/`, {
            params: {
                key: STEAM_API_KEY,
                steamid: STEAM_USER_ID,
                appid: appid, // Example app ID for Team Fortress 2
                l: 'english'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch achievements data' });
    }
};

const getGameSchema = async (req, res) => {
    try {
        const { appid } = req.params;
        const response = await axios.get(`${STEAM_API_URL}/ISteamUserStats/GetSchemaForGame/v2/`, {
            params: {
                key: STEAM_API_KEY,
                appid: appid,
                l: 'english'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch game schema' });
    }
};

const getNews = async (req, res) => {
    try {
        const { appid } = req.params;
        const response = await axios.get(`${STEAM_API_URL}/ISteamNews/GetNewsForApp/v0002/`, {
            params: { 
                key: STEAM_API_KEY,
                appid: appid, // Example app ID for Team Fortress 2
                count: 5
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch news data' });
    }
};

const getGlobalAchievementsPercentagesForApp = async (req, res) => {
    try {
        const { appid } = req.params;
        const response = await axios.get(`${STEAM_API_URL}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/`, {
            params: {
                gameid: appid
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch global achievements percentages data' });
    }
};



export { getProfile, getRecentlyPlayedGames, getOwnedGames, getAchievements, getGameSchema, getNews, getGlobalAchievementsPercentagesForApp };