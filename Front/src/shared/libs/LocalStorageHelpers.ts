/* eslint-disable @typescript-eslint/no-explicit-any */
export const getItemFromLocalStorage = (name: string) =>
  localStorage.getItem(name);
export const setItemToLocalStorage = (name: string, payload: any) =>
  localStorage.setItem(name, payload);
