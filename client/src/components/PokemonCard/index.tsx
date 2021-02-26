import React from 'react';
import cn from 'classnames';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  attack: number;
  defense: number;
  img: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, attack, defense, img, types }) => (
  <div className={s.root}>
    <div className={s.content}>
      <div className={s.title}>{name}</div>
      <div className={s.inlinePropertiesContainer}>
        <div className={cn(s.ellipse, s.inlineProperty)}>{attack}</div>
        <div className={cn(s.ellipse, s.inlineProperty)}>{defense}</div>
      </div>
      <div className={s.inlinePropertiesContainer}>
        <div className={cn(s.statsName, s.inlineProperty)}>Attack</div>
        <div className={cn(s.statsName, s.inlineProperty)}>Defense</div>
      </div>
      <div className={s.inlinePropertiesContainer}>
        {types.map((item) => (
          <div className={cn(s.type, s.inlineProperty)}>{item}</div>
        ))}
      </div>
    </div>
    <img className={s.pokemonImg} src={img} alt="Изображение покемона" />
  </div>
);

export default PokemonCard;
