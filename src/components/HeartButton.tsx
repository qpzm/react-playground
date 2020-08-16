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

interface HeartWrapperProps {
  children: React.ReactNode;
}

const HeartWrapper: FC<HeartWrapperProps> = ({ children }) => {
  const style: CSSProperties = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    width: '80px',
    height: '80px',
  }

  return(
    <div style={style}>
      {children}
    </div>
  );
}

const HeartButton: FC<HeartButtonProps> = () => {
  const [hearts, changeHearts] = useState<HeartProps[]>([]);

  const style: CSSProperties = {
    position: 'absolute',
    right: '16px',
    bottom: '16px',
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
    <HeartWrapper>
      <div style={style} onClick={onClick}>
        <div style={iconStyle}>
          <HeartIcon />
          <ButtonText style={textStyle} />
        </div>
      </div>
      { hearts.map(heart => <Heart xOrigin={32} yOrigin={32} />) }
    </HeartWrapper>
  );
};

export default HeartButton;
