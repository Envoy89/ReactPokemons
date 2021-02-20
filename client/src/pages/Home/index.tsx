import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../routes';

import s from './Home.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <Layout className={s.layout}>
      <div className={s.layoutText}>
        <div className={s.textTitle}>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </div>
        <div className={s.mainText}>You can know the type of Pokemon, its strengths, disadvantages and abilities</div>
        <div className={s.button}>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
      </div>
      <Parallax />
    </Layout>
  </div>
);

export default HomePage;
