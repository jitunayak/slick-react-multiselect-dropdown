# Slick React Multiselect Dropdown

A very `lightweight` and simple multiple selection dropdown component with `search`

[![NPM](https://img.shields.io/npm/v/slick-react-multiselect-dropdown.svg)](https://npm.im/slick-react-multiselect-dropdown)
[![gzip](https://badgen.net/bundlephobia/minzip/slick-react-multiselect-dropdown@latest)](https://bundlephobia.com/result?p=slick-react-multiselect-dropdownt@latest)

!["demo snapshot"](https://github.com/jitunayak/slick-react-multiselect-dropdown/blob/main/public/snapshot1.jpeg?raw=true)

## ✨ Features

- 🕶 Zero Dependency
- 🍃 Lightweight (<5KB)
- ✌ Written w/ TypeScript

## 🔧 Installation

```bash
npm i slick-react-multiselect-dropdown    # npm
yarn add slick-react-multiselect-dropdown # yarn
```

## 📦 Example

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
