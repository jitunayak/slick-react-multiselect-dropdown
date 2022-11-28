import { useState } from "react";
import "./MultiSelect.css";

export type Item = { label: string; key: string };
export type IProps = {
  placeholder?: string;
  list: Item[];
  selectedItems: Item[];
  setSelectedItems: any;
  enableSearch?: boolean;
  colorSelectedItem?: { border: string; background: string };
};

function MultiSelect({
  placeholder = "select",
  list = [
    { label: "Apple 🍎", key: "apple" },
    { label: "Unicorn 🦄", key: "unicorn" },
    { label: "Burger 🍔", key: "burder" },
    { label: "Cheers 🥂", key: "cheers" },
  ],
  selectedItems,
  setSelectedItems: setselectedItems,
  enableSearch = true,
  colorSelectedItem = { border: "red", background: "rgb(254 242 242)" },
}: IProps) {
  const [showDropDownBox, setshowDropDownBox] = useState(false);
  const [filtertext, setFiltertext] = useState("");
  const [allItem, setAllItem] = useState(list);

  const handleAddItem = (itemToBeAdded: Item) => {
    const doesItemAlreadyExist = selectedItems.find(
      (item) => item.key === itemToBeAdded.key
    );
    if (doesItemAlreadyExist) return;
    setselectedItems([...selectedItems, itemToBeAdded]);
  };

  const handleRemoveItem = (itemToBeRemoved: Item) => {
    setselectedItems(
      selectedItems.filter((item) => item.key !== itemToBeRemoved.key)
    );
  };

  return (
    <div className="dropBoxContainer">
      <div className="selectBox">
        {selectedItems.length === 0 && (
          <div
            className="selectedItem"
            style={{
              borderColor: `${colorSelectedItem.border}`,
              backgroundColor: `${colorSelectedItem.background}`,
            }}
            onClick={() => setshowDropDownBox(!showDropDownBox)}
          >
            {placeholder} ...{" "}
          </div>
        )}
        {selectedItems.map((item) => (
          <div
            key={item.key}
            className="selectedItem"
            style={{
              borderColor: `${colorSelectedItem.border}`,
              backgroundColor: `${colorSelectedItem.background}`,
            }}
            onClick={() => handleRemoveItem(item)}
          >
            {item.label} ｘ{" "}
          </div>
        ))}
      </div>
      {showDropDownBox && (
        <div className="dropDownBox">
          {enableSearch && (
            <input
              placeholder="search.."
              className="searchBox"
              value={filtertext}
              onChange={(e) => {
                setFiltertext(e.target.value);
                setAllItem(
                  list.filter((item) =>
                    item.label
                      .toLowerCase()
                      .startsWith(e.target.value.toLowerCase())
                  )
                );
              }}
            />
          )}
          <div className="scrollVertical">
            {allItem.map((s) => (
              <div
                key={s.key}
                className="itemLabel"
                onClick={() => handleAddItem(s)}
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
