import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import {ThemeProvider} from 'styled-components'

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme ==='light'? lightTheme : darkTheme;


  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Navbar/>
        <Main />
        <About/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
