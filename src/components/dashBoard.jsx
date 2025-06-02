import React, { useState, useEffect } from 'react';
import '../components/dashboard.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Dashboard = () => {
  // for animation on scrolling
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="wholeContainer">
      <div className="navcontainer">
        <nav className="custom-navbar">
          {/* Left-aligned icons */}
          <div className="icons d-flex">
            <i className="bi bi-github"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-envelope"></i>
          </div>

          {/* Right-aligned nav links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="intro">
        <div className="name">CHAITANYA KUMAR</div>
      </div>

      <div className="fullstack">
        <div className="aspiring">Aspiring Full Stack Developer</div>
      </div>

      <div
        className="cursor-glow"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>

      <div className="about" id="about" ref={aboutRef}>
        <motion.div
          className="left_column"
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="aboutme">About Me</div>
        </motion.div>

        <div className="right_column">
          {[
            `Hi, I'm `,
            `I'm currently building expertise in full-stack development using the MERN stack...`,
            `I enjoy working on responsive UI design, creating RESTful APIs...`,
            `Outside tech, I'm passionate about Photography...`,
            `I'm currently looking for internship opportunities...`
          ].map((text, index) => (
            <motion.div
              key={index}
              className="aboutmedescription"
              initial={{ opacity: 0, y: 40 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              {index === 0 && (
                <>
                  Hi, I'm <strong className="boldindescription">Chaitanya Kumar</strong>, a third-year B.Tech student at <strong className="boldindescription">IIT Guwahati</strong>, majoring in <strong className="boldindescription">Biosciences and Bioengineering</strong>. While my academic foundation lies in life sciences, my passion for <strong className="boldindescription">technology, web development, and problem-solving</strong> has led me to actively explore and build projects in the software domain.
                </>
              )}
              {index === 1 && (
                <>
                  I’m currently building expertise in <strong className="boldindescription">full-stack development</strong> using the <strong className="boldindescription">MERN stack</strong>. Some of my key projects include <strong className="boldindescription">LearnDSA</strong>, a smart DSA practice tracker, and an <strong className="boldindescription">Online Compiler</strong> that lets users write, compile, and run code directly in the browser.
                </>
              )}
              {index === 2 && (
                <>
                  I enjoy working on <strong className="boldindescription">responsive UI design</strong>, creating <strong className="boldindescription">RESTful APIs</strong>, and solving real-world problems through code. I also actively practice <strong className="boldindescription">DSA concepts</strong> to sharpen my logic and problem-solving skills.
                </>
              )}
              {index === 3 && (
                <>
                  Outside tech, I'm passionate about <strong className="boldindescription">Photography</strong>, which adds a creative dimension to my work and perspective.
                </>
              )}
              {index === 4 && (
                <>
                  I’m currently looking for <strong className="boldindescription">internship opportunities</strong>, where I can apply my skills, gain real-world experience, and contribute meaningfully as a developer.
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
