import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Socials from "./pages/Socials";
import ProjectsPage from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollObserver from "./components/layout/ScrollObserver";
import TitleManager from "./components/layout/TitleManager";
import portfolioData from "./data/portfolio.json";

function App() {
  const { personal } = portfolioData;

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
          <ScrollObserver />
          <TitleManager />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
          <Footer personal={personal} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
