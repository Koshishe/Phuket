import React from 'react'

export function CircleViolet() {
  return (
    <svg
      width="316"
      height="316"
      viewBox="0 0 316 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_27)">
        <circle cx="158" cy="158" r="131" fill="url(#paint0_linear_1_27)" />
      </g>
      <defs>
        <filter
          id="filter0_f_1_27"
          x="0"
          y="0"
          width="316"
          height="316"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="13.5"
            result="effect1_foregroundBlur_1_27"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_27"
          x1="158"
          y1="27"
          x2="158"
          y2="289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC74FF" />
          <stop offset="1" stopColor="#54B7FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
