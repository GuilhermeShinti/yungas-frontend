import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Courses } from "./pages/Courses";
import { Content } from "./components/Content";

function App() {
  return (
    <>
        <GlobalStyle />
        <Sidebar />
        <Content>
            <Navbar />
            <Courses></Courses>
        </Content>
        
        
    </>
  );
}

export default App;
