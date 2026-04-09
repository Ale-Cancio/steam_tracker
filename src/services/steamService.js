import axios from 'axios';

const API_URL = 'http://localhost:5000/api/steam';

export const getProfile = async () => {
    try {
        const response = await axios.get(`${API_URL}/profile`);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

export const getRecentlyPlayedGames = async () => {
    try {
        const response = await axios.get(`${API_URL}/recently-played`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recently played games:', error);
        throw error;
    }
};

export const getOwnedGames = async () => {
    try {
        const response = await axios.get(`${API_URL}/owned-games`);
        return response.data;
    } catch (error) {
        console.error('Error fetching owned games:', error);
        throw error;
    }
};

export const getAchievements = async (appid) => {
    try {
        const response = await axios.get(`${API_URL}/achievements/${appid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching achievements:', error);
        throw error;
    };

}

export const getGlobalAchievementPercentages = async (appid) => {
    try {
        const response = await axios.get(`${API_URL}/achievement-percentages/${appid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching achievement percentages:', error);
        throw error;
    }
};

export const getGameSchema = async (appid) => {
    try {
        const response = await axios.get(`${API_URL}/schema/${appid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching game schema:', error);
        throw error;
    }
};



