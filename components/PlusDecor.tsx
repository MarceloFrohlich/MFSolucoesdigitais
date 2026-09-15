const positions = [
  { top: "8%", left: "4%" },
  { top: "18%", left: "92%" },
  { top: "42%", left: "8%" },
  { top: "72%", left: "95%" },
  { top: "88%", left: "6%" },
];

export default function PlusDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {positions.map((pos, i) => (
        <span key={i} className="plus-decor" style={{ top: pos.top, left: pos.left }}>
          +
        </span>
      ))}
    </div>
  );
}
