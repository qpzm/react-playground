import React from 'react';

const HeartFill = ({fill = 'white'}) => (
  <svg
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 5.82353C0.5 2.60728 2.96243 3.17647e-07 6 0C8.5 0 10 1.5 11 3C12 1.5 13.5 0 16 0C19.0376 3.17647e-07 21.5 2.60728 21.5 5.82353C21.5 11.8266 15.6842 15.5201 11 18C6.31582 15.5201 0.5 11.8266 0.5 5.82353Z"
      fill={fill}
    />
  </svg>
);

export default HeartFill;
