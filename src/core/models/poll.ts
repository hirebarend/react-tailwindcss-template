export type Poll = {
  expiry: number | null;

  id: string;

  multiple: boolean;

  options: Array<string>;

  title: string;
};
