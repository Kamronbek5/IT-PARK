const Planet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M19.999 6.249c-7.582 0-13.75 6.168-13.75 13.75s6.168 13.75 13.75 13.75 13.75-6.168 13.75-13.75-6.168-13.75-13.75-13.75Z"
      />
      <path
        fill="url(#c)"
        d="M3.75 0A3.754 3.754 0 0 0 0 3.75 3.754 3.754 0 0 0 3.75 7.5 3.754 3.754 0 0 0 7.5 3.75 3.754 3.754 0 0 0 3.75 0Z"
      />
      <path
        fill="url(#d)"
        d="M36.25 32.5a3.754 3.754 0 0 0-3.75 3.75A3.754 3.754 0 0 0 36.25 40 3.754 3.754 0 0 0 40 36.25a3.754 3.754 0 0 0-3.75-3.75Z"
      />
      <path
        fill="url(#e)"
        d="M37.134 2.866C33.907-.362 26.506 4.124 22.992 6.581c1.035.23 2.027.575 2.96 1.025 4.955-3.185 8.424-3.96 9.414-2.972.655.654.67 2.835-1.444 6.827-2.069 3.907-5.55 8.4-9.805 12.656-9.379 9.38-17.802 12.927-19.483 11.25-.988-.99-.213-4.46 2.972-9.415a13.638 13.638 0 0 1-1.025-2.959c-2.456 3.513-6.94 10.914-3.715 14.14.778.778 1.829 1.132 3.083 1.132 4.977 0 13.135-5.579 19.935-12.38 4.427-4.426 8.066-9.134 10.248-13.255 2.437-4.606 2.784-7.982 1.002-9.764Z"
      />
      <path
        fill="url(#f)"
        d="M11.25 20c-.69 0-1.25-.56-1.25-1.25 0-4.825 3.925-8.75 8.75-8.75a1.25 1.25 0 0 1 0 2.5 6.257 6.257 0 0 0-6.25 6.25c0 .69-.56 1.25-1.25 1.25Zm13.383-6.617a1.24 1.24 0 0 0 0-1.763c-.457-.462-1.3-.469-1.77 0a1.26 1.26 0 0 0-.362.881c0 .325.131.65.369.888.231.231.556.362.881.362.325 0 .65-.131.881-.368Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={10.281}
        x2={29.717}
        y1={29.717}
        y2={10.281}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFA677" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={1.1}
        x2={6.401}
        y1={6.401}
        y2={1.101}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA9D74" />
        <stop offset={1} stopColor="#FADF9B" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={33.6}
        x2={38.901}
        y1={38.901}
        y2={33.601}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={3.202}
        x2={37.469}
        y1={37.469}
        y2={3.202}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C3C" />
        <stop offset={1} stopColor="#666" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={11.153}
        x2={22.293}
        y1={20.421}
        y2={9.28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA9D74" />
        <stop offset={1} stopColor="#FADF9B" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Planet
