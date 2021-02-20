import React from 'react';

import s from './NotFound.module.scss';

import TeamRocketPng from './assets/Team_Rocket.png';

const NotFoundPage = () => (
  <div className={s.root}>
    <div className={s.notFoundText}>404</div>
    <img className={s.teamRocketPng} src={TeamRocketPng} alt="Cloud PokeBall" />
  </div>
);

export default NotFoundPage;
