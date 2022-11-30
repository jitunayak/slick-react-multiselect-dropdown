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
