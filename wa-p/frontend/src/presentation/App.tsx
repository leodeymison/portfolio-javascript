import usePersistedState from "@/presentation/utils/usePersistedState";
import React from "react";

// Pages
import Routers from '@/main/routes'

// Components
import Navbar from '@/presentation/components/Navbar'

// Styleds
import { GlobalStyled, SectionStyled } from "@/presentation/assets/style/styled";
import { DefaultTheme, ThemeProvider } from "styled-components";

// themes
import dark from "@/presentation/themes/dark";
import light from "./themes/light";

const App:React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('thema', dark)

  function toggleTheme(){
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Navbar 
        toggleTheme={toggleTheme} 
        theme={theme.title} 
      />
      <SectionStyled>
        <br /><br />
        <Routers /> 
      </SectionStyled>
    </ThemeProvider>
    </>
  );
}

export default App;
