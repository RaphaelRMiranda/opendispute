export type TInput = {
  placeholder?: string;
  label?: string;
  error?: string;
  onChange?: () => void;
};

export type TRadio = {
  label?: string;
  error?: string;
  onChange?: (value: boolean) => void;
  checked?: boolean;
};
