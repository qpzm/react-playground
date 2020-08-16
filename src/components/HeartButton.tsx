import React, { FC, CSSProperties, useState } from 'react';
import Heart from './Heart';
import HeartIcon from '../icons/HeartFill';
import ButtonText from './ButtonText';

export interface HeartButtonProps {
  style?: CSSProperties;
}

export interface HeartProps {
  createdAt: number;
}

const HeartButton: FC<HeartButtonProps> = () => {
  const [hearts, changeHearts] = useState<HeartProps[]>([]);

  const style: CSSProperties = {
    borderRadius: '48px',
    width: '48px',
    height: '48px',
    background: 'linear-gradient(180deg,#5c3fbf 0,#452d96 100%)',
    cursor: 'pointer'
  }

  const iconStyle: CSSProperties = {
    position: 'relative',
    top: '9px',
  }

  const textStyle: CSSProperties = {
    fontSize: '9px',
    color: 'white',
  };

  const onClick = () => {
    const heart = { createdAt: Date.now() }
    changeHearts(
      hearts =>
        // hearts.filter(x => x.createdAt + lifespan > Date.now()).concat(heart)
        hearts.concat(heart)
    );
    console.log(hearts);
  }

  return (
    <div>
      { hearts.map(heart => <Heart />) }
      <div style={style} onClick={onClick}>
        <div style={iconStyle}>
          <HeartIcon />
          <ButtonText style={textStyle} />
        </div>
      </div>
    </div>
  );
};

export default HeartButton;
