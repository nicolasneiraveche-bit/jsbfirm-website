import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyJSB from '@/components/WhyJSB';
import ChoiceInnovate from '@/components/ChoiceInnovate';
import Approach from '@/components/Approach';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyJSB />
        <ChoiceInnovate />
        <Approach />
        <Partners />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
