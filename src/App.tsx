import GlobalStyle from "./components/GlobalStyle";
import Router from './Router';
import {ReactQueryDevtools} from 'react-query/devtools';
import { ThemeProvider} from "styled-components";
//Reset.css component
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark(current => !current);
  return (
    <>
      <ThemeProvider theme={isDark? darkTheme : lightTheme}>
        <button onClick = {toggleDark}>{isDark? "Light mode" : "Dark mode"}</button>  
        <GlobalStyle/>
        <Router/>
        <ReactQueryDevtools initialIsOpen = {true} />
      </ThemeProvider>
    </>
  );
}

export default App;
