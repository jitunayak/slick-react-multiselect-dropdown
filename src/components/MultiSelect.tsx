import { useState } from "react";
import "./MultiSelect.css";

type Item = { label: string; key: string };
type IProps = {
  placeholder?: string;
  list: Item[];
  //   selectedItems: Item[];
  //   setselectedItems: any;
  selectedItems: Item[];
  setSelectedItems: any;
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
}: IProps) {
  //   const [selectedItems, setselectedItems] = useState<Item[]>([]);
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
            onClick={() => setshowDropDownBox(!showDropDownBox)}
          >
            {placeholder} ...{" "}
          </div>
        )}
        {selectedItems.map((item) => (
          <div
            key={item.key}
            className="selectedItem"
            onClick={() => handleRemoveItem(item)}
          >
            {item.label} ｘ{" "}
          </div>
        ))}
      </div>
      {showDropDownBox && (
        <div className="dropDownBox">
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
