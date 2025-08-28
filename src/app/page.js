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

export default function Home() {
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
