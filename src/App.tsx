import { useState } from "react";
import MultiSelect, { Item } from "./components/MultiSelect";
import "./components/MultiSelect.css";

function App() {
  const placeholder = "select";
  const list = [
    {
      label: "Apple 🍎 Four times 4",
      key: "apple",
    },
    { label: "Unicorn 🦄", key: "unicorn" },
    { label: "Burger 🍔", key: "burder" },
    { label: "Cheers 🥂", key: "cheers" },
    { label: "Unicorn 🦄", key: "unicorn2" },
    { label: "Burger 🍔", key: "burder2" },
    { label: "Cheers 🥂", key: "cheers2" },
  ];
  const [selectedItems, setselectedItems] = useState<Item[]>([]);
  const [showDropDownBox, setshowDropDownBox] = useState(false);
  const [filtertext, setFiltertext] = useState("");
  const [allItem, setAllItem] = useState(list);

  return (
    <MultiSelect
      list={list}
      selectedItems={selectedItems}
      setSelectedItems={setselectedItems}
      enableSearch={true}
    />
  );
}

export default App;
