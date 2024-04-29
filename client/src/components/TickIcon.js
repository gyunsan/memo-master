const TickIcon = () => {
  return (
    <svg
      className="tick"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={"24"}
      width={"24"}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M7.29417 12.9577L10.5048 16.1681L17.6729 9"
          stroke="#000000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#000000"
          stroke-width="2"
        ></circle>{" "}
      </g>
    </svg>
  );
};

export default TickIcon;
