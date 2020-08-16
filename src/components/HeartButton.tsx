import React, { FC, CSSProperties, useState } from 'react';
import Heart from './Heart';

export interface HeartButtonProps {
  style?: CSSProperties;
}

export interface HeartProps {
  createdAt: number;
}

const HeartButton: FC<HeartButtonProps> = () => {
  const [hearts, changeHearts] = useState<HeartProps[]>([]);

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
      {
        hearts.map(heart => <Heart />)
      }
      <div onClick={onClick}>Click!</div>
    </div>
  );
};

export default HeartButton;
