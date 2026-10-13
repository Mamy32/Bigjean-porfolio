import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Work } from './sections/Work';
import { Services } from './sections/Services';
import { Experience } from './sections/Experience';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-paper text-ink min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Work />
          <Services />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
