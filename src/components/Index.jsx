import React, { useState, useEffect } from 'react';
import '../static/css/App.css';
import Header from './Header';
import Card from './Card';
import Skills from './Skills';
import SocialMedia from './SocialMedia';
import data from "../assets/data.json";
import Projects from './Projects';

function Index() {
  const [showProjects, setShowProjects] = useState(false);
  const [showIndex, setIndex] = useState(false);
  const handleProjectsClick = () => {
    setShowProjects(true);
  };
  const handleIndexClick = () => {
    setShowProjects(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.backgroundPositionY = "-18vh";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (showIndex == false) ? (
    <div className='FakeIndex'>
      <h1>WELCOME</h1>
    </div>
  ) : (
    <div className='App'>
      <Header onProjectsClick={handleProjectsClick} onIndexClick={handleIndexClick}></Header>
      { showProjects ? (
        <Projects></Projects>
      ) : (
        <>
          <div className='information'>
            <Card></Card>
            <div className='skillsSocialMedia'>
              <Skills></Skills>
              <SocialMedia></SocialMedia>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
