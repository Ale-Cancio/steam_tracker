import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<li key={game.appid} onClick={() => navigate(`/game/${game.appid}`)}>
    {game.name}
</li>