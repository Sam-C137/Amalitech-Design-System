export interface Action {
  icon?: string;
  callback: (row: any) => void;
}