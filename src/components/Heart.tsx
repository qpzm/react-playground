import React, { useState, useEffect } from 'react';
import HeartIcon from '../icons/HeartFill';

export interface HeartButtonProps {
  xOrigin?: number;
  yOrigin?: number;
  style?: React.CSSProperties;
}

const Heart = ({ xOrigin = 50, yOrigin = 10 }) => {
  const [xPos, changePosX] = useState(xOrigin);
  const [yPos, changePosY] = useState(yOrigin);
  const [opacity, changeOpacity] = useState(1);

  const style: React.CSSProperties = {
    position: 'absolute',
    right: xPos,
    bottom: yPos,
    opacity: opacity,
    transition: 'bottom 1s linear, right 1s linear, opacity 1s linear',
  };

  const moveHeart = () => {
    const range = 10 + Math.random() * 10;
    const xDiff = Math.random() > 0.5 ? -1 * range : range;
    changePosY(yPos => yPos + 70);
    changePosX(xPos => xPos + xDiff);
    changeOpacity(opacity => opacity === 0 ? 1 : 0);
  };

  useEffect(() => {
    // FIXME the first transition is not visible without a small delay.
    setTimeout(() => { moveHeart() }, 30);
    const handle = setInterval(() => {
      moveHeart();
    }, 800)

    setTimeout(() => {
      clearInterval(handle);
    }, 1650);
  }, []);

  return(
    <div style={style}>
      <HeartIcon fill='#5c3fbf' />
    </div>
  );
}

export default Heart;
