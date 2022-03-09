import "./App.css";
import { BlogContent } from "./components/BlogContent/BlogContent";
import { Header } from "./components/Header/Header.jsx";
import "./components/Header/Header.css";
import "./components/BlogContent/BlogContent.css";
import { Footer } from "./components/Footer/Footer";
import "./components/Footer/Footer.css";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogContent />
      </main>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
