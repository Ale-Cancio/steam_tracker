import express from 'express';
import { getProfile } from '../controllers/steamController.js';
import { getRecentlyPlayedGames } from '../controllers/steamController.js';
import { getOwnedGames } from '../controllers/steamController.js';
import { getAchievements } from '../controllers/steamController.js';

const router = express.Router();

router.get('/profile', getProfile);
router.get('/recently-played', getRecentlyPlayedGames);
router.get('/owned-games', getOwnedGames);
router.get('/achievements/:appid', getAchievements);

export default router;

