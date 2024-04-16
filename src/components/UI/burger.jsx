export const Burger = ({setHeader, headerActive}) => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{position: "absolute", top: 0, left: 0, backgroundColor: "white", cursor: "pointer"}}
      onClick={() => setHeader(!headerActive)}
    >
      <path
        d="M4 18L20 18"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
