import { useState } from "react";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <svg
        className={`checkbox-icon ${isChecked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#000" : "none"}
        />
      </svg>
    </label>
  );
}

export default Checkbox;