export type Colors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'default';
export interface CustomInput extends HTMLInputElement {
  selected: boolean;
}

export type AlertTypes = {
  id: string,
  type?: string,
  title?: string,
  subtitle?: string,
  message?: string,
  messageType?: string,
  state?: 'info' | 'warning' | 'error' | 'success',
  hide: boolean,
}
