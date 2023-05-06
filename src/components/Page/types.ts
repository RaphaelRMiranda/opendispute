export type TPage = {
  title: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
  filter?: React.ReactNode | React.ReactNode[]
};
