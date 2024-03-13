// ------------------------------------------------slider buttons -----------------------------------------------------------
// ------------prev-button-----------------
export const Prevbtn = () => {
  return (
    <svg
      className="read_arrows"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="transition-all duration-300"
        width="40"
        height="40"
        rx="20"
        transform="matrix(-1 0 0 1 40 0)"
        fill="#C2BDBC"
      />
      <path
        d="M24 11L15.5 19.5L24 28"
        stroke="#FCFEFC"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
//-------------- next-button----------------
export const Nextbtn = () => {
  return (
    <svg
      className="read_arrows"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="transition-all duration-300"
        width="40"
        height="40"
        rx="20"
        fill="#C2BDBC"
      />
      <path
        d="M16 11L24.5 19.5L16 28"
        stroke="#FCFEFC"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
