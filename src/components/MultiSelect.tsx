import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";
import "./MultiSelect.css";

export type Item = { label: string; key: string };
export type IProps = {
  placeholder?: string;
  list: Item[];
  selectedItems: Item[];
  setSelectedItems: any;
  enableSearch?: boolean;
  colorSelectedItem?: { border: string; background: string };
  selectBoxcss?: {};
};

const sizeTypes = {
  small: { padding: "0.2rem", backGroundColor: "red" },
};

function MultiSelect({
  placeholder = "select",
  list = [],
  selectedItems,
  setSelectedItems: setselectedItems,
  enableSearch = true,
  colorSelectedItem = { border: "green", background: "#cecec" },
  selectBoxcss = {},
}: IProps) {
  const searchInputRef = useRef<any>();

  const [showDropDownBox, setshowDropDownBox] = useState(false);
  const [filtertext, setFiltertext] = useState("");
  const [allItem, setAllItem] = useState(list);
  const [isFocused, setisFocused] = useState(false);

  //   const [isSearchBoxFocused, setIsSearchBoxFocused] = useState(true);

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

  useEffect(() => {
    const listner = window.addEventListener("click", () => {
      isFocused ? setshowDropDownBox(true) : setshowDropDownBox(false);
    });

    return () => {};
  }, [isFocused]);

  return (
    <div
      className="dropBoxContainer"
      onMouseLeave={() => {
        setisFocused(false);
      }}
      onMouseEnter={() => {
        searchInputRef?.current?.focus();
        setisFocused(true);
      }}
    >
      <div className="selectBox" style={selectBoxcss}>
        {selectedItems.length === 0 && (
          <div
            className="selectedItem"
            style={{
              borderColor: `${colorSelectedItem.border}`,
              backgroundColor: `${colorSelectedItem.background}`,
            }}
            onClick={() => {
              setshowDropDownBox(!showDropDownBox);
              setisFocused(true);
            }}
          >
            {placeholder} ...
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
        <div style={{ width: "2rem" }}></div>
        <div
          className="icon"
          onClick={() => {
            setisFocused(!isFocused);
            setshowDropDownBox(!showDropDownBox);
          }}
        >
          <Arrow expanded={showDropDownBox} />
        </div>
      </div>
      {showDropDownBox && (
        <div className="dropDownBox">
          {enableSearch && (
            <input
              placeholder="search.."
              className="searchBox"
              value={filtertext}
              ref={searchInputRef}
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
