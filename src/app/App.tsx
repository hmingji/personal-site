import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../projects';

function App() {
  const ref = React.useRef<HTMLHeadingElement | null>(null);

  const handleScrollOnClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadOnClick = () => {
    fetch('/documents/RESUME_HENG MING JI-ver4-2022.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'my-resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <div
      data-theme="lofi"
      className="flex flex-col mx-auto sm:w-9/12 min-h-screen"
    >
      <Header
        handleScrollOnClick={handleScrollOnClick}
        handleDownloadOnClick={handleDownloadOnClick}
      />

      <div className="flex-grow">
        <Hero />
      </div>

      <h2
        ref={ref}
        className="text-slate-500 ml-2"
      >
        #Projects
      </h2>

      {projects.map((project) => (
        <div
          key={project.title}
          className="mt-4"
        >
          <ProjectCard {...project} />
          <div className="divider mt-8 px-10"></div>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default App;
