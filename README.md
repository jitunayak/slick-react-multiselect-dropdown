# Slick React Multiselect Dropdown

### Demo https://slick-react-multiselect-dropdown.vercel.app/) 

A very `lightweight` and simple multiple selection dropdown component with `search`

[![NPM](https://img.shields.io/npm/v/slick-react-multiselect-dropdown.svg)](https://npm.im/slick-react-multiselect-dropdown)
[![gzip](https://badgen.net/bundlephobia/minzip/slick-react-multiselect-dropdown@latest)](https://bundlephobia.com/result?p=slick-react-multiselect-dropdownt@latest)

[<img src="https://github.com/jitunayak/slick-react-multiselect-dropdown/blob/main/public/snapshot5..png?raw=true" width="200"/>](image.png)
[<img src="https://github.com/jitunayak/slick-react-multiselect-dropdown/blob/main/public/snapshot4.png?raw=true" width="250"/>](image.png)

## ✨ Features

- 🕶 Zero Dependency
- 🍃 Lightweight (<5KB)
- ✌ Written w/ TypeScript
- ⌨ Keyboard navigation to search, move, close dropddown items
- 🔍 Search character hightlights
- 💄 Fully themable

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

## 💄 Themable

color values for selected Items could be in all css accepted formats. such as `#cece` `rgb(254 242 242)` `green`

```ts

  const colorSelectedItem = {
    { border: "red", background: "rgb(254 242 242)" }
  }

   <MultiSelect
        placeholder="Select from list"
        list= {listItems}
        selectedItems= {selectedItem}
        setSelectedItems= {setSelectedItem}
        colorSelectedItem= {colorSelectedItem}
    />
```

## Result

[<img src="https://github.com/jitunayak/slick-react-multiselect-dropdown/blob/main/public/snapshot2.jpeg?raw=true" width="350"/>](image.png)

## Wrap Items

[<img src="https://github.com/jitunayak/slick-react-multiselect-dropdown/blob/main/public/snapshot3.png?raw=true" width="350"/>](image.png)

## Types

```ts
export type Item = { label: string; key: string };

export type IProps = {
  placeholder?: string;
  list: Item[];
  selectedItems: Item[];
  setSelectedItems: any;
  enableSearch?: boolean;
  colorSelectedItem?: { border: string; background: string };
  selectBoxcss?: {}; // any inline css properties e.g  selectBoxcss={{padding: '.2rem'}}
};
```
