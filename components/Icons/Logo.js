import React from "react";

const Logo = ({
  ringFill = "#311244",
  ringStroke = "#00f9ff",
  symbolFill = "#ffdd55",
  onClick,
  width = 250,
  height = 250,
}) => (
  <svg
    onClick={onClick}
    width={width}
    height={height}
    version="1.1"
    viewBox="0 0 66.146 66.146"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-74.272 -95.061)">
      <ellipse
        cx="107.35"
        cy="128.13"
        rx="32.071"
        ry="32.071"
        fill={ringFill}
        stroke={ringStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.0044"
      />
      <g fill={symbolFill}>
        <rect
          transform="matrix(1 0 -.62211 .78293 -5.0645e-7 -6.482e-7)"
          x="210.93"
          y="178.67"
          width="16.027"
          height="4.8735"
          rx="0"
          ry=".83312"
          stroke-width=".21858"
        />
        <path
          transform="rotate(22.75)"
          d="m151.02 76.902a3.235 3.235 0 0 1-2.6039 3.1728 3.235 3.235 0 0 1-3.6198-1.9348 3.235 3.235 0 0 1 1.1915-3.9277 3.235 3.235 0 0 1 4.0847 0.40231l-2.2875 2.2875z"
        />
        <g>
          <rect
            transform="matrix(-1 0 .62211 .78293 -5.0645e-7 -6.482e-7)"
            x="-23.312"
            y="144.11"
            width="16.027"
            height="4.8735"
            rx="0"
            ry=".83312"
            stroke-width=".21858"
          />
          <rect
            transform="matrix(0 1 .6366 -.77119 -5.0645e-7 -6.482e-7)"
            x="237.18"
            y="149.61"
            width="22.309"
            height="5.4725"
            rx="0"
            ry=".93553"
            stroke-width=".27329"
          />
          <rect
            transform="matrix(0 1 -.6366 -.77119 -5.0645e-7 -6.482e-7)"
            x="-2.9593"
            y="-155.09"
            width="22.309"
            height="5.4725"
            rx="0"
            ry=".93553"
            stroke-width=".27329"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default Logo;
