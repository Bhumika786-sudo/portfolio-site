import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="App">
      <Header 
        name={portfolioData.basicInfo.name} 
        title={portfolioData.basicInfo.title} 
      />
      <About {...portfolioData.basicInfo} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Resources resources={portfolioData.resources} />
      <DeveloperSetup setup={portfolioData.developerSetup} />
      <Footer />
    </div>
  );
}

export default App;