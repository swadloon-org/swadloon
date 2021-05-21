import React from 'react';

export function TextBubbleSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="80%"
      width="80%"
      fill="none"
      preserveAspectRatio="none"
    >
      <style>
        {`
        rect#background {
          transform: translateY(calc(80% - 40px));
        }
        path {
          transform: translate(10px, calc(80% + 17px - 10px));
        }
        `}
      </style>
      <g filter="url(#filter0_d)">
        <rect x="10" y="8" height="80%" fill="white" rx="29" width="80%" />
        <rect id="background" x="10" y="8" width="40" height="40" fill="white" />
        <path d="M0 17L18 0H0V17Z" fill="white" />
      </g>

      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.606629 0 0 0 0 0.606629 0 0 0 0 0.606629 0 0 0 0.5 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
