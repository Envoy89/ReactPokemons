import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import Button from '../../components/Button';

import s from './NotFound.module.scss';

import TeamRocketPng from './assets/Team_Rocket.png';

const NotFoundPage = () => (
  <div className={s.root}>
    <div className={s.textContainer}>
      <div className={s.notFoundText}>404</div>
      <div className={s.text}>
        <span className={s.whiteText}>The rocket team</span> has won this time.
      </div>
    </div>
    <img className={s.teamRocketPng} src={TeamRocketPng} alt="Cloud PokeBall" />
    <div className={s.button}>
      <Button onClick={() => navigate(LinkEnum.HOME)}>Pokemons HOME</Button>
    </div>
  </div>
);

export default NotFoundPage;
