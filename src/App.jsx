import styles from "./App.module.css";
import About from "./components/About/About";
import ContactMail from "./components/Contact/ContactMail";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {

  return (
   <div className={styles.App}> 
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ContactMail />
      <Footer/>
    
   </div>
  
  );
}

export default App
