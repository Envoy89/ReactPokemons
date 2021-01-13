import React from 'react';
import DocumentationPage from './pages/Documentation';
import HomePage from './pages/Home';
import LegendariesPage from './pages/Legendaries';
import PokedexPage from './pages/Pokedex';

// export enum MyLinkEnum {
//     HOME = '/',
//     POKEDEX = '/pokedex',
//     LEGENDARIES = '/legendaries',
//     DOCUMENTATION = '/documentation'
// }
interface IGeneralMenu {
  title: string;
  link: MyLinkEnum;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: MyLinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: MyLinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: MyLinkEnum.LEGENDARIES,
    component: () => <LegendariesPage />,
  },
  {
    title: 'Documentation',
    link: MyLinkEnum.DOCUMENTATION,
    component: () => <DocumentationPage />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
