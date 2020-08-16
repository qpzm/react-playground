import React, { useState, useEffect } from 'react';
import HeartIcon from '../icons/HeartFill';

export interface HeartButtonProps {
  style?: React.CSSProperties;
}

const Heart = () => {
  const initPosX = 50;
  const [posX, changePosX] = useState(initPosX);
  const [posY, changePosY] = useState(10);
  const [opacity, changeOpacity] = useState(1);

  const style: React.CSSProperties = {
    position: 'absolute',
    right: posX,
    bottom: posY,
    opacity: opacity,
    transition: 'bottom 1s linear, right 1s linear, opacity 1s linear',
  };

  const moveHeart = () => {
    const range = 10 + Math.random() * 10;
    const xDiff = Math.random() > 0.5 ? -1 * range : range;
    changePosY(posY => posY + 100);
    changePosX(posX => posX + xDiff);
    changeOpacity(opacity => opacity === 0 ? 1 : 0);
  };

  useEffect(() => {
    moveHeart();
    const handle = setInterval(() => {
      moveHeart();
    }, 900)

    setTimeout(() => {
      clearInterval(handle);
    }, 1850);
  }, []);

  return(
    <div style={style}>
      <HeartIcon fill='#5c3fbf' />
    </div>
  );
}

export default Heart;
