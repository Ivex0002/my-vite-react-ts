type color = {
  text: string;
  background: string;
};

const dark: color = {
  text: "#fff",
  background: "#000",
};

const light: color = {
  text: "#000",
  background: "#fff",
};

export const colors = { dark, light } as const;
export type ColorTheme = keyof typeof colors; // 'dark' | 'light'
export const themeKeys = Object.keys(colors) as ColorTheme[]; // ['dark', 'light']


