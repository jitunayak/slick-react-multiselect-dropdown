## Slick React Multiselect Dropdown

!["demo snapshot"](https://github.com/jitunayak/slick-react-multiselect-dropdown/blob/main/public/snapshot1.jpeg?raw=true)

```ts
 const listItems = [
    { label: "Apple 🍎", key: "apple" },
    { label: "Unicorn 🦄", key: "unicorn" },
    { label: "Burger 🍔", key: "burder" },
    { label: "Cheers 🥂", key: "cheers" },
  ];

  const [selectedItem, setSelectedItem] = useState([]);

   <MultiSelect
        placeholder="Select from list"
        list={listItems}
        selectedItems={selectedItem}
        setSelectedItems={setSelectedItem}
    />
```
