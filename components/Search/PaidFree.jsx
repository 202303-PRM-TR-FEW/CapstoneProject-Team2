import { useState, useEffect } from "react";

const PaidFree = ({ onChange }) => {
  const [isFreeChecked, setIsFreeChecked] = useState(false);
  const [isPaidChecked, setIsPaidChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "free") {
      setIsFreeChecked(checked);
    } else if (name === "paid") {
      setIsPaidChecked(checked);
    }
  };

  useEffect(() => {
    onChange(isFreeChecked, isPaidChecked);
  }, [isFreeChecked, isPaidChecked]);

  return (
    <div>
      <h1>Prices</h1>
      <div className="flex gap-2">
        <label>
          <input
            type="checkbox"
            name="free"
            checked={isFreeChecked}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Free</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="paid"
            checked={isPaidChecked}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Paid</span>
        </label>
      </div>
    </div>
  );
};

export default PaidFree;
