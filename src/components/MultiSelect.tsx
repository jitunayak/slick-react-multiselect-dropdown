import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";
import "./MultiSelect.css";
import { IProps, Item } from "./Types";
import useKeyPress from "./UseKeyPress";

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
  const [currentFocusedLabelIndex, setCurrentFocusedLabel] = useState(0);

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

  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const enterPressed = useKeyPress("Enter");

  useEffect(() => {
    if (arrowUpPressed) {
      console.log("arrowUpPressed");
      currentFocusedLabelIndex === 0
        ? setCurrentFocusedLabel(allItem.length - 1)
        : setCurrentFocusedLabel(currentFocusedLabelIndex - 1);
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      currentFocusedLabelIndex === allItem.length - 1
        ? setCurrentFocusedLabel(0)
        : setCurrentFocusedLabel(currentFocusedLabelIndex + 1);
    }
  }, [arrowDownPressed]);

  useEffect(() => {
    if (enterPressed) {
      const itemTobeAdded = allItem[currentFocusedLabelIndex];
      handleAddItem(itemTobeAdded);
    }
  }, [enterPressed]);

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
            {item.label} ｘ
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
                      .includes(e.target.value.toLowerCase())
                  )
                );
              }}
            />
          )}
          <div className="scrollVertical">
            {allItem.map((s, index) => (
              <div
                key={s.key}
                className="itemLabel"
                style={{
                  backgroundColor:
                    currentFocusedLabelIndex === index ? "#eee" : "white",
                }}
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
