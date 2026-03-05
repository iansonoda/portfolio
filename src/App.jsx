import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import portfolioData from "./data/portfolio.json";

function App() {
  const { personal } = portfolioData;

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<div className="flex-1 flex flex-col items-center justify-center pt-24"><h1 className="text-4xl font-bold mb-4">Project Page</h1><p className="text-muted-foreground">Coming soon!</p></div>} />
          </Routes>
          <Footer personal={personal} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
