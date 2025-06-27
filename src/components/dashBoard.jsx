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
  const scrollRef = useRef(null);

const scrollToSection = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

 if (loading) {
  return <LoadingAnimation />;
}


  return (
    <div>


    
    <div className="wholeContainer" ref={scrollRef}>

       <div
        className="cursor-glow"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>



      <div className="navcontainer"  >
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
            <div className="tradegenix"><strong className="tradegenix1">TRADEGENIX</strong>–Stock Market Intelligence Dashboard <i class="bi bi-box-arrow-up-right"></i> <i class="bi bi-github"></i></div>
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



       <div className="tradegenix"><strong className="tradegenix1">learnDSA</strong>– Full-Stack DSA Practice Tracke<i class="bi bi-box-arrow-up-right"></i> <i class="bi bi-github"></i></div>
            <div className="tradegenixdescription"> <p>learnDSA is a full-stack web application that enables users to effectively track and manage their Data Structures and Algorithms (DSA) progress through a clean, personalized dashboard.</p>
            
            <p className="keyfeatures">Key Features :</p>
            <p>Secure user authentication with JWT for protected, personalized access.</p>
            <p>Full CRUD functionality to add, update, and delete DSA problems with tags (solved, unsolved, bookmarked).</p>
            <p>Persistent storage using MongoDB to ensure user data is never lost across sessions.

</p>
            <p>Fully responsive and interactive UI built with React and modular CSS</p>
            <p> Scalable backend with RESTful APIs (Node.js + Express); future-ready for Codeforces API integration.</p>

            <div className="techstack">
              <div className="techstack1">React.js</div>
              <div className="techstack1"> JWTauth</div>
              <div className="techstack1">Node.js</div>
              <div className="techstack1">Express.js</div>
              <div className="techstack1"> MongoDB</div>
              <div className="techstack1"> REST API </div>
              
            </div>
           
       </div>


       <div className="tradegenix"><strong className="tradegenix1">Online Multi-Language Compiler</strong>-Browser-Based Code Execution Platform<i class="bi bi-box-arrow-up-right"></i> <i class="bi bi-github"></i></div>
            <div className="tradegenixdescription"> <p>This full-stack application enables users to write, compile, and run code in C++, Python, and Java directly in the browser with real-time output and custom input support.</p>
            
            <p className="keyfeatures">Key Features :</p>
            <p>Backend service to securely compile and execute C++, Python, and Java using child_process.</p>
            <p>Integrated CodeMirror editor for in-browser, syntax-highlighted code editing.</p>
            <p>Temporary file creation with unique IDs and cleanup to ensure secure execution.</p>
            <p>Robust error handling and input validation to prevent code injection or crashes.</p>
            <p>CORS-enabled backend with Express static routing to serve frontend and enable cross-origin access.</p>

            <div className="techstack">
              <div className="techstack1">Child_process</div>
              <div className="techstack1">  Crypto</div>
              <div className="techstack1">Node.js</div>
              <div className="techstack1">Express.js</div>
              <div className="techstack1"> CodeMirror</div>
              <div className="techstack1"> CORS </div>
              
            </div>
           
       </div>
          </div>
        </div>
     
    


      
    </div>

    <div className="floating-bottom-bar">
  <div className="floating-bottom-bar-element" onClick={() => scrollToSection(scrollRef)}><div  class="arrow up"></div><div className="scrolltotop">Scroll to Top</div></div>
    </div>

    </div>
  );
};

export default Dashboard;