import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";

import portfolioData from "./data/portfolio.json";

function App() {
  const { personal, skills, projects } = portfolioData;

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Header personal={personal} />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero personal={personal} />
        <About personal={personal} skills={skills} />
        <Projects projects={projects} />
      </main>
      <Footer personal={personal} />
    </div>
  );
}

export default App;
