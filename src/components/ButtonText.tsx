import React, { FC, CSSProperties } from 'react';

export interface ButtonTextProps {
  count?: number;
  style?: CSSProperties;
}

const ButtonText: FC<ButtonTextProps> = ({ count = 0, style }) => {
  return(
    <div style={style} className="heart-count">{ count }</div>
  );
};

export default ButtonText;
