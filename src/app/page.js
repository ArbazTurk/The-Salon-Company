'use client';

import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
// import Reservation from './components/Reservation';
import Welcome from './components/Welcome';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Facilities from './components/Facilities';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import { useExternalScript } from '../hooks/useExternalScript';

export default function Home() {
  // Load designesia.js script using the custom hook
  const { loaded, error } = useExternalScript('/js/designesia.js');

  // Optional: Handle loading states
  if (error) {
    console.error('Failed to load designesia.js');
  }

  // You can use the 'loaded' state if you need to wait for the script
  console.log('Script loaded:', loaded);

  return (
    <>
      <Header />
      <div className="no-bottom no-top" id="content">
        <HeroSlider />
        {/* <Reservation /> */}
        <Welcome />
        <Testimonials />
        <Services />
        <Facilities />
        <InstagramFeed />
      </div>
      <Footer />
    </>
  );
}
