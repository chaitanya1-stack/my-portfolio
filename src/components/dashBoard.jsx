import React, { useState, useEffect, useRef  } from 'react';
import '../components/dashboard.css'; 
import AnimatedArrow from './animatedArrow'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoadingAnimation from './loadingAnimation'; // Adjust path if needed







const Dashboard = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [loading, setLoading] = useState(true);

  



  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500); 

  return () => clearTimeout(timer);
}, []);




//  for scrolling 
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

const scrollToSection = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

 if (loading) {
  return <LoadingAnimation />;
}


  return (


    
    <div className="wholeContainer">

       <div
        className="cursor-glow"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>



      <div className="navcontainer">
        <div className="custom-navbar">
          <div className="name1">CHAITANYA KUMAR</div>



          <div className="icons d-flex">
            <i className="bi bi-github"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-envelope"></i>
          </div>

         
        </div>


      
      </div>

      
         <div className="intro_linksto">
         <div className="intro">
        <div className="introContent">
        <div className="welcome">Welcome<strong className="dot">.</strong></div>
        <div className="introval">
           Hi, I'm <strong className="chaitanya">Chaitanya Kumar</strong> — a Full Stack Developer passionate about building seamless, responsive, and scalable web applications from frontend to backend.
          </div>
      </div>
    </div>

          <div className="linksto">
            <div className="aboutmediv" onClick={() => scrollToSection(aboutRef)}><AnimatedArrow/><div className="aboutme">About me</div></div>
             <div className="projectdiv" onClick={() => scrollToSection(projectsRef)} ><AnimatedArrow/><div className="project">Projects</div></div>
             <div className="resumediv" onClick={() => scrollToSection(resumeRef)} ><AnimatedArrow/><div className="resume">Resume</div></div>
            </div>


        </div>


        <div className="aboutmedescription_cont" ref={aboutRef}>
          <div className="aboutmedescription">About me</div>
          <div className="aboutmedescription_val">
            <p>I'm currently a 3rd-year undergraduate student at <strong className="boldhighlight">IIT Guwahati</strong>, pursuing a major in <strong className="boldhighlight">Biosciences and Bioengineering</strong>. 
               With a strong foundation in science and a passion for technology, I've been actively exploring the world of software development. 
               Over time, I've developed into a <strong className="boldhighlight">Full Stack Developer</strong>, building responsive, scalable, and user-friendly web applications.</p>
            <p>I'm particularly interested in blending my background in biosciences with digital solutions, and I'm constantly working on projects that improve usability, performance, and functionality. 
                I enjoy working across the stack — from clean UI design to efficient backend logic and database management.</p>
            <p>Outside of academics and coding, I'm always eager to learn new technologies, collaborate on impactful projects.</p>
  
 
          </div>
        </div>


        <div className="projectsdescription_cont" ref={projectsRef}>
          <div className="projectsdescription">Projects</div>
          <div className="projectsdescription_val">
            <div className="tradegenix">TRADEGENIX–Stock Market Intelligence Dashboard <i class="bi bi-box-arrow-up-right"></i> <i class="bi bi-github"></i></div>
            <div className="tradegenixdescription"> <p>TradeGeniX is a full-stack stock market dashboard designed for real-time financial analysis and visualization. It leverages third-party APIs like Finnhub to fetch live stock data, company overviews, and historical price charts—empowering users to make data-driven investment decisions.</p>
            
            <p className="keyfeatures">Key Features :</p>
            <p> Real-time quotes & financial data via Finnhub API.</p>
            <p> Search and track stocks (e.g., AAPL, TSLA).</p>
            <p>5-year interactive charts (Recharts).</p>
            <p> Modular component structure for scalability.</p>
            <p> Scalable component architecture.</p>

            <div className="techstack">
              <div className="techstack1">React.js</div>
              <div className="techstack1"> Recharts</div>
              <div className="techstack1">Node.js</div>
              <div className="techstack1">Express.js</div>
              <div className="techstack1"> MongoDB</div>
              <div className="techstack1"> REST API </div>
              
            </div>
           
       </div>
          </div>
        </div>
     
     

      
    </div>
  );
};

export default Dashboard;