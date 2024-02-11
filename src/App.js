
import './App.css';
import Education from './components/Education';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import References from './components/References';

import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <h1>RESUME</h1>
      <Details name="anirudh" email="2211cs010464@mallareddyuniversity.ac.in" num="7416335962" />
      <hr></hr>
      <AboutMe aboutMe="Passionate about the world of technology and coding.I thrive on the ever-evolving nature of
                technology and am committed to continuous learning.I explore Full-Stack development, where I
                enjoy creating seamless, end-to-end solutions. My curiosity drives me to explore new tools,
                languages, and frameworks. With a growth mindset, I embrace challenges and adapt to emerging
                trends.Let's connect and discuss how my skills and enthusiasm for technology can contribute to
                your projects and the broader tech community. I'm always eager to collaborate and learn from
                like-minded professionals in these exciting fields."/>
      <hr></hr>
      <Education edu="Student at malla reddy university (2nd year)" />
      <hr></hr>
      <Skills skill1="HTML,CSS,javascript" skill2='restAPI,node,express,mongoDB,mongoose,AJAX' skill3='session,flash,errorHandling,dynamic Templating'
        skill4='react,next.js' skill5='python,datastructors' skill6='figma'
      />
      <hr></hr>
      <Projects p1="Campchase" d1="HTML,CSS,javascript,ejs,mongoose,express,node"
        p2="bookstore" d2="mongoDB,react,node,express"
      />
      <hr></hr>
      <Activities activities="badmintion,chess,gaming,movies,series,anime" />
      <hr></hr>
      <Certificates certificates="Web Dev Bootcamp 2024-udemy python-fundamentals-coursera fullstack-studentTribe" />
      <hr></hr>
      <References reference1="www.linkedin.com/in/sarthak-aitha-943534252" reference2='https://github.com/wreckster1507' />
      <hr></hr>
      
    </div>
  );
}

export default App;
