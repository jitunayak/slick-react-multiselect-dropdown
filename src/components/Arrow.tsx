export const Arrow = ({ expanded }: { expanded: boolean }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="gray"
    strokeWidth="1.6"
    className="dropdown-heading-dropdown-arrow"
  >
    <path d={expanded ? "M18 15 12 9 6 15" : "M6 9L12 15 18 9"} />
  </svg>
);
