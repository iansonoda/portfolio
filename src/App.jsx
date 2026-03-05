import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";

import portfolioData from "./data/portfolio.json";

function App() {
  const { personal, skills, projects } = portfolioData;

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero personal={personal} />
        <Skills skills={skills} />
        <Projects projects={projects} />
      </main>
      <Footer personal={personal} />
    </div>
  );
}

export default App;
