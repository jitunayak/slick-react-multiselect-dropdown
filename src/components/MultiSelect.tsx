import React, { useEffect, useRef, useState } from "react";
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
    window.addEventListener("click", () => {
      isFocused ? setshowDropDownBox(true) : setshowDropDownBox(false);
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, [isFocused]);

  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const enterPressed = useKeyPress("Enter");
  const escPressed = useKeyPress("Escape");

  useEffect(() => {
    if (arrowUpPressed) {
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
      if (!showDropDownBox) {
        setshowDropDownBox(true);
        return;
      }
      const itemTobeAdded = allItem[currentFocusedLabelIndex];
      handleAddItem(itemTobeAdded);
    }
  }, [enterPressed]);

  useEffect(() => {
    if (escPressed) {
      setshowDropDownBox(false);
    }
  }, [escPressed]);

  function searchHighLightedResult(label: string): React.ReactNode {
    if (filtertext.length === 0) return label;
    if (label.toLowerCase().startsWith(filtertext))
      return (
        <>
          <b style={{ color: colorSelectedItem.border }}>{filtertext}</b>
          {label.split(filtertext).at(1)}
        </>
      );

    return (
      <>
        {label.split(filtertext).at(0)}
        <b style={{ color: colorSelectedItem.border }}>{filtertext}</b>
        {label.split(filtertext).at(1)}
      </>
    );
  }

  return (
    <div
      className="dropBoxContainer"
      onMouseLeave={() => {
        setisFocused(false);
      }}
      onMouseEnter={() => {
        setisFocused(true);
        searchInputRef?.current?.focus();
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
            showDropDownBox ? setisFocused(false) : setisFocused(true);
            setshowDropDownBox(!showDropDownBox);
          }}
        >
          <Arrow expanded={showDropDownBox} />
        </div>
      </div>

      <div className={showDropDownBox ? "dropDownBoxShow" : "dropDownBox"}>
        {enableSearch && (
          <input
            placeholder="search.."
            className="searchBox"
            value={filtertext}
            ref={searchInputRef}
            onChange={(e) => {
              setFiltertext(e.target.value.toLowerCase());
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
              {searchHighLightedResult(s.label.toLowerCase())}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;
