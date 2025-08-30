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

// function MyComponent() {
//   const darkMode = useStore(state => state.darkMode);
//   const mode = darkMode ? 'dark' : 'light';
//   // 3가지 이상의 색상모드의 경우 type 또는 상수 지정해서 사용
//   const { text, background } = colors[mode];

//   const Box = styled.div`
//     color: ${text};
//     background-color: ${background};
//   `;
//   return <Box>Hello</Box>;
// }
