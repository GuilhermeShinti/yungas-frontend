import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
        <GlobalStyle />
        <Sidebar></Sidebar>
        <Navbar></Navbar>
    </>
  );
}

export default App;
