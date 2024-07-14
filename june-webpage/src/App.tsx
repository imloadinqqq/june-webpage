import React, { useState, useEffect } from 'react';
import Resume from './resume/resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import githubLogo from './assets/github-mark-white.png'
import discordLogo from './assets/discord-mark-white.png'
import linkedinLogo from './assets/in-blue.png'
import steamLogo from './assets/steam.png'
import './App.css'

function App() {
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    // <div className="app-container">
    //   <div className="clock-and-socials">
    //     <div className="clock">
    //       {currentTime.toLocaleTimeString()}
    //     </div>
    //     <div className="social-links">
    //       <p>Social Links</p>
    //       <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
    //         <img src={discordLogo} alt="Discord" />
    //       </a>
    //       <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    //         <img src={githubLogo} alt="GitHub" />
    //       </a>
    //       <a href="https://www.linkedin.com/in/alex-diaz-1560a928a/" target="_blank" rel="noopener noreferrer">
    //         <img src={linkedinLogo} alt="LinkedIn" />
    //       </a>
    //       <a href="https://steamcommunity.com/id/minecraftman0513" target="_blank" rel="noopener noreferrer">
    //         <img src={steamLogo} alt="Steam" />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="about-me">
    //     <h1>About Me</h1>
    //     <p>
    //       Hello! My name is Alex Diaz and I'm an aspiring web developer. I love to learn new things and love to solve problems.
    //       Currently making this website to learn more about web development and to showcase my skills. Feel free to take a look at my socials
    //       on the left! Have a great day.
    //     </p>
    //   </div>
    //   <Router>
    //     <div>
    //       {/* Other components can stay outside Switch if they should render on all pages */}
    //       <Switch>
    //         {/* Define the route for your Resume component */}
    //         <Route path="/resume" Component={Resume} />
    //         {/* Other routes here */}
    //       </Switch>
    //     </div>
    // </Router>
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        // Add more routes as needed
      </Routes>
    </Router>
  );
}

export default App
