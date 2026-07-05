import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Highlights from '@/components/highlights';
import Facilities from '@/components/facilities';
import Departments from '@/components/departments';
import Doctors from '@/components/doctors';
import Gallery from '@/components/gallery';
import OPDTimings from '@/components/opd-timings';
import Branches from '@/components/branches';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Facilities />
      <Departments />
      <Doctors />
      <Gallery />
      <OPDTimings />
      <Branches />
      <Footer />
    </>
  );
}
