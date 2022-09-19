import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

function App() {
  return (
    <div
      data-theme="lofi"
      className="mx-auto sm:w-9/12"
    >
      <Header />
      <Hero />
      {/* <ProjectCard /> */}
    </div>
  );
}

export default App;
