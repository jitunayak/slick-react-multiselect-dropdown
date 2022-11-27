import { useState } from "react";
import "./App.css";
import "./multiselect.css";

type Item = { label: string; key: string };
type IProps = {
  placeholder?: string;
  list?: Item[];
};

function MultiSelect({
  placeholder = "select",
  list = [
    { label: "Apple 🍎", key: "apple" },
    { label: "Unicorn 🦄", key: "unicorn" },
  ],
}: IProps) {
  const [selectedItems, setselectedItems] = useState<Item[]>(list);

  return (
    <div>
      <div className="selectBox">
        {selectedItems.map((item) => (
          <div
            style={{
              backgroundColor: "#cece",
              padding: "0.1rem",
              margin: ".2rem",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="dropDownContainer">
        {list.map((item) => (
          <div key={item.key} className="dropDownItem">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiSelect;
