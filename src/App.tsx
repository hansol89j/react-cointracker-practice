import GlobalStyle from "./components/GlobalStyle";
import Router from './Router';
import {ReactQueryDevtools} from 'react-query/devtools';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
      <ReactQueryDevtools initialIsOpen = {true} />
    </>
  );
}

export default App;
