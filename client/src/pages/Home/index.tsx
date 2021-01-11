import React from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <Header />
    <Layout className={s.layout}>
      <div className={s.layoutText}>
        <div className={s.textTitle}>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </div>
        <div className={s.mainText}>You can know the type of Pokemon, its strengths, disadvantages and abilities</div>
        <Button onClick={(event) => event}>See pokemons</Button>
      </div>
      <Parallax />
    </Layout>
    <Footer />
  </div>
);

export default HomePage;
