export type TOption = {
  label: string;
  value: string;
};

export type TSelect = {
  label?: string;
  error?: string;
  options?: Array<TOption>;
  onChange?: () => void;
};
