const Cup = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M32.5 15V6.25a3.754 3.754 0 0 0-3.75-3.75h-17.5A3.754 3.754 0 0 0 7.5 6.25V15c0 5.532 3.55 10.3 8.75 11.919v4.331h-2.5A3.754 3.754 0 0 0 10 35v1.25c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25V35a3.754 3.754 0 0 0-3.75-3.75h-2.5v-4.331c5.2-1.62 8.75-6.387 8.75-11.919Z"
    />
    <path
      fill="url(#b)"
      d="M20 8.75c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z"
    />
    <path
      fill="url(#c)"
      d="M36.25 6.25H32.5v2.5h3.75c.69 0 1.25.56 1.25 1.25v6.25c0 .69-.56 1.25-1.25 1.25h-4.007a12.408 12.408 0 0 1-.777 2.5h4.784A3.754 3.754 0 0 0 40 16.25V10a3.754 3.754 0 0 0-3.75-3.75Z"
    />
    <path
      fill="url(#d)"
      d="M7.758 17.5H3.75c-.69 0-1.25-.56-1.25-1.25V10c0-.69.56-1.25 1.25-1.25H7.5v-2.5H3.75A3.754 3.754 0 0 0 0 10v6.25A3.754 3.754 0 0 0 3.75 20h4.784a12.446 12.446 0 0 1-.777-2.5Z"
    />
    <path
      fill="url(#e)"
      d="M31.466 20a12.38 12.38 0 0 1-2.716 3.944v2.306a1.25 1.25 0 0 0 1.809 1.118l1.941-.97 1.94.97a1.253 1.253 0 0 0 1.218-.055 1.25 1.25 0 0 0 .592-1.063V20h-4.784Z"
    />
    <path
      fill="url(#f)"
      d="M8.534 20a12.378 12.378 0 0 0 2.716 3.944v2.306a1.25 1.25 0 0 1-1.809 1.118l-1.941-.97-1.94.97a1.253 1.253 0 0 1-1.217-.055 1.25 1.25 0 0 1-.593-1.063V20h4.784Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={6.359}
        x2={33.643}
        y1={33.126}
        y2={5.842}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA9D74" />
        <stop offset={1} stopColor="#FADF9B" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={16.466}
        x2={23.534}
        y1={17.284}
        y2={10.216}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFA677" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={29.871}
        x2={39.913}
        y1={18.404}
        y2={8.363}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFA677" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={0.346}
        x2={9.871}
        y1={18.147}
        y2={8.621}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFA677" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={29.613}
        x2={36.746}
        y1={27.63}
        y2={20.496}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={3.933}
        x2={9.709}
        y1={26.951}
        y2={21.175}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
    </defs>
  </svg>
)
export default Cup
