import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import AboutPage from '@/pages/About';
import ForAgents from '@/pages/ForAgents';
import ForAgencies from '@/pages/ForAgencies';
import PartnersPage from '@/pages/Partners';
import ContactPage from '@/pages/Contact';
import JoinUsPage from '@/pages/JoinUs';
import ChoiceInnovate from '@/components/ChoiceInnovate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/agents" element={<ForAgents />} />
          <Route path="/agencies" element={<ForAgencies />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/choice" element={<ChoiceInnovate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
