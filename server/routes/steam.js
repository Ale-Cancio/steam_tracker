import express from 'express';
import { getProfile } from '../controllers/steamController.js';
import { getRecentlyPlayedGames } from '../controllers/steamController.js';
import { getOwnedGames } from '../controllers/steamController.js';
import { getAchievements } from '../controllers/steamController.js';
import { calculatePlaytime } from '../utils/steamHelpers.js';
import { getNews } from '../controllers/steamController.js';
import { getGlobalAchievementsPercentagesForApp } from '../controllers/steamController.js';
import { getGameSchema } from '../controllers/steamController.js';


const router = express.Router();

router.get('/profile', getProfile);
router.get('/recently-played', getRecentlyPlayedGames);
router.get('/owned-games', getOwnedGames);
router.get('/achievements/:appid', getAchievements);
router.get('/achievement-percentages/:appid', getGlobalAchievementsPercentagesForApp);
router.get('/schema/:appid', getGameSchema);
router.get('/news/:appid', getNews);


export default router;

