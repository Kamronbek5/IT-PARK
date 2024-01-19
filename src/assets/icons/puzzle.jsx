const Puzzle = (props) => (
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
        d="M35 21.25c-3.75 0-3.75 3.75-7.5 1.25V15c0-1.375-1.125-2.5-2.5-2.5h-7.5C15 8.75 18.75 8.75 18.75 5a5 5 0 0 0-10 0c0 3.75 3.75 3.75 1.25 7.5H2.5A2.507 2.507 0 0 0 0 15v22.5C0 38.875 1.125 40 2.5 40H10c2.5-3.75-1.25-3.75-1.25-7.5a5 5 0 0 1 10 0c0 3.75-3.75 3.75-1.25 7.5H25c1.375 0 2.5-1.125 2.5-2.5V30c3.75-2.5 3.75 1.25 7.5 1.25a5 5 0 0 0 0-10Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0.734}
        x2={27.911}
        y1={39.266}
        y2={12.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Puzzle
