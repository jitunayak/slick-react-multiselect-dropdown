import { useState } from "react";
import MultiSelect from "./components/MultiSelect";
import "./components/MultiSelect.css";
import { Item } from "./components/Types";

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
      colorSelectedItem={{ border: "red", background: "rgb(254 242 242)" }}
    />
  );
}

export default App;
