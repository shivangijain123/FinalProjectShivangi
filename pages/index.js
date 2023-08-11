// pages/index.js
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import ContactMe from '../components/ContactMe';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Footer from '../components/Footer';



const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <Experience />
      <ContactMe />
      <Education />
      <Skills />
      <Footer />
      {/* Rest of your HomePage content */}
    </div>
  );
}

export default HomePage;
