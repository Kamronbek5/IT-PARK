const Reading = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M21.25 5c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75S30 18.575 30 13.75 26.075 5 21.25 5Z"
    />
    <path
      fill="url(#b)"
      d="M21.25 20A6.257 6.257 0 0 1 15 13.75a6.257 6.257 0 0 1 6.25-6.25 6.257 6.257 0 0 1 6.25 6.25A6.257 6.257 0 0 1 21.25 20Z"
    />
    <path
      fill="url(#c)"
      d="M21.25 15c-.32 0-.64-.122-.884-.366l-2.5-2.5a1.25 1.25 0 1 1 1.768-1.768l2.5 2.5A1.25 1.25 0 0 1 21.25 15Z"
    />
    <path
      fill="url(#d)"
      d="M8.75 30v2.5c0 1.375 1.125 2.5 2.5 2.5H32.5v-7.5H11.25a2.507 2.507 0 0 0-2.5 2.5Z"
    />
    <path
      fill="url(#e)"
      d="M11.25 27.5H35c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H10a6.257 6.257 0 0 0-6.25 6.25v5A6.257 6.257 0 0 0 10 40h25c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H11.25a2.507 2.507 0 0 1-2.5-2.5V30c0-1.375 1.125-2.5 2.5-2.5Z"
    />
    <path
      fill="url(#f)"
      d="M28.75 32.5H12.5a1.25 1.25 0 0 1 0-2.5h16.25a1.25 1.25 0 0 1 0 2.5Z"
    />
    <path
      fill="url(#g)"
      d="M30 8.75c-.32 0-.64-.122-.884-.366l-2.5-2.5a1.25 1.25 0 1 1 1.768-1.768l2.5 2.5A1.25 1.25 0 0 1 30 8.75Zm-16.616-.366 2.5-2.5a1.25 1.25 0 1 0-1.768-1.768l-2.5 2.5a1.25 1.25 0 1 0 1.768 1.768ZM23.75 1.25C23.75.56 23.19 0 22.5 0H20a1.25 1.25 0 0 0 0 2.5h2.5c.69 0 1.25-.56 1.25-1.25Z"
    />
    <path
      fill="url(#h)"
      d="m26.983 6.25 1.767 1.768-.502.501a8.805 8.805 0 0 0-1.767-1.767l.502-.502Zm-11.466 0L13.75 8.018l.502.501a8.805 8.805 0 0 1 1.767-1.767l-.501-.502ZM20 5.1c.41-.06.824-.1 1.25-.1.426 0 .84.04 1.25.1V2.5H20v2.6Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={15.066}
        x2={27.435}
        y1={19.935}
        y2={7.567}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={16.833}
        x2={25.668}
        y1={18.168}
        y2={9.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C3C" />
        <stop offset={1} stopColor="#666" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={19.116}
        x2={20.884}
        y1={13.384}
        y2={11.616}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA9D74" />
        <stop offset={1} stopColor="#FADF9B" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={13.914}
        x2={28.805}
        y1={38.696}
        y2={23.806}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA9D74" />
        <stop offset={1} stopColor="#FADF9B" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={10.066}
        x2={32.867}
        y1={42.651}
        y2={19.85}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C3C" />
        <stop offset={1} stopColor="#666" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={15.679}
        x2={25.572}
        y1={36.197}
        y2={26.304}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6A59" />
        <stop offset={1} stopColor="#FFA677" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={15.991}
        x2={26.509}
        y1={12.759}
        y2={2.241}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7055C2" />
        <stop offset={1} stopColor="#D055C2" />
      </linearGradient>
      <linearGradient
        id="h"
        x1={17.5}
        x2={25}
        y1={11.768}
        y2={4.268}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C3C" />
        <stop offset={1} stopColor="#666" />
      </linearGradient>
    </defs>
  </svg>
)
export default Reading
